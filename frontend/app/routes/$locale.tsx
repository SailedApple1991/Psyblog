import { LoaderArgs, json, redirect } from "@remix-run/node";
import { Outlet, V2_MetaFunction, useLoaderData } from "@remix-run/react";
import acceptLanguage from "accept-language-parser";
import { getStrapiApi } from "~/api/strapiWrapper";
import { SiteContentContext } from "~/components/SiteContentContext";
import { supportLocales } from "~/utils/supportLocales";
import NavBar from "../components/NavBar";
import { Menu } from "~/api/strapi";

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

  const menuResp = await getStrapiApi().menus.getMenus({
    locale: pickedLanguage,
  });

  return json({
    siteContent: siteContentResp.data.data?.attributes,
    menuData: menuResp.data.data,
  });
}

export default function LocaleGuard() {
  const { siteContent, menuData } = useLoaderData<typeof loader>();

  const menuItems: Menu[] = menuData
    ?.map((menu) => menu.attributes)
    .filter((menu) => !!menu)
    .sort((a, b) => (a?.priority || 0) - (b?.priority || 0)) as Menu[];

  return (
    siteContent &&
    menuItems && (
      <SiteContentContext.Provider value={siteContent}>
        <NavBar menuItems={menuItems} />
        <Outlet />
      </SiteContentContext.Provider>
    )
  );
}
