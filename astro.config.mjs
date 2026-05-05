import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://kameshkanna.github.io",
  integrations: [tailwind()],
});
