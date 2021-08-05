/* eslint-disable no-shadow */
import { getStudentsData, updateUser } from '@/api/data/user/user.api';
import * as Types from '@/store/types';
// import * as Messages from '@/config/message-constants';

const namespaced = true;

const state = {
  studentInfo: null,
};

const actions = {
  resetState({ commit }) {
    commit(Types.RESET_STUDENTS_STATE);
  },

  async getStudentsDataFromApi({ commit }) {
    const studentInfo = await getStudentsData();
    commit(Types.SET_STUDENT_INFO, studentInfo);
  },

  async updateStudent({ dispatch }, { user, deactivated }) {
    const newUserData = { ...user };
    newUserData.deactivated = deactivated;
    dispatch('app/setIsLoading', null, { root: true });
    await updateUser(newUserData.id, newUserData);
    await dispatch('getStudentsDataFromApi');
    dispatch('app/setIsNotLoading', null, { root: true });
  },
};

const getters = {
  studentInfo: (state) => state.studentInfo,
};

const mutations = {
  [Types.RESET_STUDENTS_STATE](state) {
    state.studentInfo = null;
  },
  [Types.SET_STUDENT_INFO](state, studentInfo) {
    state.studentInfo = studentInfo;
  },
};

export default {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
