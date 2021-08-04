import Vue from 'vue';
import VueRouter from 'vue-router';
import * as RouteNames from './names';
import * as Pages from './pages';
import * as Paths from './paths';
import * as Layouts from '../layouts/layouts';
import { auth } from '../plugins/firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: Paths.SIGN_IN,
    name: RouteNames.SIGN_IN,
    component: Pages.SIGN_IN,
    meta: {
      layout: Layouts.SIGN_IN_LAYOUT,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

window.popStateDetected = false;
window.addEventListener('popstate', () => {
  window.popStateDetected = true;
});

router.beforeEach((to, _from, next) => {
  const isBackButton = window.popStateDetected;
  window.popStateDetected = false;

  if (isBackButton && to.name !== RouteNames.SIGN_IN && !auth.currentUser) {
    next(Pages.SIGN_IN);
  } else {
    next();
  }
});

export default router;
