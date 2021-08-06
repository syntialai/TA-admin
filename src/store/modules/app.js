/* eslint-disable no-shadow */
import { auth } from '@/plugins/firebase';
import { signOut } from '@/api/data/auth/auth.api';
import * as Types from '@/store/types';

const namespaced = true;

const state = {
  appMessage: {
    message: null,
    isError: false,
  },
  isLoading: false,
  mainMenuSelected: 0,
  navigateToHome: false,
  navigateToSignIn: false,
};

const actions = {
  setIsLoading({ commit }) {
    commit(Types.SET_IS_LOADING, true);
  },

  setIsNotLoading({ commit }) {
    commit(Types.SET_IS_LOADING, false);
  },

  resetAppMessage({ commit }) {
    commit(Types.SET_APP_MESSAGE, {
      message: null,
      isError: false,
    });
  },

  setErrorMessage({ commit }, message) {
    commit(Types.SET_IS_LOADING, false);
    commit(Types.SET_APP_MESSAGE, {
      message,
      isError: true,
    });
  },

  setSuccessMessage({ commit }, message) {
    commit(Types.SET_APP_MESSAGE, {
      message,
      isError: false,
    });
  },

  setMainMenuSelected({ commit }, menuSelected) {
    commit(Types.SET_MAIN_MENU_SELECTED, menuSelected);
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

  async signOut({ commit }) {
    await signOut();
    commit(Types.SET_NAVIGATE_TO_SIGN_IN, true);
  },
};

const getters = {
  isLoading: (state) => state.isLoading,
  appMessage: (state) => state.appMessage,
  mainMenuSelected: (state) => state.mainMenuSelected,
  navigateToHome: (state) => state.navigateToHome,
  navigateToSignIn: (state) => state.navigateToSignIn,
};

const mutations = {
  [Types.SET_IS_LOADING](state, res) {
    state.isLoading = res;
  },

  [Types.SET_APP_MESSAGE](state, { message, isError }) {
    state.appMessage = {
      message,
      isError,
    };
  },

  [Types.SET_MAIN_MENU_SELECTED](state, menuSelected) {
    state.mainMenuSelected = menuSelected || 0;
  },
  [Types.SET_NAVIGATE_TO_HOME](state, navigateToHome) {
    state.navigateToHome = navigateToHome;
  },
  [Types.SET_NAVIGATE_TO_SIGN_IN](state, navigateToSignIn) {
    state.navigateToSignIn = navigateToSignIn;
  },
};

export default {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
