<template>
  <div id="home" :class="{ remMargin:$store.state.isMobile }">
      <hooper
        :wheelControl="false"
        :infiniteScroll="true"
        :autoPlay="true"
        :playSpeed="5000"
        :transition="750">
        <slide>
          <div class="hero">
            <h1>Build Home, Build Values.</h1>
            <p>Lakra adalah perusahaan property developer
              yang berbasis di Jakarta, kami hadir untuk
              memperkenalkan hidup mendasar dan bernilai
              yang dimulai dari bawah atap rumah tinggal kita.
            </p>
          </div>
          <div class="overlay" style="opacity: 40%" />
          <img
            srcset="../assets/images/H3-1800w.jpg 1900w,
                    ../assets/images/H3-1200w.jpg 1300w,
                    ../assets/images/H3-600w.jpg 700w"
            src="../assets/images/H3-1800w.jpg"
            alt="Kamar &amp; tempat belajar." />
        </slide>
        <slide>
          <div class="hero">
            <h1>Design maksimal dengan biaya terjangkau.</h1>
            <p>Menyediakan hunian premium yang
              inovatif dan berkualitas bagi client,
              dengan menghadirkan arsitek profesional,
              kontraktor, dan konsultan terkait untuk
              menjamin kualitas dan kenyamanan hunian bagi client.
            </p>
          </div>
          <div class="overlay" style="opacity: 40%" />
                  <img
            srcset="../assets/images/H1-1800w.jpg 1900w,
                    ../assets/images/H1-1200w.jpg 1300w,
                    ../assets/images/H1-600w.jpg 700w"
            src="../assets/images/H1-1800w.jpg"
            alt="Lakrasamana dengan ruko." />
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    <listing />
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from 'hooper';
import 'hooper/dist/hooper.css';
import Listing from './Listing.vue';

export default {
  name: 'Home',
  components: {
    Listing,
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
  },
  mounted() {
    this.$root.$emit('mounted');
    setTimeout(() => {
      document.querySelector('#home').style.opacity = '100%';
    }, 100);
  },
};
</script>
<style lang="scss" scoped>
@import '../styles/index.scss';

#home {
  margin-top: 45vh;
  will-change: transform;
  opacity: 0;
  transition: opacity .5s ease;

  @include max-media(mobile) {
    margin: 0;
  }
}
</style>
<style lang="scss">
@import '../styles/index.scss';

.hooper {
  width: 100%;
  height: 70vh;
  min-height: 150px;
  min-width: 320px;
  margin-bottom: 5%;

  li {
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero {
      position: absolute;
      width: 85%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      z-index: 3;

      h1 {
        font-weight: 300;
        margin: 0;
        margin-bottom: 10px;
      }

      p {
        margin: 0 auto;
        width: 60%;

        @include max-media(mobile) {
          width: 80%;
        }
      }
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: $green;
      opacity: 40%;
      z-index: 2;
    }
  }
}
</style>
