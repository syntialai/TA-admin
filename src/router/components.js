/**
 * Main
 */
export const NAVIGATION = () => import(
  /* webpackChunkName: "navigation" */ '@/components/Main/Navigation.vue'
);
export const NAVIGATION_DRAWER = () => import(
  /* webpackChunkName: "navigation-drawer" */ '@/components/Main/NavigationDrawer.vue'
);
export const SNACKBAR = () => import(
  /* webpackChunkName: "snackbar" */ '@/components/Main/Snackbar.vue'
);
