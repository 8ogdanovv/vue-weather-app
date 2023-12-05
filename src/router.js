import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Favorites from '@/views/Favorites.vue';

const base = import.meta.env.MODE === 'production' ? import.meta.env.VITE_BASE_URL : '/';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('./views/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

let isFirstLoad = !history.length;
router.beforeEach((to, from, next) => {
  if (isFirstLoad) {
    isFirstLoad = false;
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
