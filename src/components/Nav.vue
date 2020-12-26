<template>
  <div id="nav">
    <router-link to="Home">
      <img src="../assets/logo.svg" />
      <img class="large" src="../assets/logotext.svg" />
    </router-link>
    <ul>
      <li>
        <div>
          <router-link to="Lokasi">Lokasi</router-link>
          <i @click="expand" class="las la-angle-down"></i>
          <div v-if="expanded"></div>
        </div>
      </li>
      <li><router-link to="KPR">KPR</router-link></li>
      <li><router-link to="Kontak Kami">Kontak Kami</router-link></li>
      <li><router-link to="Tentang Kami">Tentang Kami</router-link></li>
    </ul>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'Navigation',
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    expand() {
      this.expanded = !this.expanded;
      gsap.to('a img:first-child', {
        rotate: 45,
      });
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
  // margin-right: 5vw;
  padding: 50px;
  padding-right: 10vw;

  img{
    width: 90%;
    max-width: 125px;
    margin-bottom: 10px;
    filter: brightness(0) saturate(100%);
    transform-origin: left center;
    transition: transform .5s ease-in-out;

    &.large {
      transform: scale(5) translate(4.3vw, 100%);
    }
  }

  ul {
    margin-right: auto;
    padding: 0;

    li {
      padding: 15px;
      padding-left: 0;
      list-style-type: none;

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
        padding: 0 10px;
      }
    }
  }
}
</style>
