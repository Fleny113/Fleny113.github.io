import type { Config } from "prettier";

export default {
  printWidth: 120,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
} satisfies Config

