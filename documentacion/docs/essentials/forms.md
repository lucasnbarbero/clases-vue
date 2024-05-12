# Vinculación de entradas de formularios

Cuando tratamos con formularios en el frontend, a menudo necesitamos sincronizar el estado de los elementos de entrada del formulario con el estado correspondiente en JavaScript. Puede ser incómodo configurar manualmente los enlaces de valores y cambiar los escuchadores de eventos:

```html
<input :value="text" @input="event => text = event.target.value" />
```

La directiva `v-model` nos ayuda a simplificar lo anterior a:

```html
<input v-model="text" />
```

Además, `v-model` se puede utilizar en entradas de diferentes tipos, `<textarea>` y elementos `<select>`

## Uso básico

### Texto

```html
<p>El mensaje es: {{ message }}</p>
<input v-model="message" placeholder="Escribe un mensaje" />
```

### Checkbox

Un único checkbox, con valor booleano:

```html
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
```

También podemos vincular múltiples checkboxes al mismo array:

```js
export default {
  data() {
    return {
      checkedNames: [],
    };
  },
};
```

```html
<div>Nombres verificados: {{ checkedNames }}</div>

<input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
<label for="jack">Jack</label>

<input type="checkbox" id="john" value="John" v-model="checkedNames" />
<label for="john">John</label>

<input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
<label for="mike">Mike</label>
```

En este caso, el array `checkedNames` siempre contendrá los valores de las
casillas seleccionadas en ese momento.

### Radio

```html
<div>Seleccionado: {{ picked }}</div>

<input type="radio" id="one" value="Uno" v-model="picked" />
<label for="one">Uno</label>

<input type="radio" id="two" value="Dos" v-model="picked" />
<label for="two">Dos</label>
```

### Select

```html
<div>Selección: {{ selected }}</div>

<select v-model="selected">
  <option disabled value="">Por favor, selecciona uno</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
```

Las opciones de selección se pueden representar dinámicamente con `v-for`

```js
export default {
  data() {
    return {
      selected: "A",
      options: [
        { text: "Uno", value: "A" },
        { text: "Dos", value: "B" },
        { text: "Tres", value: "C" },
      ],
    };
  },
};
```

```html
<select v-model="selected">
  <option v-for="option in options" :key="option.value" :value="option.value">
    {{ option.text }}
  </option>
</select>

<div>Seleccionado: {{ selected }}</div>
```

:::info
Para más información y detalles puedes consultar en la [documentación oficial](https://vuejs.org/guide/essentials/forms.html)
:::

## Ejercicio 💣

Vamos a realizar un nuevo [ejercicio](../exercises/exercise-02.md) para continuar trabajando!