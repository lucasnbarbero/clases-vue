# Renderizado de listas

## `v-for`

Podemos utilizar la directiva `v-for` para representar una lista de elementos basada en un array. La directiva `v-for` requiere de una sintaxis especial en forma de `item in items`, donde `items` es el array de datos fuente y `item` es un **alias** para el elemento del array sobre el que se está iterando:

```js
data() {
  return {
    items: [{ message: 'Foo' }, { message: 'Bar' }]
  }
}
```

```html
<li v-for="item in items">{{ item.message }}</li>
```

Dentro del ámbito `v-for`, las expresiones de la plantilla tiene acceso a todas las propiedades del ámbito padre. Además, `v-for` también admite un segundo alias opcional para el índice del elemento actual:

```js
data() {
  return {
    parentMessage: 'Parent',
    items: [{ message: 'Foo' }, { message: 'Bar' }]
  }
}
```

```html
<li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }}
</li>
```

## `v-for` con un objeto

Tambien podemos utilizar `v-for` para iterar a través de las propiedades de un objeto.

```js
data() {
  return {
    myObject: {
      title: 'Cómo hacer listas en Vue',
      author: 'Lucas Barbero',
      publishedAt: '11-05-2024'
    }
  }
}
```

```html
<ul>
  <li v-for="value in myObject">{{ value }}</li>
</ul>
```

También puedes proporcionar un segundo alias para el nombre de la propiedad (también conocido como key o clave):

```html
<li v-for="(value, key) in myObject">{{ key }}: {{ value }}</li>
```

Y otra para el índice:

```html
<li v-for="(value, key, index) in myObject">
  {{ index }}. {{ key }}: {{ value }}
</li>
```

## `v-for` con un rango

`v-for` tambien puede tomar un entero. En este caso se repetirá la plantilla tantas veces, basado en un rango de `1...n`.

```html
<span v-for="n in 10">{{ n }}</span>
```

Observamos que `n` comienza con un valor inicial de `1` en lugar de `0`

## `v-for` en `<template>`

De forma similar a la directiva `v-if`, también puedes utilizar una etiqueta `<template>` con `v-for` para representar un bloque de múltiples elementos.

```html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

## Manteniendo el estado con `key`

Cuando Vue está actualizando una lista de elementos con `v-for`
, por defecto utiliza una estrategia de "parche". Si el orden de los elementos de datos cambia, en lugar de mover los elementos, Vue hace un parche de cada elemento en su lugar y se asegura de que refleje lo que debe ser renderizado en ese índice.

Este modo por defecto es eficiente, pero **sólo es adecuado cuando la salida de la lista no depende del estado de los componentes hijos o del estado tempotal del DOM**.

Para darle a Vue una pista para que pueda rastrear la identidad de cada nodo, y así reutilizar y reordenar los elementos existenes, necesitamos darle uso al atributo `key` para cada elemento

```html
<div v-for="item in items" :key="item.id">
  <!-- contenido -->
</div>
```

Cuando se usa `<template v-for>`, la `key` debe colocarse en el contenedor `<template>`

```html
<template v-for="todo in todos" :key="todo.name">
  <li>{{ todo.name }}</li>
</template>
```

Se recomienda proporcionar un atributo `key` con `v-for` siempre que sea posible. La `key` espera valores primitivos, es decir, un dato de tipo `string` o `number`. No debemos utilizar objetos como claves `v-for`.

Podemos encontrar mas información sobre el `key` en la [documentación oficial](https://vuejs.org/api/built-in-special-attributes.html#key).
