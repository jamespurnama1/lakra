<template>
  <div id="nav">
    <router-link to="/" class="logo" v-if="windowWidth > 600">
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
              <template v-for="(house, i) in $store.state.houses">
              <router-link
              tag="li"
              :ref="house.Title.toLowerCase()"
              :id="house.Title.toLowerCase()"
              :key="i"
              :to="`/projects/${house.Title.toLowerCase()}`">
                {{ house.Title }}
              </router-link>
              </template>
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
    <div class="active" v-if="windowWidth > 600" />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { debounce } from 'debounce';
// import asyncRoutes from '@/router/asyncRoutes';

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
      this.act(this.$route.path.slice(this.$route.path.lastIndexOf('/') + 1));
    },
    async expand() {
      this.expanded = !this.expanded;
      gsap.to('.la-angle-down', {
        rotate: '+=180',
        duration: 0.3,
      });
      this.offset = (this.expanded) ? 48 : 0;
      this.act(this.$route.path.slice(this.$route.path.lastIndexOf('/') + 1));
      await this.$nextTick();
      this.active(this.$route.name);
    },
    checkScroll() {
      if (this.$route.name === 'Home') {
        gsap.set('.logoText', {
          autoAlpha: 0,
        });
        ScrollTrigger.getById('trigger1').enable();
        window.scrollTo({ top: 45 * this.h });
        gsap.to('.logoText', {
          autoAlpha: 1,
          duration: 0.3,
        });
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          ScrollTrigger.refresh();
        }, 500);
      } else {
        ScrollTrigger.getById('trigger1').disable(false);
        this.$nextTick(() => {
          gsap.set('.logoText', {
            x: 0,
            y: 0,
            scale: 1,
          });
          gsap.to('.logoText', { clearProps: true });
          gsap.to('ul', { clearProps: true });
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
          this.tl.from('.logoText', {
            x: `${this.navWidth - 50}px`,
            y: '10vh',
            scale: 6,
          })
            .to('#nav img:first-child', {
              rotate: '90deg',
            }, 0)
            .to('.links', {
              y: '+=10%',
            }, 0);
        },
        '(min-width:769px) and (max-width: 960px)': () => {
          this.tl = gsap.timeline({
            scrollTrigger: {
              id: 'trigger1',
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
        '(max-width: 768px)': () => {
          this.tl = gsap.timeline({
            scrollTrigger: {
              id: 'trigger1',
            },
          });
          this.tl.from('.logoText', {
            x: `${this.navWidth - 50}px`,
            y: '5vh',
            scale: 2.5,
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
    act(i) {
      switch (i) {
        case 'projects':
          this.yPos = (27 * this.h) + 46;
          break;

        case 'lakrasamana':
          this.yPos = (27 * this.h) + 46 + this.offset;
          break;

        case 'kpr':
          this.yPos = (27 * this.h) + 92 + this.offset;
          break;

        case 'kontak':
          this.yPos = (27 * this.h) + 138 + this.offset;
          break;

        case 'tentang':
          this.yPos = (27 * this.h) + 184 + this.offset;
          break;

        default:
      }
    },
    active(i) {
      if (i === 'Rumah' && !this.expanded) {
        this.yPos = (27 * this.h) + 46;
        this.tl2.set('.active', {
          y: this.yPos,
          duration: 0.1,
        })
          .to('.lokasi', {
            color: 'white',
            duration: 0.3,
          }, '<')
          .to('.active', {
            x: '125%',
            autoAlpha: 1,
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
            x: '125%',
            autoAlpha: 1,
            duration: 0.3,
          }, 'active', '>')
          .to('#nav .router-link-exact-active', {
            color: 'white',
            duration: 0.3,
          }, 'active');
      }
    },
  },
  async mounted() {
    this.$nextTick(() => {
      this.logo(); // init gsap scrolltrigger
      ScrollTrigger.refresh();
    });
    this.$root.$on('mounted', () => { // on content mount
      this.$nextTick(() => {
        this.active(this.$route.name); // move active
        this.checkScroll();
        this.$Progress.finish();
      });
    });
  },
  watch: {
    windowWidth() {
      debounce(async () => {
        this.checkScroll();
        await this.$nextTick();
        this.act(this.$route.path.slice(this.$route.path.lastIndexOf('/') + 1));
        this.active(this.$route.name);
      }, 200);
    },
    // eslint-disable-next-line object-shorthand
    '$route'(to, from) {
      this.$Progress.start();
      this.$Progress.increase(20);
      this.$store.state.opened = false;
      const p = from.path.slice(from.path.lastIndexOf('/') + 1);
      if (p.length > 0) {
        gsap.to(this.$refs[p].$el, {
          color: 'black',
          duration: 0.3,
        });
      }
      this.close();
      this.$nextTick(() => {
        if (to.name === 'Home') {
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
    navWidth() {
      return this.$store.state.navWidth;
    },
    h() {
      return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 100;
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
  padding: 7vh 10px 50px 50px;
  background-color: white;

  .logo {
    display: flex;
    flex-direction: column;
    height: 20vh;

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
    top: 0;
    left: -100%;
    width: 80%;
    min-width: 150px;
    height: 2.5em;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
  }
}
</style>
