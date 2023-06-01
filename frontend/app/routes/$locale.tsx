import { LoaderArgs, json, redirect } from "@remix-run/node";
import { Outlet, V2_MetaFunction, useLoaderData } from "@remix-run/react";
import acceptLanguage from "accept-language-parser";
import { getStrapiApi } from "~/api/strapiWrapper";
import { SiteContentContext } from "~/components/SiteContentContext";
import { supportLocales } from "~/utils/supportLocales";
import NavBar from "./_navBar";

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.siteTitle }];
};

export async function loader({ params }: LoaderArgs) {
  const pickedLanguage = acceptLanguage.pick(
    supportLocales,
    params.locale || ""
  );
  if (
    !pickedLanguage ||
    !(supportLocales as string[]).includes(pickedLanguage)
  ) {
    return redirect("/");
  }
  if (pickedLanguage !== params.locale) {
    return redirect(`/${pickedLanguage}`);
  }

  const siteContentResp = await getStrapiApi().siteContent.getSiteContent({
    locale: pickedLanguage,
  });

  return json(siteContentResp.data.data?.attributes);
}

export default function LocaleGuard() {
  const siteContent = useLoaderData<typeof loader>();

  return (
    <SiteContentContext.Provider value={siteContent}>
      <NavBar />
      <Outlet />
    </SiteContentContext.Provider>
  );
}
