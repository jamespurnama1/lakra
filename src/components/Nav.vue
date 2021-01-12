<template>
  <div id="nav">
    <router-link to="/" class="logo">
      <img src="../assets/logo.svg" />
      <img class="logoText"
      src="../assets/logotext.svg" />
    </router-link>
    <ul class="links">
      <li>
        <div>
          <router-link to="/project" class='lokasi' @click.native="close">
            Project<i @click.stop.prevent="expand" class="las la-angle-down" />
          </router-link>
          <transition name="slide-up">
            <ul class="lokasiList" v-if="expanded">
              <router-link tag="li" v-for="(house, i) in $store.state.houses"
              :key="i" :to="`/project/${house.Title}`">
                {{ house.Title }}
              </router-link>
            </ul>
          </transition>
        </div>
      </li>
      <router-link tag="li" to="/kpr" @click.native="close">
        KPR
      </router-link>
      <router-link tag="li" to="/kontak" @click.native="close">
        Kontak Kami
      </router-link>
      <router-link tag="li" to="/tentang" @click.native="close">
        Tentang Kami
      </router-link>
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
      tl: null,
      tl2: gsap.timeline(),
      yPos: 0,
      scale: 7,
    };
  },
  methods: {
    close() {
      this.expanded = false;
      gsap.to('.la-angle-down', {
        rotate: 0,
        duration: 0.3,
      });
      this.active();
    },
    expand() {
      this.expanded = !this.expanded;
      gsap.to('.la-angle-down', {
        rotate: '+=180',
        duration: 0.3,
      });
      this.active();
    },
    updateData() {
      if (this.windowWidth > 1280) {
        this.scale = 7;
      } else if (this.windowWidth > 960) {
        this.scale = 5;
      } else if (this.windowWidth > 768) {
        this.scale = 3;
      }
      // ScrollTrigger.refresh(true);
    },
    checkScroll() {
      if (this.$route.name === 'Home') {
        ScrollTrigger.refresh(true);
        ScrollTrigger.getById('trigger1').enable();
      } else {
        ScrollTrigger.getById('trigger1').disable(true);
        gsap.set('.logoText', {
          x: 0,
          y: 0,
          scale: 1,
        });
        gsap.to('.logoText', { clearProps: true });
        gsap.to('ul', { clearProps: true });
      }
    },
    logo() {
      ScrollTrigger.matchMedia({
        '(max-width: 1920px)': () => {
          this.tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
              id: 'trigger1',
              trigger: '#home',
              start: 0,
              end: 'top top',
              endTrigger: '.hooper',
              scrub: 0.3,
              snap: {
                snapTo: [0, 1],
                duration: { min: 0.5, max: 1 },
                delay: 0.5,
              },
            },
          });
          this.tl
            .from('.logoText', {
              x: `${this.navWidth - 50}px`,
              y: '7vh',
              scale: 6,
            })
            .to('#nav img:first-child', {
              rotate: '90deg',
            }, 0)
            .to('.links', {
              y: '+=10%',
            }, 0);
        },
        '(max-width: 960px)': () => {
          this.tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
              id: 'trigger1',
              trigger: '#home',
              start: 0,
              end: 'top top',
              endTrigger: '.hooper',
              scrub: 0.3,
              snap: {
                snapTo: [0, 1],
                duration: { min: 0.5, max: 1 },
                delay: 0.5,
              },
            },
          });
          this.tl
            .from('.logoText', {
              x: `${this.navWidth - 50}px`,
              y: '5vh',
              scale: 4,
            })
            .to('#nav img:first-child', {
              rotate: '90deg',
            }, 0)
            .to('.links', {
              y: '+=10%',
            }, 0);
        },
        all: () => {
          gsap.set('.logoText', {
            force3D: false,
          });
        },
      });
    },
    async active() {
      try {
        if (this.$route.name === 'Home') {
          await this.sleep(330);
          gsap.to('.active', {
            y: this.yPos,
            x: -200,
            autoAlpha: 0,
          });
        } else if (this.$route.name === 'Rumah' && !this.expanded) {
          await this.sleep(330);
          this.yPos = document.querySelector('.lokasi').getBoundingClientRect().top - 11;
          this.tl2.to('.active', {
            y: this.yPos,
            duration: 0.3,
          })
            .to('.active', {
              x: 0,
              autoAlpha: 1,
            }, '>')
            .to('.lokasi', {
              color: 'white',
            }, '>');
        } else {
          this.tl2.to('.lokasi', {
            color: 'black',
          }, '>');
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
  mounted() {
    this.active();
    this.updateData();
    this.$nextTick(() => {
      this.logo();
      this.checkScroll();
      ScrollTrigger.refresh();
    });
    this.$root.$on('mounted', () => {
      ScrollTrigger.refresh();
      this.active();
    });
  },
  watch: {
    windowWidth() {
      // this.updateData();
      this.checkScroll();
    },
    route() {
      this.active();
      this.checkScroll();
    },
  },
  computed: {
    route() {
      return this.$route.path;
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    },
    navWidth() {
      return this.$store.state.navWidth;
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
  background-color: white;

  .logo {
    display: flex;
    flex-direction: column;

    img {
      position: relative;
      width: 90%;
      max-width: 125px;
      margin-bottom: 10px;
      transform-origin: center center;

      &.logoText {
        opacity: 1;
        transform-origin: left center;
      }
    }
  }

  ul {
    margin-right: auto;
    margin: 0;
    padding: 0;
    // transform: translateY(-10%);

  .router-link-exact-active {
    color: white !important;
  }

    li {
      margin: 30px;
      margin-left: 0;
      list-style-type: none;
      transition: all .3s ease;
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
