# Propiedades computadas

Las expresiones dentro de la plantilla son muy convenientes, pero están destinadas a operaciones simples. Poner demasiada lógica dentro puede hacerlas muy grandes y difíciles de mantener. Por ejemplo, tenemos el siguiente objeto

```js
export default {
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
};
```

Y queremos mostrar diferentes mensajes dependiendo de si `author` ya tiene algunos libros o no:

```html
<p>Has published books:</p>
<span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
```

En este punto, la plantilla se está volviendo un poco desordenada. Es por eso que para la lógica compleja que incluye datos reactivos, se recomienda utilizar una **propiedad computada**. Aquí tenemos el mismo ejemplo pero refactorizado

```js
export default {
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
  computed: {
    // a computed getter
    publishedBooksMessage() {
      // `this` points to the component instance
      return this.author.books.length > 0 ? "Yes" : "No";
    },
  },
};
```

```html
<p>Has published books:</p>
<span>{{ publishedBooksMessage }}</span>
```

Aquí declaramos una propiedad computada `publishedBooksMessage`.

### Otro ejemplo

Supongamos que tenemos un componente Vue que muestra una lista de tareas y queremos calcular cuántas de estas tareas están completadas. Podríamos hacerlo utilizando una propiedad computada de la siguiente manera:

```js
export default {
  data() {
    return {
      tasks: [
        { description: "Hacer la compra", completed: true },
        { description: "Hacer ejercicio", completed: false },
        { description: "Llamar a mamá", completed: true },
      ],
    };
  },
  computed: {
    completedTasks() {
      return this.tasks.filter((task) => task.completed).length;
    },
  },
};
```

En este ejemplo, la computada `completedTasks` calcula el número de tareas completadas contando cuántas de las tareas en la lista tiene el atributo `completed` establecido como `true`. Luego esta propiedad computada puede ser utilizada en la plantilla para mostrar el número de tareas completadas:

```html
<p>Tareas completadas: {{ completedTasks }}</p>
```

De esta manera, usamos la computada para calcular dinámicamente el valor basado en los datos reactivos de nuestro componentes, manteniendo así la plantilla más limpia y fácil de mantener.
