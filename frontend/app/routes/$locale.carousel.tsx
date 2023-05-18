import { useLoaderData } from '@remix-run/react';
import { checkEnvVars, checkStatus } from "~/utils/errorHandling";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../carousel.css";
import { LoaderArgs } from '@remix-run/node';

export async function loader({ params }: LoaderArgs) {
  const locale = params.locale;
  checkEnvVars(); // check environmental variables
  const response = await fetch(`${process.env.STRAPI_URL_BASE}/api/carousels?populate=Image&locale=${locale}`, {
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Slider {...settings}>
        {data.map((carousel: any) => (
          <div>
            <div key={carousel.id} style={{ display: 'flex', position: 'relative', padding: '5%', gap: '2em' }}>
              <div style={{ backgroundColor: '#A18771', border: '14px solid #EDE7E0', boxSizing: 'border-box', position: 'absolute', left: 0, top: 0, height: '100%', width: '60%', zIndex: -1 }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <div style={{ fontSize: '3em', color: '#FFFFFF' }}>{carousel.attributes.Title}</div>
                <div style={{ fontWeight: 'bold', color: '#FFFFFF', marginBottom: '0.5em' }}>{carousel.attributes.TitleCaption}</div>
                <div>
                  {carousel.attributes.Body.split('\n').map((line: string) => <div style={{ color: '#FFFFFF', fontSize: '0.8em', marginBottom: '0.5em' }}>{line}</div>)}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <div style={{ color: '#A18771' }}>{carousel.attributes.ImageCaption}</div>
                <img style={{ border: '14px solid #FFFFFF' }} src={"http://localhost:1337" + carousel.attributes.Image.data.attributes.formats.small.url} alt={carousel.attributes.Image.data.attributes.name} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

