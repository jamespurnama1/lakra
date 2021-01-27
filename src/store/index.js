/* eslint-disable global-require */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    windowWidth: 1920,
    windowHeight: 1080,
    opened: false,
    isMobile: false,
    houses: [
      {
        Title: 'Lakrasamana',
        Location: 'Raden Saleh, Depok',
        Status: 'Dalam Pengembangan',
        Price: '880.000.000',
        Desc: '4 Unit Rumah. 6 Unit Ruko.',
        Tanah: 60,
        Bangunan: 72,
        Kamar: 2,
        Marker: {
          position: {
            lat: -6.41457487118613,
            lng: 106.84184069107874,
          },
          infoText: '<strong>Lakrasamana</strong><br>Jl. Raden Saleh No. 29',
        },
        Denah: {
          s: require('../assets/images/lakrasamana/denah-600w.jpg'),
          m: require('../assets/images/lakrasamana/denah-1200w.jpg'),
          l: require('../assets/images/lakrasamana/denah-1800w.jpg'),
          alt: '',
        },
        DenahRuko: {
          s: require('../assets/images/lakrasamana/denahRuko-600w.jpg'),
          m: require('../assets/images/lakrasamana/denahRuko-1200w.jpg'),
          l: require('../assets/images/lakrasamana/denahRuko-1800w.jpg'),
          alt: '',
        },
        Photos: [
          {
            s: require('../assets/images/lakrasamana/H0-600w.jpg'),
            m: require('../assets/images/lakrasamana/H0-1200w.jpg'),
            l: require('../assets/images/lakrasamana/H0-1800w.jpg'),
            alt: '',
          },
          {
            s: require('../assets/images/lakrasamana/H2-600w.jpg'),
            m: require('../assets/images/lakrasamana/H2-1200w.jpg'),
            l: require('../assets/images/lakrasamana/H2-1800w.jpg'),
            alt: '',
          },
          {
            s: require('../assets/images/lakrasamana/H1-600w.jpg'),
            m: require('../assets/images/lakrasamana/H1-1200w.jpg'),
            l: require('../assets/images/lakrasamana/H1-1800w.jpg'),
            alt: '',
          },
          {
            s: require('../assets/images/lakrasamana/H3-600w.jpg'),
            m: require('../assets/images/lakrasamana/H3-1200w.jpg'),
            l: require('../assets/images/lakrasamana/H3-1800w.jpg'),
            alt: '',
          },
          {
            s: require('../assets/images/lakrasamana/Z3-600w.jpg'),
            m: require('../assets/images/lakrasamana/Z3-1200w.jpg'),
            l: require('../assets/images/lakrasamana/Z3-1800w.jpg'),
            alt: '',
          },
        ],
      },
    ],
  },
  mutations: {
    setWidth(state, w) {
      state.windowWidth = w;
    },
    setHeight(state, h) {
      state.windowHeight = h;
    },
    toggleNav(state) {
      state.opened = !state.opened;
    },
    isMobile(state, b) {
      state.isMobile = b;
    },
  },
  getters: {
    // getWidth: (state) => state.windowWidth,
  },
  actions: {},
  modules: {},
});
