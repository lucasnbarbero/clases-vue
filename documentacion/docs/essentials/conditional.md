# Renderizado condicional

## `v-if`

La directiva `v-if` se utiliza para renderizar condicionalmente un bloque. El bloque sólo se rendizará si la expresión de la directiva devuelve un valor `true`.

```html
<h1 v-if="awesome">¡Vue es increíble!</h1>
```

## `v-else`

Puedes usar la directiva `v-else` para indicar un else para `v-if`:

```html
<button @click="awesome = !awesome">Alternar</button>

<h1 v-if="awesome">Vue es increíble!</h1>
<h1 v-else>Oh no 😢</h1>
```

Un elemento `v-else` debe seguir inmediatamente a un elemento `v-if` o a un elemento `v-else-if`. De lo contraron no será reconocido.

## `v-else-if`

El elemento `v-else-if`, como su nombre indica, sirve como un bloque else if para `v-if`. También se puede encadenar múltiples veces:

```html
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>Not A/B/C</div>
```

Al igual que `v-else`, un elemento `v-else-if` debe seguir inmediatamente a un elemento `v-if` o `v-else-if`.

## `v-show`

Otra opción para mostrar condicionalmente un elemento es la directiva v-show. El uso es prácticamente el mismo:

```html
<h1 v-show="ok">¡Hola!</h1>
```

La diferencia es que un elemento con `v-show` siempre se renderizará y permanecerá en el DOM; `v-show` sólo conmuta la propiedad CSS `display` del elemento.
