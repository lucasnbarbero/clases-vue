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

  - `node_modules` Es la carpeta que contiene todas las dependencias de Node.js instaladas en el proyecto.
  - `public` Esta carpeta contiene los archivos públicos accesibles desde la raís del servidor.
  - `src` Aqui tenemos el código fuente de la aplicacion
    - `assets` En esta carpeta vamos a situar todos los archivos estáticos, como imágenes, estilos, fuentes, etc.
    - `components` Acá vamos a crear los componentes reutilizables.
    - `App.vue` componente raíz de la aplicacion, donde tenemos la estructura básica de la interfaz.
    - `main.js` punto de entrada de nuestro desarrollo, aqúi se crea la instancia de Vue y se montan en el elemento HTML principal de la página.
    - `style.css` contiene los estilos
  - `.gitignore` esuna lista de archivos y carpetas que se deben ignorar cuando se utiliza Git
  - `index.html` nuestro archivo HTML donde se va a montar la apliación
  - `package.json` configuración de npm para el proyecto. Contiene la información sobre las dependencias, scripts de npm, y demás.
  - `README.md` documentación del proyecto, que puede incluir instrucciones de instalación, descripciones de la aplicación y cualquier otra información relevante para los desarrolladores.
  - `vite.config.js` archivo de configuración de Vite para el proyecto. Contiene configuraciones personalizadas para el entorno de desarrollo, como ajustes de servidor y manipulación de archivos estáticos.