import type { Config } from "prettier";

console.log("Prettier config loaded.");

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
