<template>
<div id="grid">
  <div @click="route(house.Title)" v-for="(house, i) in $store.state.houses" :key="i" class="house">
    <div class="img">
      <img :src="require(`../assets/images/H${i}.jpg`)" />
    </div>
    <div class="info">
      <div>
        <h2 class="title">{{ house.Title }}</h2>
        <p><i class="las la-map-marker"></i>{{ house.Location }}</p>
      </div>
      <h2 class="price">Rp. {{ house.Price }}</h2>
    </div>
    <p>{{ house.Desc }}</p>
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
  methods: {
    route(i) {
      this.$router.push({ path: `/projects/${i.toLowerCase()}` });
    },
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
