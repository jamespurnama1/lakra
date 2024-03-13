/* eslint-disable global-require */
// import request from '@/utils/request';
import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    windowWidth: 1920,
    windowHeight: 1080,
    opened: false,
    isMobile: false,
    data: [],
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
    getData(state, i) {
      state.data = i;
    },
  },
  actions: {
    async getData({ commit }) {
      const preview = window.location.host.split('.')[0] === 'preview';
      try {
        const result = await axios.get(
          `https://api.airtable.com/v0/appp1lDFDdnHyUpHK/Main?view=${
            preview ? 'Properties%20in%20Preview%20Mode' : 'Live%20Properties'
          }`,
          {
            headers: { Authorization: `Bearer ${process.env.VUE_APP_AIRTABLE_TOKEN}` },
          },
        );
        const data = result.data.records.map((item) => ({
          id: item.id,
          ...item.fields,
        }));
        commit('getData', data);
        return Promise.resolve();
      } catch (error) {
        return Promise.reject();
      }
    },
  },
  modules: {},
});
