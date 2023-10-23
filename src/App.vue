<template>
  <div id="app">
    <Header />
    <AtHome />
    <router-view />
  </div>
</template>

<script>
import Header from './components/AppHeader.vue'
import AtHome from './components/AtHome.vue'


export default {
  components: {
    Header,
    AtHome,
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
  margin-top: 60px;
}
</style>
