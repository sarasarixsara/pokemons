import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('../views/Welcome.vue'),
    },
    {
      path: '/pokemones',
      name: 'pokemones',
      component: () => import('../views/List.vue'),
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/List.vue'),
    },
  ],
})
export default router
