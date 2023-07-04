import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { logout } from "../services/session.server";

export const action: ActionFunction = async ({ request }) => logout(request);
export const loader: LoaderFunction = () => redirect("/");
