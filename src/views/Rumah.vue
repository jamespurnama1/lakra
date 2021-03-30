<template>
  <div id="rumah" :class="{ remMargin:$store.state.isMobile }">
    <img
      v-lazy="data[`Banner Image ${tipe}`][0].thumbnails.full.url"
      :data-srcset="` ${data[`Banner Image ${tipe}`][0].thumbnails.full.url} 1900w,
                      ${data[`Banner Image ${tipe}`][0].thumbnails.large.url} 700w`"
      alt="" />
    <div class="info">
      <div class="leftInfo">
        <h1>{{ data.Name }}</h1>
        <p v-if="data[`Deskripsi ${tipe}`]" class="desc">{{ data[`Deskripsi ${tipe}`] }}</p>
        <span>
          <p><i class="las la-map-marker" /><b>Lokasi</b></p>
          <p>{{ data.Lokasi }}</p>
        </span>
      </div>
      <div class="rightInfo">
        <p><i class="las la-money-check" /><b>Harga Mulai Dari</b></p>
        <h2>Rp. {{ rupiah }}</h2>
        <p class="margin"><i class="las la-hammer" /><b>Status Konstruksi</b></p>
          <p>{{ data[`Status ${tipe}`] }}</p>
      </div>
    </div>
    <div class="details">
      <h2>Spesifikasi</h2>
      <ul>
        <li v-if="tipe === 'Rumah'">
          <i class="las la-user-friends" />
          <p>{{ data.Kamar }} Kamar Tidur</p>
        </li>
        <li>
          <i class="las la-expand-arrows-alt" />
          <p>Luas Tanah {{ data[`Luas Tanah ${tipe}`] }}m<sup>2</sup></p>
        </li>
        <li>
          <i class="las la-home" />
          <p>Luas Bangunan {{ data[`Luas Bangunan ${tipe}`] }}m<sup>2</sup></p>
        </li>
        <li v-if="data.Taman">
          <i class="las la-check" />
          <p>Taman</p>
        </li>
        <li v-if="data['Tempat Parkir']">
          <i class="las la-check" />
          <p>Tempat Parkir</p>
        </li>
        <li v-if="data['Keamanan 24 Jam']">
          <i class="las la-shield-alt" />
          <p>Keamanan 24 Jam</p>
        </li>
      </ul>
      <img
        v-lazy="data[`Denah ${tipe}`][0].thumbnails.full.url"
        :data-srcset="` ${data[`Denah ${tipe}`][0].thumbnails.full.url} 1900w,
                        ${data[`Denah ${tipe}`][0].thumbnails.large.url} 700w`"
        alt="" />
    </div>
    <div class="gallery" v-if="data[`Gallery Image ${tipe}`]">
      <img
        v-for="(img, i) in data[`Gallery Image ${tipe}`]" :key="i"
        v-lazy="img.thumbnails.full.url"
        :data-srcset="` ${img.thumbnails.full.url} 1900w,
                        ${img.thumbnails.large.url} 700w`"
        alt="" />
    </div>
    <GmapMap
      :center="pos"
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
        :position="pos"
        :opened="true"
      />
      <GmapMarker
        :position="pos"
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
      [this.data] = this.$store.state.data.filter(
        (f) => f.Name.toLowerCase() === this.id,
      );
      // eslint-disable-next-line max-len
      if (this.data === undefined || this.data.length === 0 || !this.data.Tipe.includes(this.tipe)) {
        this.$router.push('/404');
      }
      this.infoOptions.content = `<strong>${this.data.Name}</strong><br>${this.data.Alamat}`;
    },
  },
  computed: {
    tipe() {
      return this.type.charAt(0).toUpperCase() + this.type.slice(1);
    },
    pos() {
      const pos = {
        lat: parseFloat(this.data['Lat, Long'].split(',', 1)[0], 10),
        lng: parseFloat(this.data['Lat, Long'].substr(this.data['Lat, Long'].lastIndexOf(',') + 1), 10),
      };
      return pos;
    },
    rupiah() {
      const rupiah = this.data[`Harga ${this.tipe}`].toLocaleString();
      return rupiah;
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
      margin: 5px 30px 0 30px;
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
      margin: 0 30px 30px 30px;
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
                          'fourth fourth'
                          'fifth sixth'
                          'seventh seventh';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    flex-wrap: wrap;
    margin-right: 30px;
    margin-bottom: 30px;
    grid-gap: 30px;
    overflow: hidden;

    @include max-media(mobile) {
      margin: 0 30px 30px 30px;
      grid-template-columns: 1fr;
      grid-template-areas:'first'
                          'second'
                          'third'
                          'fourth'
                          'fifth'
                          'sixth'
                          'seventh';
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
      &:nth-child(5) {
        grid-area: fifth;
      }
      &:nth-child(6) {
        grid-area: sixth;
      }
      &:nth-child(7) {
        grid-area: seventh;
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
      width: initial;
      margin: 0 30px;
    }
  }
}
</style>
