const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc({
  mode: "static",
})({
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdoc"],
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/docs/browsers": { page: "/docs/browsers" },
      "/docs/faq": { page: "/docs/faq" },
      "/docs/installation": { page: "/docs/installation" },
      "/docs/web-integrations": { page: "/docs/web-integrations" },
    };
  },
});
