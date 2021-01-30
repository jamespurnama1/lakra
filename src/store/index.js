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
      try {
        const result = await axios.get(
          'https://v1.nocodeapi.com/jamespurnama1/airtable/uZXOlhWVbiythiZt',
          {
            params: {
              tableName: 'Main',
              view: 'Live Properties',
            },
          },
        );
        const data = result.data.records.map((item) => ({
          id: item.id,
          ...item.fields,
        }));
        commit('getData', data);
        return Promise.resolve();
      } catch (err) {
        console.log(err, 'second source!');
        try {
          const result = await axios.get('https://api.airtable.com/v0/appp1lDFDdnHyUpHK/Main?view=Live%20Properties', {
            headers: { Authorization: 'Bearer keyoKJ6yU8YxauBPy' },
          });
          const data = result.data.records.map((item) => ({
            id: item.id,
            ...item.fields,
          }));
          commit('getData', data);
          return Promise.resolve();
        } catch (error) {
          console.log(error, 'No more backups sire...');
          return Promise.reject();
        }
      }
    },
    // async getData(context) {
    //   const result = await axios.get('https://api.airtable.com/v0/appp1lDFDdnHyUpHK/Main?view=Live%20Properties', {
    //     headers: { Authorization: 'Bearer keyoKJ6yU8YxauBPy' },
    //   });
    //   const data = result.data.records.map((item) => ({
    //     id: item.id,
    //     ...item.fields,
    //   }));
    //   context.commit('getData', data);
    //   return Promise.resolve();
    // },
  },
  modules: {},
});
