import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://lunolabs.ch', // Your public domain
  sitemap: true, // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), mdx(), lit(), icon(), react()], // Add renderers to the config
  vite: {
    ssr: {
      noExternal: ['@builder.io/sdk', '@builder.io/sdk-react'],
    },
  },
});