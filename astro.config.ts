import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import react from "react";

// https://astro.build/config
export default defineConfig({
  // ! Please remember to replace the following site property with your own domain
  site: "https://mblkhr.github.io/astro-blog-cactus",
  base: "astro-blog-cactus",
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true
    }
  },
  integrations: [
    mdx({}),
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp"
    }),
    sitemap(),
    prefetch(),
    react()
  ],
  compressHTML: true,
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});