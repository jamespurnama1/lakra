<template>
  <div id="rumah" :class="{ remMargin:$store.state.isMobile }">
    <h1>{{ data.Title }}</h1>
    <img :src="require(`../assets/images/${ttl}/H0.jpg`)" />
    <div class="info">
      <div class="leftInfo">
        <div class="h2">
          <h2><i class="las la-map-marker" />{{ data.Location }}</h2>
        </div>
        <p v-if="data.Desc" class="margin desc">{{ data.Desc }}</p>
        <div class="margin status">
          <p><b>Status Konstruksi</b></p>
          <p>{{ data.Status }}</p>
        </div>
      </div>
      <div class="rightInfo">
        <p><b>Mulai dari</b></p>
        <h2>Rp. {{ data.Price }}</h2>
        <p class="margin"><b>Jenis Pembayaran</b></p>
        <p>Hard Cash, KPR</p>
      </div>
    </div>
    <div class="details">
      <h2>Spesifikasi</h2>
      <ul>
        <li><i class="las la-user-friends" /><p>Kamar Tidur: {{ data.Kamar }}</p></li>
        <li><i class="las la-expand-arrows-alt" />
          <p>Luas Tanah: {{ data.Tanah }}m<sup>2</sup></p>
        </li>
        <li><i class="las la-home" /><p>Luas Bangunan: {{ data.Bangunan }}m<sup>2</sup></p></li>
        <li><i class="las la-check" /><p>Taman</p></li>
        <li><i class="las la-check" /><p>Tempat Parkir</p></li>
        <li><i class="las la-shield-alt" /><p>Keamanan 24 Jam</p></li>
      </ul>
      <img :src="require(`../assets/images/${ttl}/H2.jpg`)" />
    </div>
    <div class="gallery">
      <img :src="require(`../assets/images/${ttl}/H1.jpg`)" />
      <img :src="require(`../assets/images/${ttl}/H3.jpg`)" />
      <img :src="require(`../assets/images/${ttl}/Z3.jpg`)" />
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

  @include max-media(mobile) {
    margin: 0;
  }

  p, h2 {
    margin: 0;
  }

  h1 {
    margin-top: 0;
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
    display: grid;
    grid-template-areas:  'left right'
                          'desc desc';
    justify-content: space-between;
    margin: 5px 30px 30px 0;
    min-height: 90px;

    @include max-media(mobile) {
      margin-right: 0;
      min-height: 120px;
    }

    .margin {
      margin-top: auto;

      &.desc {
        grid-area: desc;
        text-align: left;
        white-space: normal;
      }

      &.status {
        grid-area: status;
        margin-left: auto;

        @include max-media(mobile) {
          margin-left: 0;
        }
      }
    }

    .leftInfo {
      grid-area: left;
      display: grid;
      grid-template-areas:  'loc loc'
                            'desc status';
      flex-direction: column;
      text-align: left;
      width: 110%;

      @include max-media(mobile) {
        grid-template-areas:  'loc'
                              'desc'
                              'status';
        width: 45%;
      }

      p {
        white-space: nowrap;
      }

      .h2 {
        display: flex;
      }
    }
    .rightInfo {
      grid-area: right;
      text-align: left;
      display: flex;
      flex-direction: column;
    }
  }

  h2 {
    text-align: left;
    white-space: nowrap;
  }

  .details {
    display: grid;
    grid-template-areas:  'header img'
                          'list img';
    grid-template-rows: 2em 1fr;
    grid-gap: 0 30px;
    margin-bottom: 30px;
    margin-right: 30px;
    height: 60vh;
    min-height: 500px;
    overflow: hidden;

    @include max-media(mobile) {
      height: initial;
      min-height: initial;
      grid-template-areas:  'header'
                            'list'
                            'img';
      grid-gap: 10px;
      margin-right: 0;
    }

    img {
      height: 100%;
      grid-area: img;

      @include max-media(mobile) {
        height: initial;
      }
    }

    h2 {
      grid-area: header;
    }

    ul {
      text-align: left;
      margin: auto 0;
      padding: 0;
      grid-area: list;

      @include max-media(mobile) {
        columns: 2;
      }

      @include max-media(small-mobile) {
        columns: 1;
      }

      li {
        list-style-type: none;
        padding: 2vh 0;
        display: flex;
        align-items: center;

        i {
          margin-right: 10px;
          font-size: 2em;
        }
      }
    }
  }

  .gallery {
    display: grid;
    grid-template-areas:  'first second'
                          'third third';
    flex-wrap: wrap;
    margin-right: 30px;
    margin-bottom: 30px;
    grid-gap: 30px;
    overflow: hidden;

    @include max-media(mobile) {
      margin-right: 0;
      grid-template-areas:'first'
                          'second'
                          'third';
    }

    img {

      &:first-child {
        grid-area: first;
      }

      &:nth-child(2) {
        grid-area: second;
      }

      &:last-child {
        grid-area: third;
      }
    }
  }

  .map {
    width: calc(100% - 30px);
    height: 70vh;
    min-height: 150px;
    min-width: 320px;
    margin-right: 30px;

    @include max-media(mobile) {
      width: 100%;
      margin-right: 0;
    }
  }
}
</style>
