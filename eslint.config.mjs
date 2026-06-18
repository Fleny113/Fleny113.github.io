// @ts-check

import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig(
    { ignores: ["dist/", ".astro/", "node_modules/"] },
    js.configs.recommended,
    tseslint.configs.stylisticTypeChecked,
    tseslint.configs.strictTypeChecked,
    eslintPluginAstro.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
    },
);
