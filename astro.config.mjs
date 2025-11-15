// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tinaDirective from "./astro-tina/register";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "https://astro-tina.bcatubig.workers.dev/",
  integrations: [mdx(), sitemap(), tinaDirective()],
});
