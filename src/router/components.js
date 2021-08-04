/**
 * Main
 */
// eslint-disable-next-line import/prefer-default-export
export const SNACKBAR = () => import(
  /* webpackChunkName: "snackbar" */ '@/components/Main/Snackbar.vue'
);
export const NAVIGATION_DRAWER = () => import(
  /* webpackChunkName: "navigation-drawer" */ '@/components/Main/NavigationDrawer.vue'
);
