# Creemos un proyecto real

Cuando hablamos de "projecto real", nos referimos a crear una aplicacion web de verdad, o sea, una aplicación que podríamos usar en la vida real, no solo en un entorno de aprendizaje.

## Estructura y modularización

Para que podamos entender como se conforma un proyecto "Real", debemos hacer lo siguiente:

Tomemos como punto de partida el código inicial del contador que modificamos en el primer ejercicio:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>Contador</h1>
      <div>
        <p>{{ count }}</p>
        <div>
          <button @click="decrement">-1</button>
          <button @click="increment">+1</button>
        </div>
      </div>
    </div>

    <script>
      Vue.createApp({
        data() {
          return {
            count: 0,
          };
        },
        methods: {
          increment() {
            this.count++;
          },
          decrement() {
            this.count--;
          },
        },
      }).mount("#app");
    </script>
  </body>
</html>
```

En este punto nuestro primer ejercicio está resuelto.

¿Qué problema tenemos con este código? Es difícil de leer, escalar y mantener. ¿Que podemos hacer para mejorar esto?

Lo primero, limpiar nuestro archivo `.html` y crear un archivo `.js` que contenga nuestra lógica. Aprovechemos y hagamos unos cambios:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app"></div>

    <script src="./src/main.js"></script>
  </body>
</html>
```

```js
//  src/main.js
const app = Vue.createApp({
  template: `
    <h1>Contador</h1>
    <div>
      <p>{{ count }}</p>
      <div>
        <button @click="decrement">-1</button>
        <button @click="increment">+1</button>
      </div>
    </div>
  `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});

app.mount("#app");
```

Ahora tenemos separada la maqueta por un lado y la lógica por otro. Si nos fijamos, nuestra aplicación sigue siendo totalmente funcional.

Esto lo podemos dejar asi, pero no es lo recomendado.

Creemos un nuevo archivo `App.js`. Este archivo debe estar dentro de `src` al mismo nivel que el `index.js`. En este archivo, vamos a exportar el objeto que va a recibir la función `createApp()`

```js
//  src/App.js
export default {
  template: `
    <h1>Contador</h1>
    <div>
      <p>{{ count }}</p>
      <div>
        <button @click="decrement">-1</button>
        <button @click="increment">+1</button>
      </div>
    </div>
  `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};

// src/main.js
import App from "./App.js";

const app = Vue.createApp(App);

app.mount("#app");
```

Excelente! Ahora tenemos totalmente modularizada nuestra aplicación. Nuestro componente`App.js` por un lado, el inicio de nuestra aplicación por otro y la maqueta por otro.

Vamos a seguir mejorando nuestra aplicación. El siguiente paso es crear el componente para el boton que ejecuta las acciones de mi componente `App.js`. Lo hacemos de la siguiente manera:

```js
//  src/components/MyButton.js
export default {
  emits: ["handleClick"],
  template: `
    <button @click="$emit('handleClick')">
      <slot />
    </button>
  `,
};

//  A este componente lo importamos y lo utilizamos en nuestro componente App

import MyButton from "./components/MyButton.js";

export default {
  components: {
    MyButton,
  },

  /* Resto del componente App */

};

```

## Node.js

Antes de comenzar con Vue, les dimos una breve introducción a Node.js e hicimos que lo instalen en sus computadoras. Ahora es el momento que entendamos el por qué.

