import { defineConfig, squooshImageService } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  integrations: [preact()],
});
