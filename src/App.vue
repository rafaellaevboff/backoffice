<template>
  <div>
    <app-bar></app-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import AppBar from './components/AppBar.vue'

export default {
  name: 'App',
  components: {
    AppBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0%;
  padding: 0%;
}
</style>
