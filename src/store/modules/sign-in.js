/* eslint-disable no-shadow */
import { auth } from '@/plugins/firebase';
import { signInWithEmailAndPassword, signOut } from '@/api/data/auth/auth.api';
import * as Types from '@/store/types';
import * as Messages from '@/config/message-constants';

const namespaced = true;

const state = {
  email: '',
  password: '',
  navigateToHome: false,
  navigateToSignIn: false,
};

const actions = {
  setEmail({ commit }, { email }) {
    commit(Types.SET_EMAIL, email);
  },

  setPassword({ commit }, { password }) {
    commit(Types.SET_PASSWORD, password);
  },

  async signOut({ commit }) {
    await signOut();
    commit(Types.SET_NAVIGATE_TO_SIGN_IN, true);
  },

  async signIn({ commit, dispatch, state }) {
    try {
      await signInWithEmailAndPassword(state.email, state.password);
      commit(Types.SET_NAVIGATE_TO_HOME, true);
    } catch (e) {
      dispatch(
        'app/setErrorMessage',
        Messages.SIGN_IN_FAILED,
        { root: true },
      );
    }
  },

  async getUserAuth({ commit }) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        commit(Types.SET_NAVIGATE_TO_HOME, true);
      } else {
        commit(Types.SET_NAVIGATE_TO_SIGN_IN, true);
      }
    });
  },

  setNavigateToHome({ commit }, navigateToHome) {
    commit(Types.SET_NAVIGATE_TO_HOME, navigateToHome);
  },

  setNavigateToSignIn({ commit }, navigateToSignIn) {
    commit(Types.SET_NAVIGATE_TO_SIGN_IN, navigateToSignIn);
  },
};

const getters = {
  email: (state) => state.email,
  password: (state) => state.password,
  navigateToHome: (state) => state.navigateToHome,
  navigateToSignIn: (state) => state.navigateToSignIn,
};

const mutations = {
  [Types.SET_EMAIL](state, email) {
    state.email = email;
  },

  [Types.SET_PASSWORD](state, password) {
    state.password = password;
  },
  [Types.SET_NAVIGATE_TO_HOME](state, navigateToHome) {
    state.navigateToHome = navigateToHome;
    console.log('navigate to home', state.navigateToHome);
  },
  [Types.SET_NAVIGATE_TO_SIGN_IN](state, navigateToSignIn) {
    console.log('navigate to sign in', state.navigateToSignIn);
    state.navigateToSignIn = navigateToSignIn;
    console.log('navigate to sign in', state.navigateToSignIn);
  },
};

export default {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
