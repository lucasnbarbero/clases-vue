# Vinculación de clases y estilos

Una necesidad común de la vinculación de datos es el manejo de la lista de clases de un elemento y sus estilos. Ya que `class` y `style` son atributos, podemos utilizar `v-bind` para asignarles un valor de forma dinámica, al igual que con otros atributos. Pero, tratar de generar esos valores utilizando la concatenación de cadenas puede ser molesto y propenso a errores. por esta razón, Vue nos proporciona mejoras especiales cuadno se utiliza `v-bind` con `class` y `style`.

## Vinculación de clases HTML

### Vinculación a objetos

Podemos pasar un objeto a `v-bind:class` (su forma abreviada es `:class`) para cambiar dinámicamente las clases:

```html
<div :class="{ active: isActive }"></div>
```

Esta sintaxis significa que la presencia de la clase `active` estará determinada solo si la propiedad de datos `isActive` tiene `true` como valor.

Podemos tener varias clases juntas teniendo más campos en el objeto. Además, la directiva `:class` tambien puede existir con el atributo `class`.

```js
data() {
  return {
    isActive: true,
    hasError: false
  }
}
```

```html
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
```

Esto va a renderizar

```html
<div class="static active"></div>
```

Cuando `isActive` o `hasError` cambian, la lista de clases será actualizada en consecuencia. Por ejemplo, si `hasError` se convierte en `true`, la lista de clases pasará a ser `"static active text-danger"`.

El objeto vinculado no tiene que estar en línea:

```js
data() {
  return {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
}
```

```html
<div :class="classObject"></div>
```

### Vinculación a arrays

Podemos vincular `:class` a un array para aplicar una lista de clases

```js
data() {
  return {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
}
```

```html
<div :class="[activeClass, errorClass]"></div>
```

Lo que renderizará:

```html
<div :class="[activeClass, errorClass]"></div>
```

## Vinculación de estilos en línea

### Vinculación a objetos

`:style` admite la vinculación a valores de objetos de JavaScript.

```js
data() {
  return {
    activeColor: 'red',
    fontSize: 30
  }
}
```

```html
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

Aunque se recomiendan las clases camelCase, `:style` también admite claves de propiedades CSS kebab-cased (corresponde a cómo se usan en el CSS real). Por ejemplo:

```html
<div :style="{ 'font-size': fontSize + 'px' }"></div>
```

## Vinculación a arrays

Podemos vincular `:style` a un array de múltiples objetos de estilo. Estos objetos se fusionarán y se aplicarán al mismo elemento:

```html
<div :style="[baseStyles, overridingStyles]"></div>
```
