import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navWidth: 200,
    windowWidth: 1920,
    houses: [
      {
        Title: 'Lakrasamana',
        Location: 'Raden Saleh, Depok',
        Date: 'Dec 2020',
        Price: '404.000.000',
        Desc:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        Marker: {
          position: {
            lat: -6.405181627778632,
            lng: 106.84120278009165,
          },
          infoText: '<strong>Lakrasamana</strong><br>Jl. Raden Saleh I No. 34',
        },
      },
    ],
  },
  mutations: {
    setWidth(state, w) {
      state.windowWidth = w;
    },
    setNavWidth(state, w) {
      state.navWidth = w;
    },
  },
  getters: {
    // getWidth: (state) => state.windowWidth,
    // getNavWidth: (state) => state.navWidth,
  },
  actions: {},
  modules: {},
});
