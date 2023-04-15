import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: netlify()
});