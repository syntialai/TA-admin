/* eslint-disable no-shadow */
import * as Types from '@/store/types';

const namespaced = true;

const state = {
  appMessage: {
    message: null,
    isError: false,
  },
  isLoading: false,
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
};

const getters = {
  isLoading: (state) => state.isLoading,
  appMessage: (state) => state.appMessage,
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
};

export default {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
