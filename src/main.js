import Vue from 'vue';
import * as GmapVue from 'gmap-vue';
import VueNumeric from 'vue-numeric';
import VueProgressBar from 'vue-progressbar';
import VueLazyload from 'vue-lazyload';
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

const loadimage = require('@/assets/images/loading.gif');
const errorimage = require('@/assets/images/loading.gif');

Vue.use(GmapVue, {
  load: {
    key: 'AIzaSyCVnPos21-glyEhbMuR1_Bz5rWK69X2pn0',
    libraries: 'places',
  },
  installComponents: true,
})
  .use(VueNumeric)
  .use(VueLazyload, {
    lazyComponent: true,
    error: errorimage,
    loading: loadimage,
  })
  .use(VueProgressBar, options);

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find((r) => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags);
  // eslint-disable-next-line max-len
  // const previousNearestWithMeta = from.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el) => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map((tagDef) => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach((key) => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    .forEach((tag) => document.head.appendChild(tag));

  next();
  return null;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
}).$mount('#app');
