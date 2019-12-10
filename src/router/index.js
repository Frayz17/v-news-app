import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/sport',
    name: 'sport',
    component: () => import('../views/Sport.vue')
  },
  {
    path: '/art',
    name: 'art',
    component: () => import('../views/Art.vue')
  },
  {
    path: '/political',
    name: 'political',
    component: () => import('../views/Political.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
