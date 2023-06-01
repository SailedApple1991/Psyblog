import { createContext, useContext } from "react";
import { SiteContent } from "~/api/strapi";

export const SiteContentContext = createContext<SiteContent>({});

export const useSiteContent = () => useContext(SiteContentContext);
