import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Introduccion a Vue.js",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/assets/logo-vue.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Empecemos", link: "/introduction" },
    ],

    sidebar: [
      {
        text: "Introducción",
        items: [
          { text: "Empecemos", link: "/introduction" },
          { text: "Inicio de un proyecto", link: "/getting-started" },
        ],
      },
      {
        text: "Teoría",
        items: [
          { text: "Componentes", link: "/components" },
          { text: "Directivas", link: "/directives" },
        ],
      },
      {
        text: "Práctica",
        items: [
          { text: "01 - Primer ejercicio", link: "/exercises/exercise-01" },
          { text: "02 - Lista de tareas", link: "/exercises/exercise-02" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/lucasnbarbero/clases-vue" },
    ],
  },
});
