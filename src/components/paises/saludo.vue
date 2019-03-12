<template>
  <div>
    <h1 v-text="nombre"></h1>
    <md-button class="md-raised md-primary">Primary</md-button>
  </div>
</template>

<script>
export default {
  dato() {
    return {
      nombre: "carlos xD"
    };
  }
};
</script>

<style>
</style>
>