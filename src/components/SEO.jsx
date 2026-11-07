
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSEO, SITE_URL } from "../config/seo";

function updateMeta(attribute, key, content) {
  let element = document.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSEO(pathname);
    const canonical = `${SITE_URL}${seo.canonical}`;

    document.title = seo.title;

    updateMeta("name", "description", seo.description);
    updateMeta(
      "name",
      "robots",
      seo.index ? "index, follow" : "noindex, follow"
    );

    updateMeta("property", "og:title", seo.title);
    updateMeta(
      "property",
      "og:description",
      seo.description
    );
    updateMeta("property", "og:type", "website");
    updateMeta("property", "og:url", canonical);

    updateMeta("name", "twitter:card", "summary");
    updateMeta("name", "twitter:title", seo.title);
    updateMeta(
      "name",
      "twitter:description",
      seo.description
    );

    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.href = canonical;
  }, [pathname]);

  return null;
}
