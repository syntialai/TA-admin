import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import signIn from './modules/sign-in';
import students from './modules/students';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    signIn,
    students,
  },
});
