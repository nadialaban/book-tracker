import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import useUserStore from "@/stores/user.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LogInView.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  const user = useUserStore();

  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !user.isAuthorised) {
    return '/login';
  }

  // redirect to home page if logged in and trying to access a login page
  const loginPages = ['/login'];
  const isLoginPage = loginPages.includes(to.path);

  if (isLoginPage && user.isAuthorised) {
    return '/';
  }

});

export default router
