import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '../views/WelcomePage.vue';
import ImcDataPage from '../views/ImcDataPage.vue';
import ResultPage from '../views/ResultPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomePage,
    },
    {
      path: '/imc',
      name: 'imcData',
      component: ImcDataPage,
    },
    {
      path: '/result',
      name: 'result',
      component: ResultPage,
    },
  ],
});

export default router;
