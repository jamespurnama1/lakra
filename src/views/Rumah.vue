<template>
  <div id="rumah" :class="{ remMargin:$store.state.isMobile }">
    <img
      v-lazy="data.Photos[0].l"
      :data-srcset="`${data.Photos[0].l} 1900w,
                ${data.Photos[0].m} 1300w,
                ${data.Photos[0].s} 700w`"
      :alt="data.Photos[0].alt" />
    <div class="info">
      <div class="leftInfo">
        <h1>{{ data.Title }}</h1>
        <p v-if="data.Desc" class="desc">{{ data.Desc }}</p>
        <span>
          <p><i class="las la-map-marker" /><b>Lokasi</b></p>
          <p>{{ data.Location }}</p>
        </span>
      </div>
      <div class="rightInfo">
        <p><i class="las la-money-check" /><b>Harga Mulai Dari</b></p>
        <h2>Rp. {{ data.Price }}</h2>
        <p class="margin"><i class="las la-hammer" /><b>Status Konstruksi</b></p>
          <p>{{ data.Status }}</p>
      </div>
    </div>
    <div class="details">
      <h2>Spesifikasi</h2>
      <ul>
        <li><i class="las la-user-friends" /><p>{{ data.Kamar }} Kamar Tidur</p></li>
        <li><i class="las la-expand-arrows-alt" />
          <p>Luas Tanah {{ data.Tanah }}m<sup>2</sup></p>
        </li>
        <li><i class="las la-home" /><p>Luas Bangunan {{ data.Bangunan }}m<sup>2</sup></p></li>
        <li><i class="las la-check" /><p>Taman</p></li>
        <li><i class="las la-check" /><p>Tempat Parkir</p></li>
        <li><i class="las la-shield-alt" /><p>Keamanan 24 Jam</p></li>
      </ul>
      <img
        v-if="type === 'rumah'"
        v-lazy="data.Denah.l"
        :data-srcset="`${data.Denah.l} 1900w,
                  ${data.Denah.m} 1300w,
                  ${data.Denah.s} 700w`"
        :alt="data.Denah.alt" />
        <img
        v-else-if="type === 'ruko'"
        v-lazy="data.DenahRuko.l"
        :data-srcset="`${data.DenahRuko.l} 1900w,
                  ${data.DenahRuko.m} 1300w,
                  ${data.DenahRuko.s} 700w`"
        :alt="data.Denah.alt" />
    </div>
    <div class="gallery" v-if="type === 'rumah'">
      <img
        v-lazy="data.Photos[1].l"
        :data-srcset="`${data.Photos[1].l} 1900w,
                  ${data.Photos[1].m} 1300w,
                  ${data.Photos[1].s} 700w`"
        :alt="data.Photos[1].alt" />
      <img
        v-lazy="data.Photos[2].l"
        :data-srcset="`${data.Photos[2].l} 1900w,
                  ${data.Photos[2].m} 1300w,
                  ${data.Photos[2].s} 700w`"
        :alt="data.Photos[2].alt"/>
      <img
        v-lazy="data.Photos[3].l"
        :data-srcset="`${data.Photos[3].l} 1900w,
                  ${data.Photos[3].m} 1300w,
                  ${data.Photos[3].s} 700w`"
        :alt="data.Photos[3].alt"/>
      <img
        v-lazy="data.Photos[4].l"
        :data-srcset="`${data.Photos[4].l} 1900w,
                  ${data.Photos[4].m} 1300w,
                  ${data.Photos[4].s} 700w`"
        :alt="data.Photos[4].alt" />
    </div>
    <lazy-component>
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
    </lazy-component>
  </div>
</template>

<script>
import style from '../styles/style.json';

export default {
  name: 'Rumah',
  props: {
    id: String,
    type: String,
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
      // [this.data] = a.filter((f) => f.Type.toLowerCase() === this.type);
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
  mounted() {
    this.$root.$emit('mounted');
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

  i {
    margin-right: 5px;
  }

  h1 {
    margin: 0;
    text-align: left;
  }

  img {
    width: 100%;
    height: 70vh;
    min-height: 150px;
    min-width: 320px;
    object-fit: cover;

    @include max-media(mobile) {
      height: auto;
    }
  }

  .info {
    display: grid;
    grid-template-areas:  'left right'
                          'desc desc';
    justify-content: space-between;
    margin: 5px 30px 30px 0;
    min-height: 90px;
    grid-gap: 10px;

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
        margin-left: auto;

        @include max-media(mobile) {
          margin-left: 0;
        }
      }
    }

    .leftInfo {
      grid-area: left;
      display: flex;
      flex-direction: column;
      text-align: left;
      justify-content: space-between;

      @include max-media(mobile) {
        // width: 45%;
      }

      // p {
      //   white-space: nowrap;
      // }

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
    grid-template-areas:  'first first'
                          'second third'
                          'fourth fourth';
    grid-template-columns: 1fr 1fr;
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

      &:nth-child(3) {
        grid-area: third;
      }

      &:nth-child(4) {
        grid-area: fourth;
      }
    }
  }

  .map {
    width: calc(100% - 30px);
    height: 70vh;
    min-height: 150px;
    min-width: 320px;
    margin-right: 30px;
    background-color: #d1d1d1;

    @include max-media(mobile) {
      width: 100%;
      margin-right: 0;
    }
  }
}
</style>
