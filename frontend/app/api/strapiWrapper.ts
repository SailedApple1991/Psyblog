import { Api } from "./strapi";

export function getStrapiApi(): Api<unknown> {
  return new Api({
    baseUrl: process.env.STRAPI_URL_BASE + "/api",
    baseApiParams: {
      format: "json",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    },
  });
}
