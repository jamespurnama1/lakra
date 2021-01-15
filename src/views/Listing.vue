<template>
<div id="grid">
  <div @click="route(house.Title)" v-for="(house, i) in $store.state.houses" :key="i" class="house">
    <h2 class="title">{{ house.Title }}</h2>
    <div class="img">
      <div class="overlay" />
      <img :src="require(`../assets/images/H${i}.jpg`)" />
    </div>
    <div class="info">
      <div>
        <p><i class="las la-calendar"></i>{{ house.Location }}</p>
      </div>
      <h2>Rp. {{ house.Price }}</h2>
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

          &:hover {
          transform: scale(1.3);
        }
      }

      // .overlay {
      //   position: absolute;
      //   left: 50%;
      //   top: 50%;
      //   transform: translate(-50%, -50%);
      //   width: 100%;
      //   height: 100%;
      //   background-color: $green;
      //   opacity: 0;
      //   transition: all .5s ease;
      //   pointer-events: none;

      //   &:hover {
      //     opacity: 100%;
      //     background-color: rgba(128, 135, 111, 0.5);
      //   }
      // }
    }

    .info {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
    }

    h2 {
      margin: 0;
      font-weight: 200;
    }

    p {
      text-align: left;
      margin: 0;
    }
  }
}
</style>
