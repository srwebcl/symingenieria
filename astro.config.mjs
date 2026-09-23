import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.sym-ingenieria.cl",
  trailingSlash: "ignore",
  integrations: [sitemap()],
});
