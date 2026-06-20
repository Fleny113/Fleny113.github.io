import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
    fonts: [
        {
            provider: fontProviders.google(),
            name: "Fira Code",
            cssVariable: "--font-fira-code",
        },
        {
            provider: fontProviders.google(),
            name: "Zalando Sans SemiExpanded",
            cssVariable: "--font-zalando-sans",
        }
    ],
    experimental: {
        chromeDevtoolsWorkspace: true,
    }
});
