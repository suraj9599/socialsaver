
export const SITE_URL = "https://socialsaver.io";

export const seoConfig = {
  "/": {
    title: "SocialSaver - Free Instagram & Facebook Downloaders",
    description:
      "Explore SocialSaver's free online tools for downloading supported public Instagram Reels, photos, carousel posts, and Facebook Reels.",
    canonical: "/",
    index: true,
  },

  "/about/": {
    title: "About Us - SocialSaver",
    description:
      "Learn about SocialSaver, an independent platform providing simple online Instagram and Facebook downloading tools.",
    canonical: "/about/",
    index: true,
  },

  "/contact/": {
    title: "Contact Us - SocialSaver",
    description:
      "Contact SocialSaver for questions, technical support, feedback, and copyright-related inquiries.",
    canonical: "/contact/",
    index: true,
  },

  "/privacy-policy/": {
    title: "Privacy Policy - SocialSaver",
    description:
      "Read the SocialSaver Privacy Policy to learn about information processing, downloader URLs, browser storage, and privacy choices.",
    canonical: "/privacy-policy/",
    index: true,
  },

  "/terms/": {
    title: "Terms of Service - SocialSaver",
    description:
      "Review SocialSaver's Terms of Service, including responsible use, copyright responsibilities, and service limitations.",
    canonical: "/terms/",
    index: true,
  },

  "/dmca/": {
    title: "DMCA & Copyright Policy - SocialSaver",
    description:
      "Learn how to report copyright concerns to SocialSaver and review our DMCA notice and counter-notification procedures.",
    canonical: "/dmca/",
    index: true,
  },
};

export function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";

  const cleanPath = pathname.split("?")[0].split("#")[0];

  return cleanPath.endsWith("/")
    ? cleanPath
    : `${cleanPath}/`;
}

export function getSEO(pathname) {
  const path = normalizePath(pathname);

  return (
    seoConfig[path] || {
      title: "Page Not Found - SocialSaver",
      description:
        "The requested SocialSaver page could not be found.",
      canonical: path,
      index: false,
    }
  );
}
