
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createServer } from "vite";

const root = process.cwd();
const dist = path.resolve(root, "dist");

const routes = [
  {
    path: "/",
    title: "SocialSaver - Free Instagram & Facebook Downloaders",
    description:
      "Explore SocialSaver's free online tools for downloading supported public Instagram Reels, photos, carousel posts, and Facebook Reels.",
  },
  {
    path: "/about/",
    title: "About Us - SocialSaver",
    description:
      "Learn about SocialSaver, an independent platform providing simple online Instagram and Facebook downloading tools.",
  },
  {
    path: "/contact/",
    title: "Contact Us - SocialSaver",
    description:
      "Contact SocialSaver for questions, technical support, feedback, and copyright-related inquiries.",
  },
  {
    path: "/privacy-policy/",
    title: "Privacy Policy - SocialSaver",
    description:
      "Read the SocialSaver Privacy Policy to learn about information processing, downloader URLs, browser storage, and privacy choices.",
  },
  {
    path: "/terms/",
    title: "Terms of Service - SocialSaver",
    description:
      "Review SocialSaver's Terms of Service, including responsible use, copyright responsibilities, and service limitations.",
  },
  {
    path: "/dmca/",
    title: "DMCA & Copyright Policy - SocialSaver",
    description:
      "Learn how to report copyright concerns to SocialSaver and review our DMCA notice and counter-notification procedures.",
  },
];

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}


function generateHomepageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://socialsaver.io/#website",
        name: "SocialSaver",
        url: "https://socialsaver.io/",
        description:
          "Free online tools for downloading Instagram and Facebook content.",
        publisher: {
          "@id": "https://socialsaver.io/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://socialsaver.io/#organization",
        name: "SocialSaver",
        url: "https://socialsaver.io/",
      },
    ],
  };

  return `
    <script
      id="socialsaver-homepage-schema"
      type="application/ld+json"
    >${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>
  `;
}


function generateHead(route) {
  const canonical = `https://socialsaver.io${route.path}`;
  const title = escapeHTML(route.title);
  const description = escapeHTML(route.description);
  const url = escapeHTML(canonical);
  const structuredData = route.path === "/" ? generateHomepageSchema() : "";

  return `
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${url}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${url}">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    ${structuredData}
  `;
}

const vite = await createServer({
  configFile: path.resolve(root, "vite.config.js"),
  server: {
    middlewareMode: true,
  },
  appType: "custom",
  logLevel: "error",
});

try {
  const { render } = await vite.ssrLoadModule(
    "/src/entry-server.jsx"
  );

  const template = await fs.readFile(
    path.join(dist, "index.html"),
    "utf8"
  );

  for (const route of routes) {
    const appHTML = render(route.path);

    let html = template.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${appHTML}</div>`
    );

    if (html === template) {
      throw new Error(
        "Could not find the React root in index.html"
      );
    }

    html = html.replace(
      "</head>",
      `${generateHead(route)}\n</head>`
    );

    const outputDirectory =
      route.path === "/"
        ? dist
        : path.join(dist, route.path.slice(1));

    await fs.mkdir(outputDirectory, {
      recursive: true,
    });

    await fs.writeFile(
      path.join(outputDirectory, "index.html"),
      html,
      "utf8"
    );

    console.log(`Prerendered: ${route.path}`);
  }

  console.log("SocialSaver prerendering completed.");
} finally {
  await vite.close();
}
