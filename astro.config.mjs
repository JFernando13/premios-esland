import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import vercel from '@astrojs/vercel/serverless';

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    nesting: true
  }), preact(), auth({
    configFile: "auth.config.js",
  })],
  output: "server",
  adapter: vercel(),
});