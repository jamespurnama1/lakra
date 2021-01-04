<template>
  <div id="nav">
    <router-link to="/" class="logo">
      <img src="../assets/logo.svg" />
      <img class="logoText"
      :class="{ large: $route.name === 'Home' }"
      src="../assets/logotext.svg" />
    </router-link>
    <ul>
      <li>
        <div>
          <router-link to="/lokasi" class='lokasi'>Lokasi</router-link>
          <i @click="expand" class="las la-angle-down"></i>
          <transition name="slide-up">
            <ul class="lokasiList" v-if="expanded">
                <router-link tag="li" to="/lokasi/Lakrasamana">
                Lakrasamana
                </router-link>
                <router-link tag="li" to="/lokasi/Lakratempat">
                  Lakratempat
                </router-link>
              <router-link tag="li" to="/lokasi/Lakralokasi">
                Lakralokasi
              </router-link>
                <router-link tag="li" to="/lokasi">
                Semua Lokasi</router-link>
            </ul>
          </transition>
        </div>
      </li>
      <router-link tag="li" to="/kpr">KPR</router-link>
      <router-link tag="li" to="/kontak">Kontak Kami</router-link>
      <router-link tag="li" to="/tentang">Tentang Kami</router-link>
    </ul>
    <div class="active" />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Navigation',
  data() {
    return {
      expanded: false,
      navWidth: 150,
      tl: null,
      tl2: gsap.timeline(),
      yPos: 0,
    };
  },
  methods: {
    expand() {
      this.expanded = !this.expanded;
      gsap.to('.la-angle-down', {
        rotate: '+=180',
        duration: 0.3,
      });
      this.active();
    },
    navWidthListener() {
      this.$store.commit('setNavWidth', document.getElementById('nav').offsetWidth);
      this.navWidth = document.getElementById('nav').offsetWidth;
    },
    checkScroll() {
      if (this.scroll === 'kill') {
        this.killLogo();
      } else if (this.scroll === 'init') {
        this.logo();
      }
    },
    logo() {
      if (this.$route.name === 'Home') {
        this.tl = gsap.timeline({
          scrollTrigger: {
            id: 'trigger1',
            trigger: '#home',
            start: 0,
            end: '+=200',
            scrub: 0.3,
          },
        });
        gsap.set('.logoText', {
          x: `${this.navWidth - 50}px`,
          y: '10vh',
          scale: 7,
        });
        this.tl.to('.logoText', {
          x: 0,
          y: 0,
          scale: 1,
        })
          .to('#nav img:first-child', {
            rotate: '90deg',
          }, 0)
          .from('ul', {
            y: '-10%',
          }, 0);
      }
      this.$store.commit('resetScroll');
    },
    killLogo() {
      ScrollTrigger.getById('trigger1').kill(true);
      gsap.set('.logoText', { clearProps: true });
      gsap.set('ul', { clearProps: true });
      this.$store.commit('resetScroll');
    },
    async active() {
      try {
        if (this.$route.name === 'Home') {
          gsap.to('.active', {
            y: this.yPos,
            x: -200,
            autoAlpha: 0,
          });
        } else {
          await this.sleep(330);
          this.yPos = document.querySelector('.router-link-exact-active').getBoundingClientRect().top - 11;
          this.tl2.to('.active', {
            y: this.yPos,
            duration: 0.3,
          })
            .to('.active', {
              x: 0,
              autoAlpha: 1,
            }, '>');
        }
      } catch (err) {
        console.error(err);
      }
    },
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
  },
  created() {
    window.addEventListener('resize', this.navWidthListener);
  },
  mounted() {
    this.navWidthListener();
    this.active();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.navWidthListener);
  },
  watch: {
    navWidth() {
      this.logo();
    },
    scroll() {
      this.checkScroll();
    },
    route() {
      this.active();
    },
  },
  computed: {
    scroll() {
      return this.$store.state.scroll;
    },
    route() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';

#nav {
  position: fixed;
  z-index: 5;
  min-width: 150px;
  width: 15vw;
  height: 100vh;
  text-align: left;
  padding: 50px;
  padding-right: 0;

  .logo {
    display: flex;
    flex-direction: column;

    img {
      width: 90%;
      max-width: 125px;
      margin-bottom: 10px;
      filter: brightness(0) saturate(100%);
      transform-origin: center center;

      &.large {
        position: relative;
        transform-origin: left center;
        transform: scale(7); // nav width ÷ scale
        backface-visibility: hidden;
        -webkit-font-smoothing: subpixel-antialiased;
        transform-style: preserve-3d;
      }
    }
  }

  ul {
    margin-right: auto;
    margin: 0;
    padding: 0;

    li {
      margin: 30px;
      margin-left: 0;
      list-style-type: none;
      transition: all 1s ease;
      cursor: pointer;

      &:hover {
        color: $dark-green;

        li {
          color: black;

          &:hover {
            color: $dark-green;
          }
        }
      }

      .lokasi {
        margin: 30px 0;
      }

      .lokasiList {
        margin: 0;
        padding-left: 10%;
        transform: translateY(0);

        li:last-child {
          margin-bottom: 0;
        }
      }

      &.router-link-exact-active {
        color: white !important;
        // background-color: $green;
      }

      a {
        color: black;
        text-decoration: none;

        &:visited {
          color: black;
        }

        &:hover {
          color: $green;
        }

      }

      i {
        margin: 0 10px;
        cursor: pointer;

        &:hover {
          color: $green;
        }
      }
    }
  }
  .active {
    position: absolute;
    background-color: $green;
    top: 0;
    left: 0;
    width: 80%;
    height: 2.5em;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
  }
}
</style>
