<template>
<div id="grid">
  <div @click="$parent.$emit('selected', house)"
  v-for="(house, i) in $store.state.data" :key="i" class="house">
    <div class="img">
      <img
        v-lazy="house.Image[0].thumbnails.full.url"
        :data-srcset="` ${house.Image[0].thumbnails.full.url} 1900w,
                        ${house.Image[0].thumbnails.large.url} 700w`"
        alt="" />
    </div>
    <div class="info">
      <div>
        <h2 class="title">{{ house.Name }}</h2>
        <p><i class="las la-map-marker"></i>{{ house.Lokasi }}</p>
      </div>
      <h2
      v-if="house['Harga Rumah']"
      class="price">
        Rp. {{ house['Harga Rumah'].toLocaleString() }}
      </h2>
      <h2
      v-else-if="house['Harga Ruko']"
      class="price">
        Rp. {{ house['Harga Ruko'].toLocaleString() }}
      </h2>
    </div>
    <p>{{ house['Deskripsi General'] }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Listing',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';

#grid {
  display: grid;
  grid-template-columns: 50% 50%;

  .title {
    text-align: left;
  }

  .house {
    position: relative;
    margin-right: 5%;
    margin-bottom: 5%;
    cursor: pointer;

    &:hover {
      img {
        transform: scale(1.3);
      }
    }
    .img {
      position: relative;
      width: 100%;
      height: 45vw;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform .3s ease;

      }
    }

    .info {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;

      @include max-media(small-tablet) {
        flex-direction: column;
      }
    }

    h2 {
      margin: 0;
      font-weight: 300;
      text-align: left;

      &.price {
        margin-top: 5px;
      }
    }

    p {
      text-align: left;
      margin: 0;
    }
  }
}
</style>
