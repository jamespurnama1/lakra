<template>
  <div id="home">
    <hooper :wheelControl="false" :infiniteScroll="true" :autoPlay="true">
      <slide>
        <div class="hero">
          <h2>Build Home, Build Value</h2>
          <p>Lakra adalah perusahaan property developer
            yang berbasis di Jakarta, kami hadir untuk
            memperkenalkan hidup mendasar dan bernilai
            yang dimulai dari bawah atap rumah tinggal kita.
          </p>
        </div>
        <div class="overlay" />
        <img src="../assets/images/H3.jpg" />
      </slide>
      <slide>
        <div class="hero">
          <h2>Design maksimal dengan biaya minimum.</h2>
          <p>Menyediakan hunian premium yang
            inovatif dan berkualitas bagi client,
            dengan menghadirkan arsitek profesional,
            kontraktor, dan konsultan terkait untuk
            menjamin kualitas dan kenyamanan hunian bagi client.
          </p>
        </div>
        <div class="overlay" />
        <img src="../assets/images/H1.jpg" />
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
  created() {

  },
  mounted() {
    // document.querySelector('.hooper').scrollIntoView();
    this.$root.$emit('mounted');
    setTimeout(() => {
      document.querySelector('.logoText').style.opacity = 1;
      document.querySelector('#home').style.opacity = 1;
    }, 1000);
  },
  beforeDestroy() {
    // window.scrollTo({ top: 500, behavior: 'smooth' });
  },
};
</script>
<style lang="scss" scoped>
#home {
  margin-top: 45vh;
  will-change: transform;
  opacity: 0;
  transition: opacity .5s ease;
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

      h2 {
        font-size: 40px;
        font-weight: 200;
        margin: 0;
      }

      p {
        margin: 0;
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
      opacity: 30%;
      z-index: 2;
    }
  }
}
</style>
