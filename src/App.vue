<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <transition name="opacity">
      <RumahRuko @selected="overlay" :selected="selected" v-if="selected" />
    </transition>
    <transition name="nav">
      <div class="mobileHeader"
      :class="{shadow: scrollPos > 0}"
      v-if="windowWidth < 601 || $store.state.isMobile"
      v-show="show || $store.state.opened">
        <div class="burger" :class="{open: $store.state.opened}" @click="toggleOpen">
          <span />
          <span />
          <span />
        </div>
        <router-link to="/">
          <img src="@/assets/logotext.svg" />
        </router-link>
      </div>
    </transition>
    <transition name="slide-right">
      <Navigation
      @selected="overlay"
      v-if="(windowWidth > 600 && !$store.state.isMobile) || $store.state.opened" />
    </transition>
    <div class="white" v-if="$store.state.opened" />
    <div id="navSpacer" v-if="windowWidth > 600 && !$store.state.isMobile" />
    <div class="content"
    :class="{ extraMargin: $store.state.isMobile && $store.state.windowWidth > 601 }">
      <transition name="slide" mode="out-in">
        <router-view :key="$route.fullPath" @selected="overlay" />
      </transition>
      <Foot />
    </div>
  </div>
</template>

<script>
import { debounce } from 'debounce';
import Navigation from './components/Nav.vue';
import Foot from './components/Footer.vue';
import RumahRuko from './views/RumahRuko.vue';

export default {
  components: {
    Navigation,
    Foot,
    RumahRuko,
  },
  data() {
    return {
      show: true,
      prevScroll: 0,
      scrollPos: 0,
      selected: null,
    };
  },
  methods: {
    overlay(i) {
      this.selected = i;
    },
    resize() {
      const w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const h = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      this.$store.commit('setWidth', w);
      this.$store.commit('setHeight', h);
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        // eslint-disable-next-line no-useless-escape
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        this.$store.commit('isMobile', true);
      } else {
        this.$store.commit('isMobile', false);
      }
    },
    toggleOpen() {
      this.$store.commit('toggleNav');
    },
    scroll() {
      this.scrollPos = window.scrollY;
      if (window.scrollY < 20 || this.prevScroll > window.scrollY) {
        this.show = true;
      } else {
        this.show = false;
      }
      this.prevScroll = window.scrollY;
    },
  },
  mounted() {
    this.resize();
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    '$store.state.isMobile'() {
      this.$forceUpdate();
    },
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    },
  },
  created() {
    window.addEventListener('resize', this.resize);
    window.addEventListener('scroll', debounce(this.scroll, 200));
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('scroll', debounce(this.scroll, 200));
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
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: 300;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      display: flex;
      flex-wrap: wrap;

      img[lazy=error], img[lazy=loading] {
        max-width: 100px;
        max-height: 100px;
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .gm-ui-hover-effect {
        display: none !important;
      }

      h1, h2, h3, p {
        font-weight: 300;
      }

      h1 {
        @include max-media(tablet) {
          font-size: 1.5em;
          line-height: 1em;
        }
      }

      h2 {
        @include max-media(tablet) {
          font-size: 1em;
          line-height: 1.2em;
        }
      }

      h3 {
        @include max-media(tablet) {
          font-size: 1em;
          line-height: 1.2em;
        }
      }

      p {
        @include max-media(tablet) {
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
        position: fixed;
        top: 0px;
        display: flex;
        width: 100vw;
        padding: 15px;
        align-items: center;
        height: 40px;
        z-index: 10;
        background-color: white;
        transition: all .3s ease;

        &.shadow {
          box-shadow: 0 0 20px 0 rgba(0,0,0,0.5);
        }

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
          margin: 70px 30px 0 30px;
        }

        .remMargin {
          margin-top: 0;
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
<style lang="scss" scoped>
.extraMargin {
  margin-left: 30px;
  margin-top: 70px;
}
</style>
