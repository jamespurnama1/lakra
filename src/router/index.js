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
    path: '/project',
    name: 'project',
    component: () => import('../views/Lokasi.vue'),
  },
  {
    path: '/project/:id',
    name: 'Rumah',
    props: true,
    component: () => import('../views/Rumah.vue'),
  },
  {
    path: '/kpr',
    name: 'KPR',
    component: () => import('../views/KPR.vue'),
  },
  {
    path: '/tentang',
    name: 'Tentang Kami',
    component: () => import('../views/Tentang.vue'),
  },
  {
    path: '/kontak',
    name: 'Kontak Kami',
    component: () => import('../views/Kontak.vue'),
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
