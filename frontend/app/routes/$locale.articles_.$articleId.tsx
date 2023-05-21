import { LoaderArgs, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  useHref,
  useLoaderData,
  useParams,
} from "@remix-run/react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { stripeClient } from "~/utils/stripe.server";
import "../carousel.css";

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
        stripeProductId,
        authorizeType: "Not Purchased",
      };
    }
  } else {
    return {
      authorized: true,
      article: data,
    };
  }
}

export async function action({ request }: any) {
  const form = await request.formData();
  const stripeProductId = form.get("stripeProductId");
  const successErrorUrl = form.get("successErrorUrl");

  const price = await stripeClient.prices.list({ product: stripeProductId });
  if (price.data.length !== 1) {
    throw new Error("Unexpected");
  }

  const session = await stripeClient.checkout.sessions.create({
    payment_method_types: ["card", "alipay", "wechat_pay"],
    payment_method_options: {
      wechat_pay: {
        client: "web",
      },
    },
    line_items: [
      {
        price: price.data[0].id,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `http://localhost:3000` + successErrorUrl,
    cancel_url: `http://localhost:3000` + successErrorUrl,
  });

  if (session.url) {
    return redirect(session.url);
  } else {
    throw new Error("Unexpected");
  }
}

export default function Carousel() {
  const data = useLoaderData();

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {!data.authorized && (
        <Form method="post">
          <button type="submit">Purchase</button>
          <input
            type="hidden"
            id="stripeProductId"
            name="stripeProductId"
            value={data.stripeProductId}
          />
          <input
            type="hidden"
            id="successErrorUrl"
            name="successErrorUrl"
            value={useHref(".")}
          />
        </Form>
      )}
      <Link to={`/${useParams().locale}/articles`}>Go Back</Link>
    </div>
  );
}
