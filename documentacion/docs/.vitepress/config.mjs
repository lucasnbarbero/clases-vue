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
          { text: "Instalación de Node.js", link: "/node" },
          { text: "Introducción", link: "/introduction" },
          { text: "Inicio rápido", link: "/getting-started" },
        ],
      },
      {
        text: "Esenciales",
        items: [
          {
            text: "Fundamentos de reactividad",
            link: "/essentials/reactivity-fundamentals",
          },
          {
            text: "Sintaxis de plantilla",
            link: "/essentials/template-syntax",
          },
          { text: "Propiedades computadas", link: "/essentials/computed" },
          {
            text: "Vinculación con clases y estilos",
            link: "/essentials/class-and-style",
          },
          { text: "Renderizado condicional", link: "/essentials/conditional" },
          { text: "Renderizado de listas", link: "/essentials/list" },
          {
            text: "Vinculación de entradas de formulario",
            link: "/essentials/forms",
          },
          { text: "Hooks del ciclo de vida", link: "/essentials/lifecycle" },
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
