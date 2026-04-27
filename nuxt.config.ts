import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

// With Nuxt 4 (compatibilityVersion: 4), srcDir = "app/", so ~ resolves to app/.
// We compute the absolute styles path so Sass can resolve @use "mixins" etc.
// from component .scss files located outside the styles directory.
const stylesDir = resolve(
  fileURLToPath(new URL(".", import.meta.url)),
  "app",
  "styles",
);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2025-05-01",

  devtools: { enabled: true },

  app: {
    head: {
      title: "Anatoli Trebko — Frontend Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Frontend developer specializing in Nuxt 3, Vue 3 and TypeScript. Building fast, animated interfaces.",
        },
        { name: "theme-color", content: "#0a0a0f" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },

  css: ["~/styles/main.scss"],

  components: [{ path: "~/components", pathPrefix: false }],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // loadPaths lets any .scss file outside the styles dir
          // write @use "mixins" / @use "variables" without a full path.
          // Files inside the styles dir find each other relatively.
          loadPaths: [stylesDir],
        },
      },
    },
  },
});
