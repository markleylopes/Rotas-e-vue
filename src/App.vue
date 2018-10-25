<template>
<div id="app" class="app">
<router-view id="area"></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
   computed: {
    username () {
      // We will see what `params` is shortly
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style>
.app{padding: 0; margin: 0; box-sizing: border-box;
}
</style>
