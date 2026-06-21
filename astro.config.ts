import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
    fonts: [
        {
            provider: fontProviders.google(),
            name: "Fira Code",
            cssVariable: "--font-fira-code",
            weights: ["400", "700"],
        },
        {
            provider: fontProviders.google(),
            name: "Zalando Sans SemiExpanded",
            cssVariable: "--font-zalando-sans",
            weights: ["700"],
        },
    ],
    experimental: {
        chromeDevtoolsWorkspace: true,
    },
});
