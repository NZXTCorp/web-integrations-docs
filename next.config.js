const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc({
  mode: "static",
})({
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdoc"],
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/docs/browsers": { page: "/docs/browsers" },
      "/docs/examples/google": { page: "/docs/examples/google" },
      "/docs/examples/spotify": { page: "/docs/examples/spotify" },
      "/docs/examples/unsplash": { page: "/docs/examples/unsplash" },
      "/docs/examples/youtube": { page: "/docs/examples/youtube" },
      "/docs/faq": { page: "/docs/faq" },
      "/docs/installation": { page: "/docs/installation" },
      "/docs/web-integrations": { page: "/docs/web-integrations" },
    };
  },
});
