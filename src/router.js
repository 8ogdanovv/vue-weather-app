import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'; // Create a Home component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('@/views/Favorites.vue'), // Create a Favorites component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
