<template>
  <div id="lokasi">
    <h1>Projects</h1>
    <div class="flex" v-if="$store.state.windowWidth > 600">
      <ul class="loc">
        <router-link tag="li" v-for="(house, i) in $store.state.houses"
        @mouseover.native="active(i)" :key="i" :to="`/projects/${house.Title.toLowerCase()}`">
          <p>{{ house.Title }}</p>
          <p v-if="$store.state.windowWidth < 601">
            <i class="las la-map-marker" />
            {{ house.Location }}
          </p>
        </router-link>
      </ul>
      <div class="active1" />
      <GmapMap
        v-if="$store.state.windowWidth > 600"
        :center="{ lat: -6.405181627778632, lng: 106.84120278009165 }"
        :zoom=zoom
        ref="mapRef"
        class="map"
        :options="{
          styles: style,
          disableDefaultUI: true,
          gestureHandling: 'cooperative',
          }"
      >
        <gmap-info-window
          :options="infoOptions"
          :position="activeMarker.position"
          :opened="true"
        />
        <GmapMarker
          :position="activeMarker.position"
          :animation="2"
          :clickable="false"
          :draggable="false"
          :icon="{
            url: require('../assets/marker.svg'),
            size: {width: 78, height: 95, f: 'px', b: 'px',},
            scaledSize: {width: 39, height: 48, f: 'px', b: 'px',},
            anchor: { x: 19.5, y: 48, f: 'px', b: 'px'},
          }"
        />
      </GmapMap>
    </div>
    <Listing v-else-if="$store.state.windowWidth < 601" />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import style from '../styles/style.json';
import Listing from './Listing.vue';

export default {
  name: 'Lokasi',
  components: {
    Listing,
  },
  data() {
    return {
      markers: [{
        position: {
          lat: -6.405181627778632,
          lng: 106.84120278009165,
        },
        infoText: '<strong>Lakrasamana</strong><br>Jl. Raden Saleh I No. 34',
      },
      {
        position: {
          lat: -6.387843811325713,
          lng: 106.78105976979819,
        },
        infoText: '<strong>Lakratempat</strong><br>Jl. lakra I No. 2',
      },
      {
        position: {
          lat: -6.175152668747219,
          lng: 106.82706501881407,
        },
        infoText: '<strong>Monas</strong><br>Beli nih Monas',
      }],
      activeMarker: {
        position: {
          lat: 0,
          lng: 0,
        },
      },
      tl: gsap.timeline(),
      style,
      zoom: 13,
      prevActive: null,
      infoOptions: {
        content: '',
        pixelOffset: {
          width: 0,
          height: -45,
        },
      },
    };
  },
  methods: {
    active(i) {
      this.activeMarker = this.markers[i];
      this.infoOptions.content = this.markers[i].infoText;
      // const h = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      // this.yPos = (h / 10) + 58 + ((i - 1) * 39.3);
      this.yPos = i * 26;
      if (this.$store.state.windowWidth > 600) {
        this.tl.set('.active1', {
          y: `${this.yPos}px`,
          x: 0,
          autoAlpha: 1,
        })
          .to('.loc li', {
            color: 'black',
            duration: 0.1,
          }, '<')
          .to(`.loc li:nth-child(${i + 1})`, {
            color: 'white',
            duration: 0.1,
          }, '<');
        if (this.prevActive !== i) {
          this.$refs.mapRef.$mapPromise.then((map) => {
            map.setZoom(13);
            setTimeout(() => {
              map.panTo(this.markers[i].position);
              map.setZoom(15);
            }, 500);
          });
          this.prevActive = i;
        }
      }
    },
    toggleInfoWindow: (marker) => {
      this.infoWindowPos = marker.position;
      this.infoOptions.content = marker.infoText;
    },
  },
  async mounted() {
    await setTimeout(() => {
      this.active(0);
      gsap.set('.gm-ui-hover-effect', {
        display: 'none',
      });
    }, 1000);
    this.$root.$emit('mounted');
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    '$store.state.windowWidth'() {
      this.active(0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';

#lokasi {
  margin-top: 10vh;
  min-height: 50vh;
  will-change: transform;

  @include max-media(mobile) {
    margin-top: 0;
  }

  h1 {
    text-align: left;
    margin: 0.6em 0;
  }

  .flex {
    display: flex;
    position: relative;

    .map {
      height: 75vh;
      width: 80%;
      margin-left: auto;

      @include max-media(small-tablet) {
          width: 60%;
        }
    }

    ul {
      text-align: left;
      padding-left: 20px;
      margin-top: 0;

      li {
        list-style-type: none;
        padding: 10px 0;
        margin: 0;
        cursor: pointer;

        p {
          padding: 0;
          margin: 0;
        }
      }
    }

    .active1 {
      position: absolute;
      background-color: $green;
      top: 0;
      left: 0;
      width: 80%;
      height: 39.5px;
      transform: translate(50vw, 50vh);
      transition: all .3s ease;
      z-index: -1;
      opacity: 0;
      visibility: hidden;
    }
  }
}
</style>
