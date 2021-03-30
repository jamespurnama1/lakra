<template>
  <div class="about" :class="{ remMargin:$store.state.isMobile }">
    <h1>Tentang Kami</h1>
    <div>
      <p>
        Lakra adalah perusahaan property developer yang berbasis di Jakarta,
        kami menyediakan hunian premium yang inovatif dan berkualitas bagi client.
        Client adalah prioritas kami dalam segala aspek pengembangan. Dengan itu,
        kami menghadirkan arsitek profesional, kontraktor, dan konsultan terkait untuk
        menjamin kualitas dan kenyamanan hunian bagi client.
      </p>
      <p>
        Kami percaya hunian merupakan hal dasar bagi manusia bertumbuh sebagai individu;
        hunian yang nyaman dan berkualitas, menstimulasi nilai yang baik dalam
        proses perkembangan individu.
        <br>
        Build home, build values.
      </p>
    </div>
    <img
      v-lazy="photos.l"
      :data-srcset="`${photos.l} 1900w,
                ${photos.m} 1300w,
                ${photos.s} 700w`"
      alt="Lakrasamana" />
  </div>
</template>
<script>
/* eslint-disable global-require */
export default {
  name: 'About',
  mounted() {
    this.$root.$emit('mounted');
  },
  data() {
    return {
      photos: {
        s: require('../assets/images/H0-600w.jpg'),
        m: require('../assets/images/H0-1200w.jpg'),
        l: require('../assets/images/H0-1800w.jpg'),
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import '../styles/index.scss';

  .about {
    margin-top: 10vh;
    will-change: transform;

    @include max-media(mobile) {
      margin: 10vh 30px 0 30px;
    }

    h1, p {
      text-align: left;
    }

    p, h2 {
      margin: 0;
    }

    div {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 2fr));
      grid-gap: 15px;
      width: calc(100% - 30px);
      margin-right: 30px;
      margin-bottom: 30px;

      @include max-media(mobile) {
        grid-template-columns: minmax(0, 2fr);
        margin-right: 0;
      }
    }

    img {
      width: calc(100% - 30px);
      height: auto;
      margin-right: 30px;
      object-fit: cover;

      @include max-media(mobile) {
        margin-right: 0;
        width: 100%;
        height: auto;
      }
    }
  }
</style>
