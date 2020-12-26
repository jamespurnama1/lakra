<template>
  <div id="home">
    <hooper :wheelControl="false">
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
      </slide>
      <slide>
      </slide>
    </hooper>
    <listing />
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import Listing from './Listing.vue';

export default {
  name: 'Home',
  components: {
    Listing,
    Hooper,
    Slide,
  },
  methods: {
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';

#home {
  overflow: hidden;
  margin-top: 30%;
  width: 75vw;
  margin-left: auto;

  .hooper {
    width: 100%;
    height: 50vw;
    min-height: 150px;
    min-width: 320px;

    li {
      position: relative;

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

      img {
      width: 100%;
      height: 100%;
      }
    }
  }
}
</style>
