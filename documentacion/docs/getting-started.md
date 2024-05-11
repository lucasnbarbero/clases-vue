# Inicio rápido

## Usando Vue desde CDN

Podemos usar Vue directamente desde una CDN mediante una etiqueta script:

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

Aquí usamos [unpkg](https://unpkg.com/) , pero también puede usar cualquier CDN que sirva paquetes npm, por ejemplo [jsdelivr](https://www.jsdelivr.com/package/npm/vue) o [cdnjs](https://cdnjs.com/libraries/vue) . Por supuesto, también puedes descargar este archivo y servirlo tú mismo.

Cuando se utiliza Vue desde una CDN, no implica ningún "paso de compilación". Esto hace que la configuración sea mucho más simple y es adecuado para mejorar HTML estático.

### Usando la compilación global

Cuando usamos **"compilación global"**, significa que todas las herramientas y funciones de Vue están disponibles directamente a travñes de un objeto llamado "Vue" que se puede usar en cualquier lugar de nuestro código.

Por ejemplo, si queremos crear una aplicación de Vue usando este método, podemos hacerlo así:

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
      <button @click="count++">Count is: {{ count }}</button>
    </div>

    <script>
      // Crear una aplicación Vue usando la compilación global
      Vue.createApp({
        data() {
          return {
            count: 0,
          };
        },
      }).mount("#app");
    </script>
  </body>
</html>
```

En este ejemplo, estamos usando `Vue.createApp()` para crear una nueva aplicación Vue y luego montarla en un elemento con el `#app`. Todos los métodos y propiedades de Vue están disponibles a traves del objeto "Vue" que se importa desde la CDN. Esto nos permite acceder a todas las funciones de Vue sin necesidad de importarlas una por una.


