# Directivas

Las directivas son atributos especiales que se utilizan para agregar funcionalidades dinámicas al DOM. Comienzan con el prefijo `v-` y se aplican a cualquier elemento HTML para modificar su comportamiento o apariencia.

## v-if

Permite decidir si un elemento o un grupo de elementos deben mostrarse o no en función de una condición. Simplemente le decimos a Vue que mire una expresion, como una variable booleana, y si esa expresión es verdadera, se renderizará el elemento asociado, sino, no se mostrará.

**Ejemplo**

Imaginemos que tenemos un boton que cuando se hace click, muestra un mensaje de saludo.

```vue
<template>
  <div>
    <button @click="changeVisibility">Mostrar mensaje</button>
    <p v-if="showMessage">¡Hola! Bienvenido a mi aplicación.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMessage: false, // Inicialmente oculto
    };
  },
  methods: {
    changeVisibility() {
      this.showMessage = !this.showMessage; // Cuando se hace clic en el botón, mostrar el mensaje
    },
  },
};
</script>
```

En este ejemplo, `v-if` se usa para mostrar u ocultar el mensaje según el valor que tenga la variable `showMessage`. Cuando se hace click en el botón, la variable cambiará de valor, por ende el renderizado del mensaje.

Esta es una forma muy útil de controlar dinámicamente los elementos que estamos mostrando en la aplicación según las acciones del usuario o el estado de los datos.

## v-else

Es una herramienta que complementa a `v-if`, mientras que la anterior decide que mostrar o no en función de una condición, `v-else` especifica qué hacer si la condición no se cumple.

**Ejemplo**

Volvamos al ejemplo anterior. Imaginemos que queremos mostrar un mensaje alternativo si el usuario no ha iniciado sesión.

```vue
<template>
  <div>
    <button @click="toggleUser">Cambiar Usuario</button>
    <p v-if="loggedIn">¡Hola {{ userName }}! Bienvenido de nuevo.</p>
    <p v-else>Por favor, inicia sesión para continuar.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: true,
      userName: "Usuario",
    };
  },
  methods: {
    toggleUser() {
      this.loggedIn = !this.loggedIn;
      if (!this.loggedIn) {
        this.userName = "Invitado";
      } else {
        this.userName = "Usuario";
      }
    },
  },
};
</script>
```

Aquí cuando el usuario hace click en el boton, el valor `loggedIn` se invierte. Si `loggedIn` es `true`, el mensaje de bienvenida se mostrará, de lo contrario, se mostrará el mensaje de "Por favor, inicia sesión para continuar"

## v-else-if

Esta es otra herramienta que complementa a `v-if` y `v-else`. Mientras que `v-if` decide si un elemento se muestra o no, y `v-else` especifica qué hacer si la condición no se cumple, `v-else-if` permite agregar condiciones adicionales.

**Ejemplo**

Imaginemos que tenemos un componente de temperatura que muestra diferentes mensajes dependiendo de la temperatura actual. Podemos usar `v-if`, `v-else-if` y `v-else` para mostrar un mensaje en funcion de diferentes rangos de temperatura

```vue
<template>
  <div>
    <p v-if="temperature < 0">¡Hace mucho frío! Abrígate bien.</p>
    <p v-else-if="temperature >= 0 && temperature < 20">
      Hace fresco. ¡No olvides tu abrigo ligero!
    </p>
    <p v-else-if="temperature >= 20 && temperature < 30">
      Hace calor. ¡Protégete del sol!
    </p>
    <p v-else>Hace mucho calor. ¡Busca un lugar fresco!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temperature: 25,
    };
  },
};
</script>
```

En este ejemplo, el componente de temperatura muestra diferentes mensajes según la temperatura actual.

## v-for

Esta directiva se utiliza para renderizar una lista de elementos basada en un array o un objeto. Es herramienta poderosa para generar contenido dinámico.

**Ejemplo**

En nuestro `data()` tenemos un array de nombres

```js
export default {
  data() {
    return {
      names: ["Juan", "María", "Carlos", "Laura"];
    }
  }
}
```

Supongamos que queremos renderizar cada nombre dentro de una lista no ordenada. Con HTML deberiamos hacerlo de la siguiente manera:

```html
<ul>
  <li>Juan</li>
  <li>María</li>
  <li>Carlos</li>
  <li>Laura</li>
</ul>
```

Pero si usamos la directiva `v-for` que nos da Vue, el código nos queda de la siguiente manera obteniendo el mismo resultado:

```html
<ul>
  <li v-for="(name, index) in names" :key="index">{{ name }}</li>
</ul>
```

De esta manera utilizamos la directiva para iterar sobre el array `names` y renderizamos cada nombre dentro de un elemento `<li>` en una lista no ordenada `<ul>`

`index` es una variable que representa el índica actual del elemento. El atributo `:key` se utiliza para proporcionar una clave única a cada elemento renderizado de la iteración.

**Aclaracion**

Tambien podemos iterar sobre propiedades de un objeto y puede ser utilizado con números.

```html
<span v-for="i in 10">{{ i }}</span>
```

## v-on

Se utiliza para adjuntar oyentes de eventos a elementos. Esto significa que podemos detectar eventos del DOM, como click, pulsaciones de teclas, etx. y ejecutar ciertas acciones o métodos de Vue cuando ocurren estos eventos.

```html
<!-- Evento de la manera tradicional -->
<button v-on:click="doThis"></button>

<!-- Evento de la manera abreviada -->
<button @:click="doThis"></button>
```

## v-bind

Se utiliza para enlazar valores dinámicos a los atributos que ya conocemos para nuestros elementos HTML.

**Ejemplo**

```html
<!-- Forma tradicional -->
<img v-bind:src="urlImage" />

<h1 v-bind:class="textRed ? 'text-red' : 'text-blue'"></h1>

<!-- Forma abreviada -->
<img :src="urlImage" />

<h1 :class="textRed ? 'text-red' : 'text-blue'"></h1>
```

## v-model

Es una directiva para crear enlaces bidireccionales entre los datos de la aplicación y los elementos de entrada del formulario. Esto significa que cualquier cambio en el valor del elemento se reflejará automáticamente.

**Ejemplo**

```vue
<template>
  <div>
    <input v-model="username" />
  </div>

  <div>
    <p>Nombre de usuario: {{ username }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "Lucas Barbero",
    };
  },
};
</script>
```

## Ejercicio

[Ir al ejercicio](./exercises/exercise-02.md)
