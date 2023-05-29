import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import NavBar from "./_navBar";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    <NavBar />
      
      <div>
        <Link to="/zh-Hans/carousel">Carousel 简中</Link>
      </div>
      <div>
        <Link to="/en/carousel">Carousel EN</Link>
      </div>
      <div>
        {" "}
        <Link to="/zh-Hant/carousel">Carousel 繁中</Link>
      </div>
      {/* <Button>Flowbite Component</Button> */}
    </div>
  );
}
