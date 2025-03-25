import { extractLocale } from "@locales/extractLocale";
import type { OnBeforeRouteSync } from "vike/types";
import { modifyUrl } from "vike/modifyUrl";

const onBeforeRoute: OnBeforeRouteSync = (
  pageContext
): ReturnType<OnBeforeRouteSync> => {
  const url = pageContext.urlParsed;
  const { urlPathnameWithoutLocale, locale } = extractLocale(url.pathname);
  const urlLogical = modifyUrl(url.href, {
    pathname: urlPathnameWithoutLocale,
  });

  console.log("urlPathnameWithoutLocale", urlPathnameWithoutLocale);
  console.log("locale", locale);
  console.log("urlLogical", urlLogical);

  return { pageContext: { locale, urlLogical } };
};

export { onBeforeRoute };
