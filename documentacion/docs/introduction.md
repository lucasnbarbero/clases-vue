# Introducción

¡Bienvenidos a nuestra guía de aprendizaje! A lo largo de esta guía, te vamos a enseñar los fundamentos básicos para el desarrollo de aplicaciones frontend con Vue.js

## ¿Qué es Vue.js?

[Vue.js](https://vuejs.org/) es un framework de JS que nos permite realizar interfaces reactivas.

**¿Qué es un framework?** Un conjunto de herramientas que nos proporciona funcionalidades para ejecutar nuestro código de una manera más fácil.

**¿Qué son las interfaces?** Son los elementos con los que interactúa el usuario, es decir, la parte visible de la aplicación.

**¿Qué es la reactividad?** Significa que cuanto vamos a ejecutar lo que construímos, podemos actualizar la información de manera tal que no hace falta que hagamos peticiones ni refresquemos el navegador

## Como funciona Vue.js

Vue funciona con un DOM Virtual. ¿Qué es esto? Una "técnica" para hacer que las actualizaciones de la página sean más rápidas. En lugar de actualizar directamente el DOM, se utiliza una versión virtual en la memoria del navegador. Luego, compara esta versión virtual con la página real y solo actualiza las partes que han cambiado, lo que hace que las actualizaciones sean más efecientes y rápidas.

## Ejemplo con CDN

Un CDN(Content Delivery Network) es una red de servidores que se utilizan para entregar contenido web, como archivos estáticos de manera rápida y eficiente.

En el siguiente ejemplo, mostramos como podemos empezar a trabajar con Vue de una manera rápida y sencilla.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejemplo Vue.js con CDN</title>
    <!-- Incluir Vue.js desde CDN -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>{{ message }}</h1>
    </div>

    <script>
      Vue.createApp({
        data() {
          return {
            message: "Hola mundo",
          };
        },
      }).mount("#app");
    </script>
  </body>
</html>
```

**¿Qué estamos haciendo aquí?** En la sección `<script>`, creamos una nueva instancia de Vue. Especificamos que esta instancia se va a montar en el elemento con el ID `#app` y configuramos un dato llamado `message` con el valor "Hola mundo". Este dato es dinámico y se va a mostrar en el elemento `<h1></h1>`, lo que significa que si cambiamos el valor de `message`, la interfaz de usuario se actualizará de manera automática para reflejar este cambio.

****

Como dijimos, en el ejemplo anterior mostramos solo una manera rápida y sencilla de crear una aplicación de Vue, pero en el mundo real, esto casi no se utiliza. Vamos a ver como podemos construir una aplicacion posta.