Como vimos, [Node](https://nodejs.org/en) es una plataforma de tiempo de ejecución de JavaScript que nos permite ejecutar código fuera del navegador, en el servidor. ¿Que significa para nosotros como desarrolladores de Vue? Nos da acceso a un gran conjunto de herramientas y paquetes que nos pueden ayudar a construir y desarrollar nuestras aplicaciones.

**¿Cómo utilizamos Node en nuestro desarrollo con Vue?**

Una de las formas más comunes en que utilizamos Node, es a través de npm. Con esto, podemos instalar y gestionar fácilmente todas las dependencies de nuestros proyectos de Vue, desde el mismo Vue, hasta una variedad de complementos y bibliotecas útiles que pueden hacer que nuestro desarrollo sea más rápido y más fácil.

### Instalemos Vue con npm

Actualmente, estamos utilizando un CDN para lograr que una aplicación de Vue se ejecute sobre nuestro `index.html`

Abramos una consola, ya sea el cmd, powershell, la que nos da nuestro VSCode o la que prefieran. Vamos a navegar (si es que hace falta) y nos vamos a para sobre la carpeta donde se encuentra nuestro `index.html` y vamos a ejecutar el siguiente comando:

```bash
npm init -y
```

Una vez creado nuestro archivo `package.json`, vamos a instalar vue en nuestra aplicación

```bash
npm install vue
```

Modifiquemos nuestro `index.html`. Ya que tenemos instalada el paquete de Vue, no hace falta que lo importemos mediante el CDN, por lo tanto, borramos esto y lo llamamos directamente desde nuestro `main.js`.

## Vite

Llegó el momento de poder levantar nuestra aplicación en un entorno de desarrollo. Para esto, vamos a utilizar Vite. Pero...

### ¿Qué es Vite?

Vite es una herramienta de construcción de proyectos ultrarrápida que nos permite desarrollar aplicaciones web modernas. Vite cuenta con una gran capacidad para cargar y actualizar muy rápidamente nuestro código en el navegador. Esto significa que podemos ver los cambios en tiempo real mientras trabajamos en nuestra aplicación.

### Instalación

Para instalar vite en nuestro proyecto debemos instalar la dependendia en modo de desarrollo, ya que es una librería que se va a utilizar únicamente en este entorno.

```bash
npm install -D vite @vitejs/plugin-vue
```

De esta forma, ya tenemos disponible Vite. También instalamos `@vitejs/plugin-vue`, esto es un complemento para Vite que permite cargar archivos de componente Vue de manera eficiente.

## Inicio de nuestro proyecto

Llegó el gran momento! Vamos a hacer que nuestro proyecto quede "corriendo". Pero para esto, debemos hacer las últimas configuraciones.

Vamos a crear el archivo `vite.config.js` en la raíz del proyecto

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
});
```

Además, en nuestro `package.json` vamos a establecer nuestro primer script:

```json
{
  /**
  .......
   */
  "scripts": {
    "dev": "vite"
  }
  /**
  .......
   */
}
```

Ya tenemos las configuraciones listas de nuestro proyecto! Ya nos falta muy poco...

## Componentes reales

Los componentes de Vue, se crean en archivos `.vue`. Estos nos ofrecen la siguiente sintáxis inicial:

```vue
<template></template>

<script></script>

<style></style>
```

Aprovechemos esto y convirtamos nuestros `js` en componentes `vue`.

Actualmente, tenemos nuestros componentes `App` y `MyButton` hechos con `.js`. Vamos a pasarlos a `.vue`. Para esto, vamos a reemplazar la extensión del archivo `App.js` por `App.vue`. aprovechemos la sintaxis que nos ofrecen estos tipos de archivos.

```vue
<template>
  <h1>Contador</h1>
  <div>
    <p>{{ count }}</p>
    <div>
      <MyButton @click="decrement">-1</MyButton>
      <MyButton @click="increment">+1</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "./components/MyButton";

export default {
  components: {
    MyButton,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>
```

Hagamos lo mismo con el componente `MyButton`

```vue
<template>
  <button @click="$emit('handleClick')">
    <slot />
  </button>
</template>

<script>
export default {
  emits: ["handleClick"],
};
</script>
```

**¡Por último!** nuestro archivo `main.js` debemos modificarlo para que quede de la siguiente manera:

```js
import { createApp } from "vue";

import App from "./App.vue";

const app = createApp(App);

app.mount("#app");
```

**¡Felicitaciones!** 🥳🥳🥳

Ya tenemos nuestro primer proyecto Vue creado por nosotros con una estructura profesional, modularizada y lista para escalar fácilmente!

Sigamos!
