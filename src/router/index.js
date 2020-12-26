import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/lokasi',
    name: 'Lokasi',
    component: () => import(/* webpackChunkName: "lokasi" */ '../views/Lokasi.vue'),
  },
  {
    path: '/kpr',
    name: 'KPR',
    component: () => import(/* webpackChunkName: "KPR" */ '../views/KPR.vue'),
  },
  {
    path: '/kontak',
    name: 'Kontak Kami',
    component: () => import(/* webpackChunkName: "about" */ '../views/Kontak.vue'),
  },
  {
    path: '/tentang',
    name: 'Tentang Kami',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tentang.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
