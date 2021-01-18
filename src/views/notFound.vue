<template>
  <div id="notFound" :class="{ remMargin:$store.state.isMobile }">
    <h1>Halaman tidak ada.</h1>
    <router-link to="/">
      <button>Home</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  mounted() {
    this.$root.$emit('mounted');
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';

#notFound {
  margin-top: 10vh;
  margin-right: 30px;
  will-change: transform;
  display: flex;
  flex-direction: column;
  min-height: 75vh;
  align-items: center;
  justify-content: center;

  @include max-media(mobile) {
    margin: 0;
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

      &:focus {
        outline: none;
      }

      a {
        color: white;
        text-decoration: none;

        &:visited {
          color: white;
        }
      }

      &:hover {
        background-color: $dark-green;
      }
    }
  }
</style>
