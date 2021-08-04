/**
 * Pages
 */
const SIGN_IN = () => import(/* webpackChunkName: "sign-in" */ '../views/SignIn/SignIn.vue');

/**
 * Layouts
 */
const LAYOUT_DEFAULT = () => import('../layouts/template/DefaultLayout.vue');
const LAYOUT_SIGN_IN = () => import('../layouts/template/SignInLayout.vue');

export {
  SIGN_IN,
  LAYOUT_DEFAULT,
  LAYOUT_SIGN_IN,
};
