<template>
  <div id="rumah">
    <h1>{{ data.Title }}</h1>
    <img :src="require(`../assets/images/${ttl}/H0.jpg`)" />
    <div class="info">
      <div class="leftInfo">
        <div class="h2">
          <h2><i class="las la-map-marker"></i>{{ data.Location }}</h2>
        </div>
        <p>{{ data.Desc }}</p>
      </div>
      <div class="rightInfo">
        <p>Mulai dari:</p>
        <h2>Rp. {{ data.Price }}</h2>
      </div>
    </div>
    <div class="details">
      <h2>Spesifikasi</h2>
      <ul>
        <li><i class="las la-user-friends"></i>Kamar Tidur: 2</li>
        <li><i class="las la-expand-arrows-alt"></i>Luas Tanah: {{ data.Tanah }}m<sup>2</sup></li>
        <li><i class="las la-home"></i>Luas Bangunan: {{ data.Bangunan }}m<sup>2</sup></li>
        <li><i class="las la-check"></i>Taman</li>
        <li><i class="las la-check"></i>Tempat Parkir</li>
        <li><i class="las la-shield-alt"></i>Keamanan 24 Jam</li>
      </ul>
      <img class="img1" :src="require(`../assets/images/${ttl}/H2.jpg`)" />
    </div>
    <div class="gallery">
      <img class="img2" :src="require(`../assets/images/${ttl}/H1.jpg`)" />
      <img class="img3" :src="require(`../assets/images/${ttl}/Z3.jpg`)" />
    </div>
    <GmapMap
      :center="data.Marker.position"
      :zoom="15"
      class="map"
      map-type-id="terrain"
      ref="mapRef"
      :options="{
        styles: style,
        disableDefaultUI: true,
        gestureHandling: 'cooperative',
      }"
    >
      <gmap-info-window
        :options="infoOptions"
        :position="data.Marker.position"
        :opened="true"
      />
      <GmapMarker
        :position="data.Marker.position"
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
</template>

<script>
import style from '../styles/style.json';

export default {
  name: 'Rumah',
  props: {
    id: String,
  },
  data() {
    return {
      data: null,
      style,
      infoOptions: {
        content: '',
        pixelOffset: {
          width: 0,
          height: -45,
        },
      },
    };
  },
  created() {
    this.updateData();
  },
  methods: {
    updateData() {
      [this.data] = this.$store.state.houses.filter((f) => f.Title.toLowerCase() === this.id);
      if (this.data === undefined || this.data.length === 0) {
        this.$router.push('/404');
      }
      this.infoOptions.content = this.data.Marker.infoText;
    },
  },
  computed: {
    ttl() {
      return this.data.Title.toLowerCase();
    },
  },
  async mounted() {
    this.$root.$emit('mounted');
    await setTimeout(() => {
      document.querySelector('.gm-ui-hover-effect').style.display = 'none';
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';

#rumah {
  margin-top: 10vh;

  p, h2 {
    margin: 0;
  }

  h1 {
    text-align: left;
  }

  img {
    width: 100%;
    height: 70vh;
    min-height: 150px;
    min-width: 320px;
    object-fit: cover;
  }

  .info {
    display: flex;
    justify-content: space-between;
    margin: 5px 30px 30px 0;

    .leftInfo {
      display: flex;
      flex-direction: column;
      text-align: left;
      width: 45%;

      .h2 {
        display: flex;
      }
    }
    .rightInfo {
      text-align: left;
    }

    button {
      background-color: $green;
      color: white;
      border: 0;
      padding: 10px 25px;
      margin-bottom: 50px;
      margin-top: 1em;
      transition: background-color .3s ease;
      cursor: pointer;

      &:hover {
        background-color: $dark-green;
      }
    }

  }
  .details {
    display: grid;
    grid-template-areas: 'header img'
                          'list img';
    grid-gap: 30px;
    grid-template-rows: minmax(0, 0.3fr) minmax(0, 95%);
    margin-bottom: 30px;
    margin-right: 30px;
    height: 60vh;
    min-height: 500px;

    img {
      height: 100%;
    }

    h2 {
      text-align: left;
      grid-area: header;
    }

    ul {
      text-align: left;
      margin: auto 0;
      padding: 0;
      grid-area: list;

      li {
        list-style-type: none;
        padding: 2vh 0;

        i {
          margin-right: 10px;
          font-size: 2em;
        }
      }
    }
    .img1 {
      grid-area: img;
    }
    .img2 {
      grid-area: img2;
    }
    .img3 {
      grid-area: img3;
    }
  }

  .gallery {
    display: flex;

    img {
      margin-right: 30px;
      margin-bottom: 30px;
    }
  }

  .map {
    width: calc(100% - 30px);
    height: 70vh;
    min-height: 150px;
    min-width: 320px;
    margin-right: 30px;
  }
}
</style>
