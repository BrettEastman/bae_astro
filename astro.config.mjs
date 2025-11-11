import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "server",
  adapter: vercel({
    mode: "serverless",
    webAnalytics: { enabled: true },
  }),
});
