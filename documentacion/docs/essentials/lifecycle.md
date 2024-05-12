# Hooks del ciclo de vida

Cada instancia de un componente de Vue pasa por una serie de pasos de inicialización cuando se crea. Por ejemplo, debe configurar la observación de datos, compilar la plantilla, montar la instancia en el DOM y actualizar el DOM cuando cambien los datos. En el camino, también ejecutra funciones llamadas hooks del ciclo de vida, esto nos da la oportunidad de añadir nuestro propio código en las distintas etapas del componente.

## Registrando los hooks del ciclo de vida

Por ejemplo, el hook `mounted` se puede usar para ejecutar código después que el componente haya terminado el renderizado inicial y creador los nodos del DOM:

```js
export default {
  mounted() {
    console.log(`El componente está montado ahora.`);
  },
};
```

También hay otros hooks que serán llamados en diferentes etapas del ciclo de vida de la instancia, siendo los más utilizados `mounted`, `updated` y `unmounted`.

Todos los hooks del ciclo de cida se llaman con su contexto `this` que apunta a la instancia activa actual que lo invoca.

![](https://vuejs.org/assets/lifecycle.MuZLBFAS.png)

:::info
Para seguir aprendiendo sobre las distintas etapas del ciclo de vida de los componentes puedes consultar en la [documentación oficial](https://vuejs.org/api/options-lifecycle.html)
:::
