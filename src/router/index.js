import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import asyncRoutes from './asyncRoutes';

Vue.use(VueRouter);

const Lokasi = () => import('../views/Lokasi.vue');
const Rumah = () => import('../views/Rumah.vue');
const KPR = () => import('../views/KPR.vue');
const Tentang = () => import('../views/Tentang.vue');
const Kontak = () => import('../views/Kontak.vue');
const notFound = () => import('../views/notFound.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: asyncRoutes.Home,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Lokasi,
    meta: {
      title: 'Projects - Lakra',
      metaTags: [
        {
          name: 'description',
          content: 'All projects by Lakra.',
        },
        {
          property: 'og:description',
          content: 'All projects by Lakra.',
        },
        {
          property: 'og:title',
          content: 'Projects - Lakra',
        },
        {
          property: 'og:url',
          content: 'https://lakra.id/projects',
        },
        {
          property: 'twitter:description',
          content: 'All projects by Lakra.',
        },
        {
          property: 'twitter:title',
          content: 'Projects - Lakra',
        },
        {
          property: 'twitter:url',
          content: 'https://lakra.id/projects',
        },
      ],
    },
  },
  {
    path: '/projects/:id',
    name: 'Rumah',
    props: true,
    component: Rumah,
    meta: {
      title: 'Lakrasamana - Lakra',
      metaTags: [
        {
          name: 'description',
          content: 'Raden Saleh, Depok. 4 unit rumah. 6 unit ruko.',
        },
        {
          property: 'og:description',
          content: 'Raden Saleh, Depok. 4 unit rumah. 6 unit ruko.',
        },
        {
          property: 'og:title',
          content: 'Lakrasamana - Lakra',
        },
        {
          property: 'og:url',
          content: 'https://lakra.id/projects/lakrasamana',
        },
        {
          property: 'twitter:description',
          content: 'Raden Saleh, Depok. 4 unit rumah. 6 unit ruko.',
        },
        {
          property: 'twitter:title',
          content: 'Lakrasamana - Lakra',
        },
        {
          property: 'twitter:url',
          content: 'https://lakra.id/projects/lakrasamana',
        },
      ],
    },
  },
  {
    path: '/kpr',
    name: 'KPR',
    component: KPR,
    meta: {
      title: 'KPR - Lakra',
      metaTags: [
        {
          name: 'description',
          content: 'Cermati & hitung KPR dengan kalkulator.',
        },
        {
          property: 'og:description',
          content: 'Cermati & hitung KPR dengan kalkulator.',
        },
        {
          property: 'og:title',
          content: 'KPR - Lakra',
        },
        {
          property: 'og:url',
          content: 'https://lakra.id/kpr',
        },
        {
          property: 'twitter:description',
          content: 'Cermati & hitung KPR dengan kalkulator.',
        },
        {
          property: 'twitter:title',
          content: 'KPR - Lakra',
        },
        {
          property: 'twitter:url',
          content: 'https://lakra.id/kpr',
        },
      ],
    },
  },
  {
    path: '/tentang',
    name: 'Tentang Kami',
    component: Tentang,
    meta: {
      title: 'Tentang Kami - Lakra',
      metaTags: [
        {
          name: 'description',
          content: 'Tentang Lakra & filosofi Lakra.',
        },
        {
          property: 'og:description',
          content: 'Tentang Lakra & filosofi Lakra.',
        },
        {
          property: 'og:title',
          content: 'Tentang Kami - Lakra',
        },
        {
          property: 'og:url',
          content: 'https://lakra.id/tentang',
        },
        {
          property: 'twitter:description',
          content: 'Tentang Lakra & filosofi Lakra.',
        },
        {
          property: 'twitter:title',
          content: 'Tentnag Kami - Lakra',
        },
        {
          property: 'twitter:url',
          content: 'https://lakra.id/tentang',
        },
      ],
    },
  },
  {
    path: '/kontak',
    name: 'Kontak Kami',
    component: Kontak,
    meta: {
      title: 'Kontak Kami - Lakra',
      metaTags: [
        {
          name: 'description',
          content: 'Hubungi kami di WhatsApp, Instagram, & e-mail.',
        },
        {
          property: 'og:description',
          content: 'Hubungi kami di WhatsApp, Instagram, & e-mail.',
        },
        {
          property: 'og:title',
          content: 'Kontak Kami - Lakra',
        },
        {
          property: 'og:url',
          content: 'https://lakra.id/kontak',
        },
        {
          property: 'twitter:description',
          content: 'Hubungi kami di WhatsApp, Instagram, & e-mail.',
        },
        {
          property: 'twitter:title',
          content: 'Kontak Kami - Lakra',
        },
        {
          property: 'twitter:url',
          content: 'https://lakra.id/kontak',
        },
      ],
    },
  },
  {
    path: '/404',
    name: 'Not Found',
    component: notFound,
    meta: {
      title: 'Projects - Lakra',
    },
  },
  {
    path: '*',
    redirect: '/404',
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
