import { useSiteContent } from "~/components/SiteContentContext";

export default function LocaleHome() {
  const siteContent = useSiteContent();

  return <div>Lorem {siteContent.siteTitle}</div>;
}
