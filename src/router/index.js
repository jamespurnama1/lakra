import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const Lokasi = () => import('../views/Lokasi.vue');
const Rumah = () => import('../views/Rumah.vue');
const KPR = () => import('../views/KPR.vue');
const Tentang = () => import('../views/Tentang.vue');
const Kontak = () => import('../views/Kontak.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/project',
    name: 'project',
    component: Lokasi,
  },
  {
    path: '/project/:id',
    name: 'Rumah',
    props: true,
    component: Rumah,
  },
  {
    path: '/kpr',
    name: 'KPR',
    component: KPR,
  },
  {
    path: '/tentang',
    name: 'Tentang Kami',
    component: Tentang,
  },
  {
    path: '/kontak',
    name: 'Kontak Kami',
    component: Kontak,
  },
  {
    path: '/404',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: 'smooth' };
  },
});

export default router;
