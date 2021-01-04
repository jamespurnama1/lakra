<template>
  <div id="lokasi">
    <ul class="loc">
      <router-link @mouseover.native="active(1)" tag="li" to="/lokasi/Lakrasamana">
        Lakrasamana
      </router-link>
      <router-link @mouseover.native="active(2)" tag="li" to="/lokasi/Lakratempat">
        Lakratempat
      </router-link>
      <router-link @mouseover.native="active(3)" tag="li" to="/lokasi/Lakralokasi">
        Lakralokasi
      </router-link>
      <li @mouseover="active(4)">
        Semua Lokasi
      </li>
    </ul>
    <div class="active1" />
    <GmapMap
      :center="pid"
      :zoom="7"
      map-type-id="terrain"
      ref="mapRef"
      class="map"
    >
      <GmapMarker
        :position="pidi"
        :animation="2"
        :clickable="true"
        :draggable="false"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'Lokasi',
  data() {
    return {
      id: {
        lakrasamana: {
          lat: 11.0,
          lng: 11.0,
        },
        laklak: {
          lat: 10.0,
          lng: 10.0,
        },
      },
      pid: {
        lat: -11.0,
        lng: -11.0,
      },
      pidi: {
        lat: -11.0,
        lng: -11.0,
      },
    };
  },
  methods: {
    place(i) {
      this.$refs.mapRef.$mapPromise.then((map) => {
        map.panTo(i);
      });
      this.pidi = i;
    },
    async active(i) {
      try {
        if (i === 0) {
          gsap.to('.active1', {
            y: this.yPos,
            x: -200,
            autoAlpha: 0,
          });
        } else {
          await this.sleep(330);
          this.yPos = document.querySelector(`.loc li:nth-child(${i})`).getBoundingClientRect().top - 11;
          this.tl2.to('.active1', {
            y: this.yPos,
            duration: 0.3,
          })
            .to('.active1', {
              x: 0,
              autoAlpha: 1,
            }, '>');
        }
      } catch (err) {
        console.error(err);
      }
    },
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';

#lokasi {
  margin-top: 15vh;
  display: flex;

  .map {
    height: 75vh;
    width: 80%;
    margin-left: auto;
  }

  ul {
    text-align: left;
    padding: 0;

    li {
      list-style-type: none;
      padding: 10px 0;
      margin: 0;
    }
  }

  .active1 {
    position: absolute;
    background-color: $green;
    top: 0;
    left: 0;
    width: 80%;
    height: 2.5em;
    z-index: -1;
  }
 }
</style>
