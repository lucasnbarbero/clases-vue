# Componentes

**¿Que es un componente?**

Es una parte reutilizable e independiente de la interfaz de usuario que encapsula la estructura, el comportamiento y el estilo de una parte específica de la aplicación. Los componentes están diseñados para ser modulares y autónomos, lo que significa que pueden contener su propia lógica y estado interno. Pueden ser fácilmente reutilizados en diferentes partes de la aplicacion.

La sintáxis que usamos para construir nuestros componentes, combina HTML, CSS y JavaScript en un solo archivo, lo que facilita la organización y mantenimiento del código ya que cada componente tiene su propio archivo y se puede reutilizar fácilmente.

```vue
<template>
  <!-- Aqui nuestra estructura HTML -->
</template>

<script>
//  Aqui vamos a definir la lógica del componente
</script>

<style>
/* Aqui definimos los estilos del componente */
</style>
```

**Interpolación**

Conocemos como interpolación a la vinculación de datos dinámicos definidos en el modelo de datos con la vista. De esta forma, lo que hacemos, es incrustar expresiones JavaScript dentro del HTML para que puedan renderizarse.

En Vue, la interpolación se realiza utilizando la sintaxis de doble llave. Dentro de las mismas, se pueden colocar variables, expresiones o métodos definidos en el componente.

## Creación de componentes

En la carpeta `components`, vamos a crear un archivo con el llamado `Message.vue`. Dentro de este archivo, utilizamos la sintaxis dada anteriormente para construir nuestro primer componente.

```vue
<!-- Message.vue -->
<template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
  data() {
    return {
      message: "Hola mundo",
    };
  },
};
</script>
```

Luego nos vamos al archivo App.vue y llamamos al componente creado de la siguiente manera

```vue
<script>
import Message from "./components/Message.vue";

export default {
  components: {
    Message,
  },
};
</script>

<template>
  <Message />
</template>
```

Veamos como podemos hacer que dos componentes se comuniquen entre sí

## Props - Comunicación

Cuando estamos haciendo, por ejemplo, un blog, vamos a queres que todas las publicaciones del blog compartan el mismo diseño visual, pero con un contenido distinto. Para esto se utilizan las props.

Las `Props` son atributos personalizados que puede regitrar un componente. Por ejemplo, para pasar un título al componente de la publicación del blog, debemos aclararlo en la lista de props que acepta este componente.

Adaptemos nuestro componente `Message.vue` para que el mensaje que vaya a mostrar sea dinámico

```vue
<!-- Message.vue -->
<template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<!-- App.vue -->
<script>
import Message from "./components/Message.vue";

export default {
  components: {
    Message,
  },
};
</script>

<template>
  <Message message="Saludo desde app" />
</template>
```

## Eventos - Comunicación

Los componentes también pueden comunicarse entre sí por medio de el uso de eventos. Los eventos son señales que un componente puede emitir y otros componentes pueden escuchar y responder a estas. Esto hace qeu la comunicacion sea efectiva sin la necesidad de conocer los detalles de la implementación interna.

Vamos a crear un componente con el nombre `Button.vue` con el siguiente código

```vue
<template>
  <button type="button" @click="$emit('handleClick')">{{ label }}</button>
</template>

<script>
export default {
  props: ["label"],
  emits: ["handleClick"],
};
</script>
```

Ahora vamos a llamar el componente creado desde `App.vue` de la siguiente manera

```vue
<script>
import Button from "./components/Button.vue";

export default {
  components: {
    Button,
  },
  methods: {
    saludar() {
      console.log("Hola");
    },
  },
};
</script>

<template>
  <Button label="Mostrar saludo" @handle-click="saludar" />
</template>
```

## Slots - Comunicación

Los slots son otra forma de comunicación entre componentes que nos permite pasar contenido HTML o incluso otros componentes. Esto permite una mayor flexibilidad y reutilización de los componentes ya que el componente padre puede controlar el diseño y la estructura que se muestra dentro del componente hijo.

Para utilizarlo, solo debemos definir la etiqueta `<slot></slot>` en el lugar donde queremos que se inserte el contenido.

Modifiquemos el componente `Button.vue` para ver como se hace.

```vue
<template>
  <button type="button" @click="$emit('handleClick')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  emits: ["handleClick"],
};
</script>
```

En el componente `App.vue` nos debería quedar lo siguiente

```vue
<script>
import Button from "./components/Button.vue";

export default {
  components: {
    Button,
  },
  methods: {
    saludar() {
      console.log("Hola");
    },
  },
};
</script>

<template>
  <Button @handleClick="saludar">
    <span>Mostrar saludo</span>
  </Button>
</template>
```

## Ejercicio 🥳

Vamos a hacer nuestro primer ejercicio

[Ir al ejercicio](./exercises/exercise-01.md)
