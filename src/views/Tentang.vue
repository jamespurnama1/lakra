<template>
  <div class="about">
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
    <img :src="require(`../assets/images/H0.jpg`)" />
  </div>
</template>
<script>
export default {
  name: 'About',
  mounted() {
    this.$root.$emit('mounted');
  },
};
</script>
<style lang="scss" scoped>
@import '../styles/index.scss';

  .about {
    margin-top: 10vh;
    will-change: transform;

    h1, p {
      text-align: left;
    }

    p, h2 {
      margin: 0;
    }

    div {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 2fr));
      width: calc(100% - 30px);
      margin-right: 30px;
      margin-bottom: 30px;
      column-count: 2;
      column-gap: 30px;
    }

    img {
      width: calc(100% - 30px);
      margin-right: 30px;
      object-fit: cover;
    }
  }
</style>
