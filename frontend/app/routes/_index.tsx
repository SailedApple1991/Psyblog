import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div><Link to="/zh-Hans/carousel">Carousel 简中</Link></div>
      <div><Link to="/en/carousel">Carousel EN</Link></div>
      <div> <Link to="/zh-Hant/carousel">Carousel 繁中</Link></div>
      <div> <Link to="/payments/tarot/checkoutPopUp">Payment</Link></div>
    </div>
  );
}
