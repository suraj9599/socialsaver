
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

function getHomepageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "SocialSaver",
        url: `${SITE_URL}/`,
        description:
          "Free online tools for downloading Instagram and Facebook content.",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "SocialSaver",
        url: `${SITE_URL}/`,
      },
    ],
  };
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

    // Add structured data only to the homepage.
    const schemaId = "socialsaver-homepage-schema";
    const isHomepage = seo.canonical === "/";

    let schemaScript = document.getElementById(schemaId);

    if (isHomepage) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = schemaId;
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }

      schemaScript.textContent = JSON.stringify(
        getHomepageSchema()
      );
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [pathname]);

  return null;
}
