import { LoaderArgs, redirect } from "@remix-run/node";
import { Outlet, V2_MetaFunction } from "@remix-run/react";
import { supportLocales } from "~/utils/supportLocales";
import acceptLanguage from "accept-language-parser";
import NavBar from "./_navBar";

export const meta: V2_MetaFunction = ({ data }) => {
  return [{ title: data }];
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
  return pickedLanguage;
}

export default function LocaleGuard() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
