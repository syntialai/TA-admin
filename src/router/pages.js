/**
 * Pages
 */
const SIGN_IN = () => import('../views/SignIn/SignIn.vue');
const TEACHER_CREDENTIALS = () => import(/* webpackChunkName: "teacher-credentials" */ '../views/TeacherCredentials/TeacherCredentials.vue');

/**
 * Layouts
 */
const LAYOUT_DEFAULT = () => import('../layouts/template/DefaultLayout.vue');
const LAYOUT_SIGN_IN = () => import('../layouts/template/SignInLayout.vue');

export {
  SIGN_IN,
  TEACHER_CREDENTIALS,
  LAYOUT_DEFAULT,
  LAYOUT_SIGN_IN,
};
