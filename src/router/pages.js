/**
 * Pages
 */
const SIGN_IN = () => import('../views/SignIn/SignIn.vue');
const STUDENTS = () => import('../views/Students/Students.vue');
const TEACHERS = () => import('../views/Teachers/Teachers.vue');
const TEACHER_CREDENTIALS = () => import(/* webpackChunkName: "teacher-credentials" */ '../views/TeacherCredentials/TeacherCredentials.vue');

/**
 * Layouts
 */
const LAYOUT_DEFAULT = () => import('../layouts/template/DefaultLayout.vue');
const LAYOUT_SIGN_IN = () => import('../layouts/template/SignInLayout.vue');
const FEEDBACKS = () => import('../views/Feedback/Feedbacks.vue');

export {
  SIGN_IN,
  TEACHER_CREDENTIALS,
  LAYOUT_DEFAULT,
  LAYOUT_SIGN_IN,
  STUDENTS,
  TEACHERS,
  FEEDBACKS,
};
