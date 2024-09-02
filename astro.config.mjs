import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.brettaustineastman.com/",
  integrations: [tailwind(), react(), icon()],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
