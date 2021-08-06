/* eslint-disable no-shadow */
import { getTeachersData, updateUser } from '@/api/data/user/user.api';
import * as Types from '@/store/types';
// import * as Messages from '@/config/message-constants';

const namespaced = true;

const state = {
  teacherInfo: [],
};

const actions = {
  resetState({ commit }) {
    commit(Types.RESET_TEACHERS_STATE);
  },

  async getTeachersDataFromApi({ commit }) {
    const teacherInfo = await getTeachersData();
    commit(Types.SET_TEACHER_INFO, teacherInfo);
  },

  async updateTeacher({ dispatch }, { user, deactivated }) {
    const newUserData = { ...user };
    newUserData.deactivated = deactivated;
    dispatch('app/setIsLoading', null, { root: true });
    await updateUser(newUserData.id, newUserData);
    await dispatch('getTeachersDataFromApi');
    dispatch('app/setIsNotLoading', null, { root: true });
  },
};

const getters = {
  teacherInfo: (state) => state.teacherInfo,
};

const mutations = {
  [Types.RESET_TEACHERS_STATE](state) {
    state.teacherInfo = [];
  },
  [Types.SET_TEACHER_INFO](state, teacherInfo) {
    state.teacherInfo = teacherInfo;
  },
};

export default {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
