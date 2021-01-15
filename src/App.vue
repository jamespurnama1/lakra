<template>
  <div id="app">
    <div class="mobileHeader" v-if="windowWidth < 600">
    <div class="burger" :class="{open: $store.state.opened}" @click="toggleOpen">
      <span />
      <span />
      <span />
    </div>
    <router-link to="/">
      <img src="@/assets/logotext.svg" />
    </router-link>
    </div>
    <transition name="slide-right">
      <Navigation v-if="windowWidth > 600 || $store.state.opened" />
    </transition>
    <div class="white" v-if="$store.state.opened" />
    <div id="navSpacer" v-if="windowWidth > 600" />
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
      if (w > 601) {
        this.$store.commit('setNavWidth', document.getElementById('nav').offsetWidth);
      }
    },
    toggleOpen() {
      this.$store.commit('toggleNav');
    },
  },
  mounted() {
    this.resize();
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    },
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
@import '@/styles/index.scss';

html {
  height: 100%;
  overflow: auto;

  body {
    margin: 0;
    height: 100%;

    #app {
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

      h1 {
        @include max-media(mobile) {
          font-size: 1.5em;
          line-height: 1em;
        }
      }

      h2 {
        @include max-media(mobile) {
          font-size: 1em;
          line-height: 1.2em;
        }
      }

      h3 {
        @include max-media(mobile) {
          font-size: 1em;
          line-height: 1.2em;
        }
      }

      p {
        @include max-media(mobile) {
          font-size: 0.75em;
          line-height: 1.2em;
        }
      }

      .white {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: white;
        z-index: 2;
        opacity: 50%;
      }

      .mobileHeader {
        position: sticky;
        top: 0px;
        display: flex;
        width: 100vw;
        padding: 15px;
        align-items: center;
        height: 40px;
        z-index: 10;
        background-color: white;

        .burger {
          height: 1.7em;
          width: 1.7em;
          margin: 10px 30px 0 20px;
          transform: rotate(0deg);
          transition: .5s ease-in-out;
          cursor: pointer;

          span {
            display: block;
            position: absolute;
            height: 2px;
            width: 100%;
            background: $black;
            border-radius: 10px;
            opacity: 1;
            left: 0;
            transform: rotate(0deg);
            transition: .25s ease-in-out;
            transform-origin: left center;
          }

          span:nth-child(2) {
            top: 8px;
          }

          span:nth-child(3) {
            top: 16px;
          }

          &.open span:nth-child(1) {
            transform: rotate(45deg);
          }

          &.open span:nth-child(2) {
            width: 0%;
            opacity: 0;
          }

          &.open span:nth-child(3) {
            transform: rotate(-45deg);
            top: 20px;
          }
        }

        img {
          height: 20px;
          width: auto;
        }
      }

      #navSpacer {
        position: relative;
        min-width: 150px;
        width: 15vw;
        height: 100vh;
        padding: 50px;
        padding-right: 10px;
      }

      .content {
        top: 0;
        left: 150px;
        overflow: hidden;
        flex: 1;
        height: auto;

        @include max-media(mobile) {
          margin: 0 30px;
        }

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
}
</style>
