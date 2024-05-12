# Fundamento de componentes

Los componentes nos permiten dividir la interfaz de usuario en piezas independientes y reutilizables, y pensar en cada pieza de forma aislada. Es común que una aplicación se organice en un árbol de componentes anidados:

![components-tree](https://vue3-spanish.netlify.app/assets/components.7fbb3771.png)

Vue implementa su propio modelo de componentes que nos permite encapsular contenido y lógica personalizados en cada componente.

## Definicion de un componente

Un componente de Vue puede definirse como un objeto JavaScript simple que contiene opciones específicas de Vue:

```js
export default {
  data() {
    return {
      count: 0,
    };
  },
  template: `
    <button @click="count++">
      Me has hecho clic {{ count }} veces.
    </button>`,
};
```

La plantilla se alinea aquí como una cadena de JavaScript, que vue compilará sobre la marcha.

### Ejemplo de dos componentes

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejemplo de Componentes Vue en HTML</title>
    <!-- Incluir Vue desde un CDN -->
    <script src="https://cdn.jsdelivr.net/npm/vue@3.2.6/dist/vue.global.prod.js"></script>
  </head>
  <body>
    <!-- Componente de Saludo -->
    <script>
      // Definir el componente de Saludo
      const SaludoComponente = {
        data() {
          return {
            nombre: "Lucas",
          };
        },
        template: `
      <div>
        <h2>¡Hola, {{ nombre }}!</h2>
      </div>
    `,
      };
    </script>

    <!-- Componente de Contador -->
    <script>
      // Definir el componente de Contador
      const ContadorComponente = {
        data() {
          return {
            contador: 0,
          };
        },
        template: `
      <div>
        <h2>Contador: {{ contador }}</h2>
        <button @click="incrementar">Incrementar</button>
      </div>
    `,
        methods: {
          incrementar() {
            this.contador++;
          },
        },
      };
    </script>

    <!-- Montar la aplicación Vue -->
    <div id="app">
      <!-- Utilizar los componentes -->
      <saludo-componente></saludo-componente>
      <contador-componente></contador-componente>
    </div>

    <script>
      const app = Vue.createApp({});
      // Registrar los componentes
      app.component("saludo-componente", SaludoComponente);
      app.component("contador-componente", ContadorComponente);
      // Montar la aplicación
      app.mount("#app");
    </script>
  </body>
</html>
```

En este ejemplo, creamos dos componentes de Vue **`SaludoComponente`** y **`ContadorComponente`**. Luego, los registramos y los utilizamos dentro del contenedor con el ID `#app`. Cada componente tiene su propio template y lógica interna.

## Pasando Props

Imaginemos que estamos desarrollando una aplicación para compartir canciones entre amigos. Necesitamos un componente qeu represente cada canción de tu lista de reproducción. Queremos que todas las canciones compartan el mismo diseño visual, pero con diferente contenido, como el título de la canción y el nombre del artista. Aquí es donde entran en juego las `Props`.

Las `Props` son atributos personalizados que puedes registrar en un componente. Para pasar un título a nuestro componente de entrada de blog, debemos declararlo en la lista de props que este componente acepta, utilizando la opción `props`:

```js
//  Cancion.js
export default {
  props: ["titulo", "artista"],
  template: `
    <div>
      <h4>{{ titulo }}</h4>
      <p>Artista: {{ artista }}</p>
    </div>
  `,
};
```

Cuando se pasa un valor por `props`, se convierte en una propiedad de esa instancia del componente. El valor de esa propiedad es accesible dentro de la plantilla y en el contexto `this` del componente, como cualquier otra propiedad del mismo.

Un componente puede tener tantas props como se quiera y se puede pasar cualquier valor a cualquier prop.

Para pasar datos a una prop, lo hacemos como un atributo personalizado, así:

```html
<Cancion titulo="Bohemian Rhapsody" artista="Queen" />
<Cancion titulo="Hotel California" artista="Eagles" />
<Cancion titulo="Stairway to Heaven" artista="Led Zeppelin" />
```

En una aplicación típica, es probable que tengas un array de posts en tu componente padre:

```js
export default {
  data() {
    return {
      canciones: [
        { id: 1, titulo: "Bohemian Rhapsody", artista: "Queen" },
        { id: 2, titulo: "Hotel California", artista: "Eagles" },
        { id: 3, titulo: "Stairway to Heaven", artista: "Led Zeppelin" },
      ],
    };
  },
};
```

Después queremos renderizar un componente para cada uno, usando `v-for`:

```html
<Cancion
  v-for="cancion in canciones"
  :key="cancion.id"
  :titulo="cancion.titulo"
  :artista="cancion.artista"
/>
```

Como vemos, podemos usar `v-bind` para pasar props dinámicos. Esto resulta muy útil cuando no conocemos el contenido exacto que vmaos a renderizar.

## Escuchando eventos

A medida que desarrollamos nuestro componente `<Cancion />`, es posible que algunas características requieran comunicarse con el componente padre. Por ejemplo, podríamos decidir incluir un botón en cada canción para marcarla como favorita, y queremos que al hacer clic en este botón, se envíe una señal al padre para actualizar la lista de reproducción de favoritos.

En el padre, podemos manejar esta característica añadiendo una propiedad de datos llamada `cancionesFavoritas`:

```js
data() {
  return {
    canciones: [
      /* ... */
    ],
    cancionesFavoritas: []
  }
},
methods: {
  marcarComoFavorita(cancion) {
    /* Lógica del método para agregar canciones favoritas */
  }
}
```

En el componente hijo debemos hacer lo siguiente:

```js
export default {
  props: ["titulo", "artista"],
  emits: ["marcar-favorita"],
  template: `
    <div>
      <h4>{{ titulo }}</h4>
      <p>Artista: {{ artista }}</p>
      <button @click="$emit('marcar-favorita')">Marcar como favorita</button>
    </div>
  `,
};
```

Ahora debemos modificar la plantilla del componente padre para poder recibir este `emit` de la siguiente manera:

```html
<Cancion
  v-for="cancion in canciones"
  :key="cancion.id"
  :titulo="cancion.titulo"
  :artista="cancion.artista"
  @marcar-favorita="marcarComoFavorita(cancion)"
/>
```

Primero, en el componente padre, creamos una función para manejar la acción de marcar como favorita y configuramos una propiedad de datos para almacenar las canciones favoritas. Luego, en el componente hijo, declaramos el evento personalizado `marcar-favorita` utilizando la opción `emits`, y emitimos este evento cuando se hace clic en el botón de la canción. Finalmente, en la plantilla del componente padre, escuchamos este evento y llamamos a la función correspondiente para agregar la canción a la lista de favoritos. Este proceso nos permite tener una comunicación fluida entre componentes.
