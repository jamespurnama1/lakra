<template>
  <div id="select" :class="{ remMargin:$store.state.isMobile }">
    <i @click="$emit('selected', null)" class="las la-times" />
    <video
      :src="require(`@/assets/images/${selected.Title.toLowerCase()}/reel.mp4`)"
      autoplay muted preload loop />
    <h1>{{ selected.Title }}</h1>
    <p class="loc"><i class="las la-map-marker" />{{ selected.Location }}</p>
    <span>
      <button
        @click="choice('rumah')"
        tag="button">
        <p>
          Rumah
        </p>
      </button>
      <button
        @click="choice('ruko')">
        <p>
          Ruko
        </p>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    selected: Object,
  },
  methods: {
    choice(i) {
      this.$emit('selected', null);
      this.$router.push({ path: `/projects/${this.selected.Title.toLowerCase()}/${i}` });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

#select {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 15;
  background-color: $green;
  will-change: opacity;
  box-sizing: border-box;
  padding: 50px;

  @include max-media(mobile) {
    padding: 50% 20px;
  }

  h1 {
    color: white;
    align-self: flex-start;
    margin: 0;

    // @include max-media(mobile) {
    //   margin: 10px auto;
    // }
  }

  .loc {
    align-self: flex-start;
    color: white;
    margin: 0;
    margin-bottom: 5px;
  }

  .la-times {
    position: absolute;
    color: white;
    top: 30px;
    right: 30px;
    font-size: 2em;
    cursor: pointer;
  }

  video {
    margin: auto;
    width: 100%;
    height: auto;

    @include max-media(mobile) {
      width: 100%;
    }
  }

  span {
    display: flex;
    width: 50%;
    margin-top: 5px;
    margin-right: auto;
    height: 3em;

    // @include max-media(mobile) {
    //   margin: 0 auto;
    //   width: 75%;
    // }

    button {
      background-color: $green;
      color: white;
      border: 2px solid white;
      padding: 10px 50px;
      transition: background-color .3s ease;
      cursor: pointer;

      &:first-child {
        margin-right: 15px;
      }

      &:focus {
        outline: none;
      }

      p {
        color: white;
        text-decoration: none;
        margin: 0;

        &:visited {
          color: white;
        }
      }

      &:hover {
        background-color: white;

        p {
          color: $dark-green;
        }
      }
    }
  }
}
</style>
