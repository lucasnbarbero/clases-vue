# Sintaxis de plantilla

Vue utiliza una sintaxis de plantilla basada en HTML que le permite vincular de forma declarativa el DOM renderizado a los datos de la instancia del componente. Todas las plantillas de Vue son HTML sintácticamente válido y pueden ser analizados por navegadores y analizadores de HTML.

## Interpolación de texto

La forma más básica de enlace de datos es la interpolación de texto utilizando la sintaxis "Bigote" o "Mustache" (doble llaves)

```html
<span>Mensaje: {{ msg }}</span>
```

La etiqueta del bigote se reemplazará con el valor de la propiedad `msg` de la instancia del componente.

## Vinculación de Atributos

Los mostachos no se pueden usar dentro de los atributos HTML. En su lubar, utiliza una directiva llamada `v-bind`

```html
<div v-bind:id="dynamicId"></div>
```

La directiva `v-bind` le indica a Vue que mantenga valor del atributo `id` del elemento sincronizado con la propiedad `dynamicId` del componente. Si el valor vinculado es `null` o `undefined`, el atributo se eliminará.

### Abreviatura

Debido a que `v-bind` se usa con tanta frecuencia, tiene una sintaxis abreviada dedicada

```html
<div :id="dynamicId"></div>
```

Los atributos que comienzan con `:` pueden verse diferentes del HTML normal, pero es un caracter válido para los nombre de los atributos y todos los navegadores pueden analizarlo correctamente. Además, no aparecen en el renderizado final.

## Usando expresiones JavaScript

Vue admite todo el poder de las expresiones JavaScript dentro de todos los enlaces de datos:

```vue
<div>{{ number + 1 }}</div>

<div>{{ ok ? "SI" : "NO" }}</div>

<div>{{ message.split("").reverse().join("") }}</div>

<div :id="`list-${id}`"></div>
```

Estas expresiones se evaluarán como JavaScript en el ámbito de datos de la instancia del componente actual.

### Solo expresiones

Cada enlace solo puede contened **una única expresión**. Una expresión es un bloque de código que peude evaluarse a un valor.

Por lo tanto, lo siguiente **NO** funcionará:

```html
<!-- esto es una declaración, no una expresión: -->
<div>{{ var a = 1 }}</div>

<!-- el control de flujo tampoco funcionará, usa expresiones ternarias -->
<div>{{ if (ok) { return message } }}</div>
```

## Directivas

Las directivas son atributos especiales con el prefijo `v-`. Vue proporciona una serie de [directivas integradas](https://vue3-spanish.netlify.app/api/built-in-directives.html).

Se espera que los atributos de una directiva sean expresiones JavaScript únicas (con excepción de `v-for`, `v-on` y `v-slot`, que las veremos más adelante). El trabajo de una directiva es aplicar actualizaciones de forma reactiva al DOM cuando cambie el valor de la expreción. Veamos un ejemplo con la directiva `v-if`

```html
<p v-if="seen">Ahora me ves</p>
```

Aquí, `v-if` agrega o saca el elemento `<p>` en función del valor de la expresión `seen`.

### Argumentos

Algunas directivas pueden tomar un "argumento", indicado por dos puntos.

Por ejemplo `v-bind` se utiliza para actualizar de forma reactiva un atributo HTML:

```html
<a v-bind:href="url"> ... </a>

<!-- abreviado -->
<a :href="url"> ... </a>
```

### `v-on`

Otro ejemplo es la directiva `v-on`, que escucha eventos del DOM:

```html
<a v-on:click="doSomething"> ... </a>

<!-- abreviado -->
<a @click="doSomething"> ... </a>
```

Aquí el argumento es el nombre del evento a escuchar, `:click`. `v-on` también tiene una abreviatura correspondiente, como lo vimos en el ejemplo.

## Ejercicio 🥳

Vayamos al [Primer ejercicio](./exercises/exercise-01.md) para comenzar a aplicar lo que aprendimos.
