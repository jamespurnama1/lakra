<template>
  <div id="app">
    <Navigation />
    <div class="content">
      <transition name="slide-down" mode="out-in">
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
      document.querySelector('.content').style.left = `${this.navWidth}px`;
      document.querySelector('.content').style.width = `calc(100% - ${this.navWidth}px)`;
    },
  },
  computed: {
    navWidth() {
      return this.$store.getters.getNavWidth;
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

    h1, h2, h3, p {
      font-weight: 200;
    }

    .content {
      position: absolute;
      top: 0;
      left: 150px;
      overflow: hidden;
      width: 100%;
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
