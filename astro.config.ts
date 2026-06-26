import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    fonts: [
        {
            provider: fontProviders.google(),
            name: "Inter",
            cssVariable: "--font-inter",
            weights: ["700"],
        },
        {
            provider: fontProviders.google(),
            name: "Exo 2",
            cssVariable: "--font-exo-2",
            weights: ["400", "700"],
        },
    ],
    compressHTML: true,
    integrations: [icon()],
    experimental: {
        chromeDevtoolsWorkspace: true,
    },
});
