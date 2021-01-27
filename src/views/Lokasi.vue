<template>
  <div id="lokasi" :class="{ remMargin:$store.state.isMobile }">
    <h1>Projects</h1>
    <div class="flex" v-if="$store.state.windowWidth > 600 && !$store.state.isMobile">
      <ul class="loc">
        <li v-for="(house, i) in $store.state.houses"
        @mouseover="active(i)" :key="i" @click="$emit('selected', house);">
          <p>{{ house.Title }}</p>
          <p v-if="$store.state.windowWidth < 601 || $store.state.isMobile">
            <i class="las la-map-marker" />
            {{ house.Location }}
          </p>
        </li>
      </ul>
      <div class="active1" />
      <lazy-component>
        <GmapMap
          v-if="$store.state.windowWidth > 600 && !$store.state.isMobile"
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
      </lazy-component>
    </div>
    <Listing v-else-if="$store.state.windowWidth < 601 || $store.state.isMobile" />
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
        infoText: '<strong>Lakrasamana</strong><br>Jl. Raden Saleh No. 52',
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
    async active(i) {
      this.activeMarker = this.markers[i];
      this.infoOptions.content = this.markers[i].infoText;
      this.yPos = i * 26;
      if (this.$store.state.windowWidth > 600 && !this.$store.state.isMobile) {
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
          try {
            await this.$gmapApiPromiseLazy();
            this.$refs.mapRef.$mapPromise.then((map) => {
              map.setZoom(13);
              setTimeout(() => {
                map.panTo(this.markers[i].position);
                map.setZoom(15);
              }, 500);
            });
            this.prevActive = i;
          } catch (err) {
            console.error(err);
          }
        }
      }
    },
    toggleInfoWindow: (marker) => {
      this.infoWindowPos = marker.position;
      this.infoOptions.content = marker.infoText;
    },
  },
  mounted() {
    this.active(0);
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
    margin: 0;
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
      background-color: #d1d1d1;

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
