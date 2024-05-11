<template>
  <button @click="awesome = !awesome">Alternar</button>

  <h1 v-if="awesome">¡Vue es increíble!</h1>
  <h1 v-else>Oh no 😢</h1>
</template>

<script>
export default {
  data() {
    return {
      awesome: true,
    };
  },
};
</script>
