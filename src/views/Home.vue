<template>
  <transition name="fade" appear>
    <div id="home" :class="{ remMargin:$store.state.isMobile }">
      <transition name="fade">
        <hooper
          v-if="ready"
          :wheelControl="false"
          :infiniteScroll="true"
          :autoPlay="true"
          :playSpeed="5000"
          :transition="750">
          <slide v-for="(slides, i) in carouselData" :key="i">
            <div class="hero">
              <h1>{{ slides.Header }}</h1>
              <p>{{ slides.Caption }}</p>
            </div>
            <div class="overlay" />
            <img
              :srcset="`${slides.Background[0].thumbnails.full.url} 1900w,
                        ${slides.Background[0].thumbnails.large.url} 700w`"
              :src="slides.Background[0].thumbnails.full.url"
              alt="" />
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </transition>
      <listing />
    </div>
  </transition>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from 'hooper';
import axios from 'axios';
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
  data() {
    return {
      ready: false,
      carouselData: null,
    };
  },
  mounted() {
    this.$root.$emit('mounted');
    setTimeout(() => {
      document.querySelector('#home').style.opacity = '1';
      this.ready = true;
    }, 100);
  },
  created() {
    this.getData();
  },
  computed: {
    preview() {
      return window.location.host.split('.')[0] === 'preview';
    },
  },
  methods: {
    async getData() {
      try {
        const result = await axios.get(`https://api.airtable.com/v0/appp1lDFDdnHyUpHK/Carousel?view=${this.preview ? 'Carousel%20in%20Preview%20Mode' : 'Live%20Carousel'}`, {
          headers: { Authorization: `Bearer ${process.env.VUE_APP_AIRTABLE_TOKEN}` },
        });
        const data = result.data.records.map((item) => ({
          id: item.id,
          ...item.fields,
        }));
        this.carouselData = data;
        return Promise.resolve();
      } catch (error) {
        return Promise.reject();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../styles/index.scss';

#home {
  margin-top: 45vh;
  will-change: transform;
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
      background-color: rgba(128, 135, 111, 0.4); // $green
      z-index: 2;
    }
  }
}
</style>
