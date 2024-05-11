# Fundamentos de reactividad

La reactividad en Vue se refiere a la capacidad del framework para detectar automáticamente los cambios en los datos y actualizar la interfaz de manera eficiente en respuesta a estos cambios.

Cuando creamos una instancia de Vue o declaramos datos en un componente Vue, este, establece una especie de "vigilancia" sobre estos datos. Esto significa que Vue rastrea cualquier cambio en estos datos y automáticamente actualiza las partes de la interfaz que dependen de ellos.

## Declaración de estado reactivo

Con el Option API, usamos la opción `data` para declarar el estado reactivo de un componente. El valor de esta data, debe ser una función que devuelva un objeto. Vue llamará a la función al crear una nueva instancia del componente y envolverá el objeto devuelto en su sistema de reactividad. Cualquier propiedad de nivel superior de este objeto se representa en la instancia del componente.

```js
export default {
  data() {
    return {
      count: 0,
    };
  },
  // `mounted` es un hook de ciclo de vida que explicaremos más adelante
  mounted() {
    // `this` se refiere a la instancia del componente
    console.log(this.count); // => 1

    // Los datos tambien pueden ser cambiados
    this.count = 2;
  },
};
```

## Métodos de declaración

Para agregar métodos a una instancia de componente usamos la opción `methods`. Este debe ser un objeto que contenga los mátodos deseados:

```js
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
  mounted() {
    // Los métodos se pueden llamar en los `hooks` de ciclo de vida u otros métodos
    this.increment();
  },
};
```

Vue vincula automáticamente el valor `this` para `methods` que siempre haga referencia a la instancia del componente. Para definir `methods` se debemos evitar el uso de funciones flechas

```js
export default {
  methods: {
    increment: () => {
      //  MAL: de esta forma no vamos a poder acceder a `this`
    },
  },
};
```

Al igual que todas las demás propiedades de la instancia del componente, se puede acceder a los `methods` desde la plantilla del componente. Dentro de una plantilla, se utilizan con mayor frecuentcia como detectores de eventos:

```html
<button @click="increment">{{ count }}</button>
```

Aquí, se llamará al método `increment` cuando se haga click en `button`.
