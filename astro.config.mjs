import { defineConfig, squooshImageService } from "astro/config";
import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jayandmikka-wedding.netlify.app/",
  image: {
    service: squooshImageService(),
  },
  integrations: [preact(), sitemap()],
});
