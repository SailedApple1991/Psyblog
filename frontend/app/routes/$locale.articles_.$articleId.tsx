import { LoaderArgs } from "@remix-run/node";
import {
  Link,
  useLoaderData,
  useNavigate,
  useNavigation,
  useParams,
} from "@remix-run/react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { checkEnvVars, checkStatus } from "~/utils/errorHandling";
import "../carousel.css";
import { stripeClient } from "~/utils/stripe.server";

export async function loader({ params }: LoaderArgs) {
  const TEST_CUSTOMER_EMAIL = "customer@test.com";
  const VIP_INVOICE_THRESHOLD = 20;
  const { articleId, locale } = params;

  const articleResp = await fetch(
    `${process.env.STRAPI_URL_BASE}/api/blogs/${articleId}?locale=${locale}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  const { data } = await articleResp.json();
  const stripeProductId = data.attributes.stripeProductId;

  if (stripeProductId) {
    const customersResp = await stripeClient.customers.list({
      email: TEST_CUSTOMER_EMAIL,
    });

    if (customersResp.data.length !== 1) {
      throw new Error("Cannot find the unique customer!");
    }

    const customerId = customersResp.data[0].id;

    const invoices = await stripeClient.invoices.list({ customer: customerId });
    if (invoices.data.length >= VIP_INVOICE_THRESHOLD) {
      return {
        authorized: true,
        authorizeType: "VIP",
        article: data,
      };
    }

    if (
      invoices.data.some((invoice) =>
        invoice.lines.data.some(
          (line) => line.price && line.price.product === stripeProductId
        )
      )
    ) {
      return {
        authorized: true,
        authorizeType: "Purchased",
        article: data,
      };
    } else {
      return {
        authorized: false,
        authorizeType: "Not Purchased",
      };
    }
  } else {
    return {
      authrozied: true,
      article: data,
    };
  }

  // const invoicesResp = await stripeClient.invoices.list({ customer: customerId, limit: VIP_INVOICE_THRESHOLD });

  // if (invoicesResp.data.length >= VIP_INVOICE_THRESHOLD) {

  // }

  return {
    // customer: customersResp.data[0],
    // invoices: invoicesResp.data,
  };
}
export default function Carousel() {
  const data = useLoaderData();

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Link to={`/${useParams().locale}/articles`}>Go Back</Link>
    </div>
  );
}
