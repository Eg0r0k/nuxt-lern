// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "nuxt-lucide-icons",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxtjs/mdc",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxt/icon",
    "nuxt-monaco-editor",
    [
      "@vee-validate/nuxt",
      {
        autoImports: true,
      },
    ],
    "@nuxt/icon",
    "@nuxtjs/mdc",
    "@nuxt/image",
  ],

  mdc: {
    highlight: {
      langs: [
        "js",
        "html",
        "ts",
        "vue",
        "md",
        "json",
        "css",
        "python",
        "bash",
        "yaml",
      ],
    },
  },
  icon: {
    customCollections: [
      {
        prefix: "icons",
        dir: "./assets/icons",
      },
    ],
    serverBundle: {
      collections: [
        "fluent",
        "mdi",
        "bxs",
        "teenyicons",
        "basil",
        "iconamoon",
        "solar",
        "tabler",
        "ic",
        "line-md",
        "bi",
      ],
    },
  },
  monacoEditor: {
    locale: "en",
    componentName: {
      codeEditor: "MonacoEditor",
      diffEditor: "MonacoDiffEditor",
    },
  },
  colorMode: {
    preference: "system",
    fallback: "dark",
    classSuffix: "",
    storage: "localStorage",
    storageKey: "nuxt-color-mode",
  },
  ssr: true,

  shadcn: {
    prefix: "",

    componentDir: "./components/ui",
  },
});
