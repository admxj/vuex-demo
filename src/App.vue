<template>
  <div id="app">
    <CartList/>
  </div>
</template>

<script>
import CartList from './components/CartList.vue'

export default {
  name: 'App',
  components: {
    CartList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
</style>
