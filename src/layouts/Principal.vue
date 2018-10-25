<template>
<div class="pagina">
  <h1>Hello App!</h1>
  <p>
    <router-link to="/about">Sobre</router-link> | 
    <router-link to="/">Inicio</router-link> |
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <router-view id=""></router-view>
</div>
</template>

<script>
export default {
}
</script>

<style>
.pagina{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #002b57;
}
</style>
