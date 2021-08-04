import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import teacherCredentials from './modules/teacher-credentials';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    teacherCredentials,
  },
});
