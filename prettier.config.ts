import type { Config } from "prettier";

export default {
    printWidth: 120,
    tabWidth: 4,
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
        {
            files: "package.json",
            options: {
                tabWidth: 2,
            },
        },
    ],
} satisfies Config;
