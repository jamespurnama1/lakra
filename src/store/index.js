import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navWidth: 200,
    windowWidth: 1920,
    opened: false,
    houses: [
      {
        Title: 'Lakrasamana',
        Location: 'Raden Saleh, Depok',
        Status: 'Selesai',
        Price: '880.000.000',
        Desc:
          '',
        Tanah: 60,
        Bangunan: 72,
        Kamar: 2,
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
    toggleNav(state) {
      state.opened = !state.opened;
    },
  },
  getters: {
    // getWidth: (state) => state.windowWidth,
    // getNavWidth: (state) => state.navWidth,
  },
  actions: {},
  modules: {},
});
