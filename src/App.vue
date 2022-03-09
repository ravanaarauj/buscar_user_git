<template>
  <div id="app">
    <!-- <img alt="Logo APP" src="./assets/logo.png"> -->
    <hello-world></hello-world>
  </div>
</template>

<script>

import HelloWorld from './components/inicio/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>>

