<template>
<div>
  <div v-for="house in houses" :key="house">
    <h2>test</h2>
  </div>
</div>
</template>

<script>
export default {
  name: 'Listing',
  data() {
    return {
      houses: [1, 2, 3, 4, 5, 6],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
