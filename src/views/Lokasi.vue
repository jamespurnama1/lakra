<template>
  <div id="lokasi" :class="{ remMargin:$store.state.isMobile }">
    <h1>Projects</h1>
    <div class="flex" v-if="$store.state.windowWidth > 600 && !$store.state.isMobile">
      <ul class="loc">
        <li v-for="(house, i) in $store.state.data"
        @mouseover="active(i)" :key="i" @click="$emit('selected', house);">
          <p>{{ house.Name }}</p>
        </li>
      </ul>
      <div class="active1" />
        <GmapMap
          v-if="$store.state.windowWidth > 600 && !$store.state.isMobile"
          :center="{ lat: -6.41457487118613, lng: 106.84184069107874 }"
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
            :position="activeMarker"
            :opened="true"
          />
          <GmapMarker
            :position="activeMarker"
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
      activeMarker: {
        lat: 0,
        lng: 0,
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
    pos(i) {
      const pos = {
        lat: parseFloat(this.$store.state.data[i]['Lat, Long'].split(',', 1)[0], 10),
        lng: parseFloat(this.$store.state.data[i]['Lat, Long'].substr(this.$store.state.data[i]['Lat, Long'].lastIndexOf(',') + 1), 10),
      };
      return pos;
    },
    async active(i) {
      this.activeMarker = this.pos(i);
      this.infoOptions.content = `<strong>${this.$store.state.data[i].Name}</strong><br>${this.$store.state.data[i].Alamat}`;
      this.yPos = i * 36;
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
                map.panTo(this.pos(i));
                map.setZoom(15);
              }, 500);
            });
            this.prevActive = i;
          } catch (err) {
            // console.error(err);
          }
        }
      }
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
    margin: 0 30px;
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
