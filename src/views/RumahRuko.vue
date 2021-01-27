<template>
  <div id="select" :class="{ remMargin:$store.state.isMobile }">
    <i @click="$emit('selected', null)" class="las la-times" />
    <div class="container">
      <video
        :src="require(`@/assets/images/${selected.Title.toLowerCase()}/reel.mp4`)"
        autoplay muted preload loop playsinline />
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
      this.$router.push({ path: `/projects/${i}/${this.selected.Title.toLowerCase()}` });
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
  z-index: 15;
  background-color: $green;
  will-change: opacity;
  display: flex;
  justify-content: center;
  align-items: center;

  .la-times {
    position: absolute;
    color: white;
    top: 30px;
    right: 30px;
    font-size: 2em;
    cursor: pointer;
  }

  .container {
    position: absolute;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 50px;
    width: fit-content;
    max-height: 100vh;

    @include max-media(mobile) {
      padding: 0 20px;
    }

    h1 {
      color: white;
      align-self: flex-start;
      margin: 0;
    }

    .loc {
      align-self: flex-start;
      color: white;
      margin: 0;
      margin-bottom: 5px;
    }

    video {
      margin: auto 0 0 0;
      max-height: 70vh;
    }

    span {
      display: flex;
      width: 50%;
      margin: 5px auto auto 0;
      height: 3em;

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
}
</style>
