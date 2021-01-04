<template>
  <div id="home">
    <hooper :wheelControl="false" :infiniteScroll="true" :autoPlay="true">
      <slide>
        <div class="hero">
          <h2>Build Home, Build Value</h2>
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ea
          </p>
        </div>
        <div class="overlay" />
        <img src="../assets/images/H3.jpg" />
      </slide>
      <slide>
        <div class="hero">
          <h2>Build Home, Build Value</h2>
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ea
          </p>
        </div>
        <div class="overlay" />
        <img src="../assets/images/H1.jpg" />
      </slide>
      <slide>
        <div class="hero">
          <h2>Build Home, Build Value</h2>
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ea
          </p>
        </div>
        <div class="overlay" />
        <img src="../assets/images/Z3.jpg" />
      </slide>
      <slide>
        <div class="hero">
          <h2>Build Home, Build Value</h2>
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ea
          </p>
        </div>
        <div class="overlay" />
        <img src="../assets/images/H2.jpg" />
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
      <hooper-progress slot="hooper-addons"></hooper-progress>
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
};
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';

#home {
  margin-top: 45vh;

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
}
</style>
