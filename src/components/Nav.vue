<template>
  <div id="nav" :class="{ mobile: $store.state.opened }">
    <router-link to="/" class="logo" v-show="windowWidth > 600 && !$store.state.isMobile">
      <img src="../assets/logo.svg" />
      <img class="logoText"
      src="../assets/logotext.svg" />
    </router-link>
    <ul class="links">
      <li>
        <div>
          <router-link to="/projects" id="project" ref="projects" class='lokasi'>
            Projects<i @click.stop.prevent="expand" class="las la-angle-down" />
          </router-link>
          <transition name="slide-up">
            <ul class="lokasiList" v-if="expanded">
              <li
                v-for="(house, i) in $store.state.houses"
                @click="$emit('selected', house)"
                :ref="house.Title.toLowerCase()"
                :id="house.Title.toLowerCase()"
                :key="i">
                {{ house.Title }}
              </li>
            </ul>
          </transition>
        </div>
      </li>
      <router-link tag="li" ref="kpr" to="/kpr">
        KPR
      </router-link>
      <router-link tag="li" ref="kontak" to="/kontak">
        Kontak Kami
      </router-link>
      <router-link tag="li" ref="tentang" to="/tentang">
        Tentang Kami
      </router-link>
    </ul>
    <div class="active"
    v-show="windowWidth > 600 && !$store.state.isMobile && $route.name !== 'Home'" />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { debounce } from 'debounce';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Navigation',
  data() {
    return {
      expanded: false,
      tl: null,
      tl2: gsap.timeline(),
      yPos: 0,
      offset: 0,
    };
  },
  methods: {
    close() {
      this.expanded = false;
      gsap.to('.la-angle-down', {
        rotate: 0,
        duration: 0.3,
      });
      this.offset = 0;
      this.act(this.lastPath);
    },
    async expand() {
      this.expanded = !this.expanded;
      gsap.to('.la-angle-down', {
        rotate: '+=180',
        duration: 0.3,
      });
      this.offset = (this.expanded) ? 48 : 0;
      await this.$nextTick();
      this.act(this.lastPath);
      this.active(this.$route.name, this.lastPath);
    },
    resizeW() {
      this.checkScroll();
    },
    resizeH() {
      this.act(this.lastPath);
      this.active(this.$route.name, this.lastPath);
      this.resizeW();
    },
    async checkScroll() {
      const h = ((document.documentElement.clientHeight || 0, window.innerHeight || 0) / 100);
      if (this.$route.name === 'Home' && this.$store.state.windowWidth > 600) {
        try {
          ScrollTrigger.getById('trigger1').enable();
        } catch (err) {
          console.error(err);
        }
        window.scrollTo({ top: 45 * h });
        gsap.to('.logo', {
          autoAlpha: 1,
          delay: 0.7,
          duration: 0.5,
        });
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          ScrollTrigger.refresh();
        }, 500);
      } else if (this.$route.name) {
        await this.$nextTick();
        try {
          ScrollTrigger.getById('trigger1').disable(false);
        } catch (err) {
          console.error(err);
        }
        gsap.set('.logoText', {
          x: 0,
          y: 0,
          scale: 1,
        });
        gsap.to('.logoText', { clearProps: true });
        gsap.to('ul', { clearProps: true });
        gsap.to('.logo', {
          autoAlpha: 1,
          duration: 0.5,
        });
      }
    },
    logo() {
      ScrollTrigger.saveStyles('.logoText, .links');
      ScrollTrigger.defaults({
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
      });
      ScrollTrigger.matchMedia({
        '(min-width: 961px)': () => {
          this.tl = gsap.timeline({
            scrollTrigger: {
              id: 'trigger1',
            },
          });
          this.tl.fromTo('.logoText', {
            x: '16vw',
            scale: 6,
            opacity: 1,
          }, {
            x: 0,
            scale: 1,
            opacity: 1,
          })
            .to('#nav img:first-child', {
              rotate: '90deg',
            }, 0)
            .to('.links', {
              y: '10%',
            }, 0);
        },
        '(min-width:769px) and (max-width: 960px)': () => {
          this.tl = gsap.timeline({
            scrollTrigger: {
              id: 'trigger1',
            },
          });
          this.tl
            .fromTo('.logoText', {
              x: '160px',
              y: '6vh',
              scale: 4,
              opacity: 1,
            }, {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
            })
            .to('#nav img:first-child', {
              rotate: '90deg',
            }, 0)
            .to('.links', {
              y: '10%',
            }, 0);
        },
        '(min-width: 601px) and (max-width: 768px)': () => {
          this.tl = gsap.timeline({
            scrollTrigger: {
              id: 'trigger1',
            },
          });
          this.tl.fromTo('.logoText', {
            x: '160px',
            scale: 2.5,
            y: '10.5vh',
            opacity: 1,
          }, {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
          })
            .to('#nav img:first-child', {
              rotate: '90deg',
            }, 0)
            .to('.links', {
              y: '10%',
            }, 0);
        },
        '(max-width: 600px)': () => {
          gsap.to('.logoText', { clearProps: true });
          gsap.to('ul', { clearProps: true });
          gsap.to('#nav img:first-child', { clearProps: true });
        },
        all: () => {
          gsap.set('.logoText', {
            force3D: false,
          });
        },
      });
    },
    act(i) {
      switch (i) {
        case 'projects':
          this.yPos = 48;
          break;

        case 'lakrasamana':
          this.yPos = 48 + this.offset;
          break;

        case 'kpr':
          this.yPos = 94 + this.offset;
          break;

        case 'kontak':
          this.yPos = 144 + this.offset;
          break;

        case 'tentang':
          this.yPos = 194 + this.offset;
          break;

        default:
      }
    },
    active(i, j) {
      console.log(i);
      if (i === 'Rumah') {
        if (!this.expanded) {
          this.yPos = 46;
          this.tl2.to('.lokasi', {
            color: 'white',
            duration: 0.3,
          }, '<');
        } else {
          this.tl2.to(`#${j}`, {
            color: 'white',
            duration: 0.3,
          }, 'active')
            .to('.lokasi', {
              color: 'black',
              duration: 0.3,
            }, '<');
        }
        this.tl2.set('.active', {
          y: this.yPos,
          duration: 0.5,
        })
          .to('.active', {
            x: '15vw',
            autoAlpha: 1,
            duration: 0.3,
          });
      } else if (!i || i === 'Not Found') {
        this.tl2.to('.active', {
          x: 0,
          autoAlpha: 0,
          duration: 0.3,
        });
      } else if (i !== 'Home') {
        this.tl2.to('.lokasi, #project', {
          color: 'black',
          duration: 0.3,
        }, 0)
          .to('.active', {
            y: this.yPos,
            duration: 0.3,
          }, '+=0.1')
          .to('.active', {
            x: '15vw',
            autoAlpha: 1,
            duration: 0.3,
          }, 'active', '>')
          .to('#nav .router-link-exact-active', {
            color: 'white',
            duration: 0.3,
          }, 'active');
      } else {
        this.tl2.to('.lokasi, #project', {
          color: 'black',
          duration: 0.3,
        }, 0);
      }
    },
  },
  async mounted() {
    this.logo();
    this.$root.$on('mounted', () => {
      this.$nextTick(() => {
        this.active(this.$route.name, this.lastPath);
        Promise.resolve().then(() => { this.checkScroll(); });
        this.$Progress.finish();
      });
    });
  },
  watch: {
    windowWidth() {
      debounce(this.resizeW(), 200, true);
    },
    // eslint-disable-next-line object-shorthand
    '$store.state.windowHeight'() {
      debounce(this.resizeH(), 100, true);
    },
    // eslint-disable-next-line object-shorthand
    '$route'(to, from) {
      this.$Progress.start();
      this.$Progress.increase(20);
      this.$store.state.opened = false;
      const p = from.path.slice(from.path.lastIndexOf('/') + 1);
      if (p.length > 0 && p !== '404') {
        gsap.to(this.$refs[p].$el, {
          color: 'black',
          duration: 0.3,
        });
      }
      this.close();
      this.$nextTick(() => {
        if (to.name === 'Home') {
          gsap.to('.logo', {
            autoAlpha: 0,
            duration: 0.3,
          });
          gsap.to('.active', {
            x: 0,
            autoAlpha: 0,
            duration: 0.3,
          });
        }
      });
    },
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    },
    h() {
      return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 100;
    },
    lastPath() {
      return this.$route.path.slice(this.$route.path.lastIndexOf('/') + 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';

#nav {
  position: fixed;
  z-index: 5;
  min-width: 144.15px;
  width: 15vw;
  height: 100vh;
  text-align: left;
  padding: 7vh 1vw 50px 50px;

  &.mobile {
    background-color: white;
  }

  @include max-media(tablet) {
    padding-right: 10px;
  }

  .logo {
    display: flex;
    flex-direction: column;
    height: 20vh;
    margin-right: auto;
    opacity: 0;
    width: min-content;

    img {
      position: relative;
      height: 15vh;
      width: 15vh;
      margin-bottom: 10px;
      transform-origin: center center;

      &.logoText {
        height: 3vh;
        transform-origin: left top;
      }
    }
  }

  ul {
    margin-right: auto;
    margin: 0;
    padding: 0;

    &.links {
      position: relative;
      top: 30px;

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
  }
  .active {
    position: absolute;
    background-color: $green;
    top: 27.5vh;
    left: -15vw;
    width: 15vw;
    min-width: 194px;
    height: 2.5em;
    z-index: -1;
    opacity: 0;
    visibility: hidden;

    &:hover {
      background-color: $dark-green;
    }
  }
}
</style>
