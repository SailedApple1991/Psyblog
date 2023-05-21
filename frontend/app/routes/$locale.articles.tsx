import { Link, useLoaderData } from '@remix-run/react';
import { checkEnvVars, checkStatus } from "~/utils/errorHandling";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../carousel.css";
import { LoaderArgs } from '@remix-run/node';

export async function loader({ params }: LoaderArgs) {
  const locale = params.locale;
  checkEnvVars(); // check environmental variables
  const response = await fetch(`${process.env.STRAPI_URL_BASE}/api/blogs?locale=${locale}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
      "Content-Type": "application/json"
    }
  }); // get the blogs

  checkStatus(response); // check the status

  const data = await response.json(); // get the json response

  if (data.error) { // error check
    throw new Response("Error loading data from strapi", { status: 500 });
  }

  return data.data; // return the data
}
export default function Carousel() {
  const data = useLoaderData();

  return (
    <div>
      {data.map((item: any) => <Link to={`./${item.id}`}>
        <h2>{item.attributes.Title}{item.attributes.stripeProductId && <small style={{ color: 'orange' }}> VIP only</small>}</h2>
        <p>{item.attributes.Excerpt}</p>
        <br />
      </Link>)}
    </div>
  );
}
