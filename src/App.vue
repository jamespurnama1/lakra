<template>
  <div id="app">
    <Navigation />
    <div id="navSpacer" />
    <div class="content">
      <transition name="slide" mode="out-in">
        <router-view :key="$route.fullPath" />
      </transition>
      <Foot />
    </div>
  </div>
</template>

<script>
import Navigation from './components/Nav.vue';
import Foot from './components/Footer.vue';

export default {
  components: {
    Navigation,
    Foot,
  },
  methods: {
    resize() {
      const w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      this.$store.commit('setWidth', w);
      this.$store.commit('setNavWidth', document.getElementById('nav').offsetWidth);
    },
  },
  watch: {
    navWidth() {
      this.resize();
    },
  },
  mounted() {
    this.resize();
  },
  created() {
    window.addEventListener('resize', this.resize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
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
    font-weight: 200;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-wrap: wrap;

    h1, h2, h3, p {
      font-weight: 200;
    }

    #navSpacer {
      position: relative;
      min-width: 150px;
      width: 15vw;
      height: 100vh;
      padding: 50px;
      padding-right: 0;
    }

    .content {
      top: 0;
      left: 150px;
      overflow: hidden;
      flex: 1;
      height: auto;

      .hooper-indicator {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        margin: 0 5px;
        opacity: 50%;

        &.is-active {
          background-color: white;
          opacity: 100%;
        }
      }

      svg.icon {
        filter: brightness(0) invert(1);
      }
    }
  }
}
</style>
