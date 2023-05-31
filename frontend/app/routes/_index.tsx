import { LoaderArgs, redirect } from "@remix-run/node";
import acceptLanguage from "accept-language-parser";
import { supportLocales } from "~/utils/supportLocales";

export async function loader({ request }: LoaderArgs) {
  const language =
    acceptLanguage.pick(
      supportLocales,
      request.headers.get("Accept-Language") || "",
      { loose: true }
    ) || "en";

  return redirect(`/${language}`);
}

export default function Index() {
  return null;
}
