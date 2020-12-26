<template>
  <div id="app">
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Nav.vue';

export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;

  #app {
    overflow-y: hidden;
    width: 100vw;
    font-family: Helvetica-Neue, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
  }
}
</style>
