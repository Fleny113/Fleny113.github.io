// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/style.css"],
    compatibilityDate: '2026-03-15',
    future: {
        compatibilityVersion: 5,
    },
    devtools: {
        enabled: true,
    },
    typescript: {
        strict: true,
    }
});
