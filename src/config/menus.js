import * as RouteNames from '@/router/names';

// eslint-disable-next-line import/prefer-default-export
export const getMainMenus = () => [
  {
    icon: 'mdi-account',
    title: RouteNames.STUDENTS,
  },
  {
    icon: 'mdi-account',
    title: RouteNames.TEACHERS,
  },
  {
    icon: 'mdi-message-bulleted',
    title: RouteNames.FEEDBACKS,
  },
  {
    icon: 'mdi-lock',
    title: RouteNames.TEACHER_CREDENTIALS,
  },
];
