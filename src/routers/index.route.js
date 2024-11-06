import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@layout/dashboard.vue'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('@pages/dashboard.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
