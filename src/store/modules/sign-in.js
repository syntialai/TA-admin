/* eslint-disable no-shadow */
import { signInWithEmailAndPassword } from '@/api/data/auth/auth.api';
import * as Types from '@/store/types';
import * as Messages from '@/config/message-constants';

const namespaced = true;

const state = {
  email: '',
  password: '',
};

const actions = {
  resetState({ commit }) {
    commit(Types.RESET_SIGN_IN_STATE);
  },

  setEmail({ commit }, { email }) {
    commit(Types.SET_EMAIL, email);
  },

  setPassword({ commit }, { password }) {
    commit(Types.SET_PASSWORD, password);
  },

  async signIn({ dispatch, state }) {
    try {
      await signInWithEmailAndPassword(state.email, state.password);
      dispatch(
        'app/setNavigateToHome',
        true,
        { root: true },
      );
    } catch (e) {
      dispatch(
        'app/setErrorMessage',
        Messages.SIGN_IN_FAILED,
        { root: true },
      );
    }
  },
};

const getters = {
  email: (state) => state.email,
  password: (state) => state.password,
};

const mutations = {
  [Types.SET_EMAIL](state, email) {
    state.email = email;
  },

  [Types.SET_PASSWORD](state, password) {
    state.password = password;
  },
  [Types.RESET_SIGN_IN_STATE](state) {
    state.email = '';
    state.password = '';
  },
};

export default {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
