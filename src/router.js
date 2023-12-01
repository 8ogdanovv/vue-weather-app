import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Favorites from '@/views/Favorites.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Add a beforeEach guard to redirect to Home on initial load
let isFirstLoad = true;
router.beforeEach((to, from, next) => {
  if (isFirstLoad) {
    isFirstLoad = false;
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
