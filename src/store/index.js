import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navWidth: 200,
    scroll: null,
    houses: [
      {
        Title: 'Lakrasamana',
        Location: 'Raden Saleh, Depok',
        Date: 'Dec 2020',
        Price: '404.000.000',
        Desc:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      {
        Title: 'Lakralokasi',
        Location: 'Seyegan, Kab. Sleman',
        Date: '02 Dec 2021',
        Price: '404.000.000',
        Desc:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      {
        Title: 'Lakratempat',
        Location: 'Seyegan, Kab. Sleman',
        Date: '02 Dec 2021',
        Price: '404.000.000',
        Desc:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
    ],
  },
  mutations: {
    setNavWidth(state, w) {
      state.navWidth = w;
    },
    killScroll(state) {
      state.scroll = 'kill';
    },
    initScroll(state) {
      state.scroll = 'init';
    },
    resetScroll(state) {
      state.scroll = null;
    },
  },
  getters: {
    getNavWidth: (state) => state.navWidth,
  },
  actions: {},
  modules: {},
});
