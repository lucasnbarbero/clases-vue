# Introducción

¡Bienvenidos a nuestra guía de aprendizaje! A lo largo de esta guía, te vamos a enseñar los fundamentos básicos para el desarrollo de aplicaciones frontend con Vue.js

## ¿Qué es Vue.js?

[Vue.js](https://vuejs.org/) es un framework de JavaScript para crear interfaces de usuario. Se basa en HTML, CSS y JavaScript y proporciona un modelo de programación declarativo basado en componentes que le ayuda a desarrollar interfaces de usuario complejas.

Aquí un ejemplo mínimo:

```js
import { createApp } from "vue";

createApp({
  data() {
    return {
      count: 0,
    };
  },
}).mount("#app");
```

```html
<div id="app">
  <button @click="count++">Count is: {{ count }}</button>
</div>
```
El ejemplo demuestra las dos características principales de Vue:

- **Represencatión declarativa**: Vue extiende HTML estándar con una sintaxis de plantilla que nos permite describir la salida HTML basada en el estado de JavaScript.

- **Reactividad**: Vue rastrea automáticamente los cambios de estado de JavaScript y actualiza eficientemente el DOM cuando ocurren cambios.

