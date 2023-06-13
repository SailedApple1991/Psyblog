import { LoaderArgs, json, redirect } from "@remix-run/node";
import { Outlet, V2_MetaFunction, useLoaderData } from "@remix-run/react";
import acceptLanguage from "accept-language-parser";
import { DeepPartial, Flowbite, FlowbiteTheme } from "flowbite-react";
import { Menu } from "~/api/strapi";
import { getStrapiApi } from "~/api/strapiWrapper";
import { SiteContentContext } from "~/components/SiteContentContext";
import { supportLocales } from "~/utils/supportLocales";
import NavBar from "../components/NavBar";

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.siteContent?.siteTitle }];
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

  const carouselResp = await getStrapiApi().carousels.getCarousels({
    locale: pickedLanguage,
    populate: "Image",
  });

  return json({
    siteContent: siteContentResp.data.data?.attributes,
    menuData: menuResp.data.data,
    carousels: carouselResp.data.data,
    locale: pickedLanguage,
  });
}

const customTheme: DeepPartial<FlowbiteTheme> = {
  button: {
    color: {
      primary: "bg-main hover:opacity-90",
    },
    outline: {
      on: "text-main bg-white hover:opacity-90",
      off: "text-white",
    },
  },
  carousel: {
    indicators: {
      wrapper: "absolute right-5 top-1/2 flex flex-col space-y-3",
    },
  },
};

export default function LocaleGuard() {
  const { siteContent, menuData, locale, carousels } =
    useLoaderData<typeof loader>();
  const menuItems: Menu[] = (menuData || [])
    .map((menu) => menu.attributes)
    .filter((menu) => !!menu)
    .sort((a, b) => (a?.priority || 0) - (b?.priority || 0)) as Menu[];

  return (
    siteContent &&
    menuItems && (
      <SiteContentContext.Provider value={siteContent}>
        <Flowbite theme={{ theme: customTheme }}>
          <NavBar
            menuItems={menuItems}
            locale={locale}
            carousels={carousels || []}
          />
          <Outlet />
        </Flowbite>
      </SiteContentContext.Provider>
    )
  );
}
