# Inicio de un proyecto real

En esta sección te vamos a mostrar como implementar una aplicación Vue. El proyecto creado utilizará una configuración de compilación basada en [Vite](https://vitejs.dev/).

**¿Qué es vite?** Vite es una herramienta de construcción de proyectos para aplicaciones web modernas basadas en Vue.js y otras tecnologías front-end. Se destaca por su rapidez y eficiencia, especialmente durante el desarrollo. Vite utiliza una arquitectura de servidor de desarrollo con capacidad de respuesta, lo que significa que es capaz de proporcionar tiempos de compilación y recarga en el navegador casi instantáneos.

Para poder seguir los pasos de creación debemos tener instalado [Node.js](https://nodejs.org/en) en nuestra máquina. Para comprobar esto, abrí la terminal y ejecuta el siguiente comando

```bash
node -v
```

En el caso de que no lo tengamos instalado, debemos [descargarlo](https://nodejs.org/en/download) e instalarlo.

## Creacion del proyecto

Abrí la terminal y nos movemos hasta el directorio donde vamos a crear la aplicación de Vue. Una vez abierta, vamos a ejecutar el siguiente comando:

```bash
npm create vue@latest
```

Este comando va a crear la base de un proyecto de Vue. Luego de este, nos va a pedir que ingresemos la configuración del proyecto de la siguiente manera:

```bash
✔ Project name: … <nombre-del-proyecto>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

Scaffolding project in ./<nombre-del-proyecto>...
Done.
```

Una vez finalizado este proceso, nos vamos a mover dentro de la carpeta creada, instalamos las dependencias e iniciamos el servidor de desarrollo.

```bash
cd <nombre-del-proyecto>
npm install
npm run dev
```

## Estructura del proyecto base

```bash
<nombre-del-proyecto>
├── node_modules/
├── public/
│   ├── vite.svg
├── src/
│   ├── assets/
│   │   ├── vue.svg
│   ├── components/
│   │   ├── HelloWorld.vue
│   ├── App.vue
│   ├── main.js
│   ├── style.css
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```


