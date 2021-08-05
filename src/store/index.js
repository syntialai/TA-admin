import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import teacherCredentials from './modules/teacher-credentials';
import feedback from './modules/feedback';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    teacherCredentials,
    feedback,
  },
});
