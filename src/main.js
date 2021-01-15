import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueNumeric from 'vue-numeric';
import VueProgressBar from 'vue-progressbar';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import 'line-awesome/dist/line-awesome/css/line-awesome.css';

const options = {
  color: '#80876f',
  failedColor: '#c74a4a',
  thickness: '5px',
};

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCVnPos21-glyEhbMuR1_Bz5rWK69X2pn0',
    libraries: 'places',
  },
  installComponents: true,
})
  .use(VueNumeric)
  .use(VueProgressBar, options);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
