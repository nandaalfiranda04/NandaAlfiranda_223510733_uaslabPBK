import { createRouter, createWebHistory } from 'vue-router';
import home from '../components/container.vue';
import homeview from '../components/footer.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/footer',
    name: 'footer',
    component: homeview,
  },
  // Other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
