/* eslint-disable no-shadow */
import * as Types from '@/store/types';
import { toDateString } from '@/utils/string-utils';
import * as feedbacksApi from '@/api/data/user/feedbacks.api';
import * as Messages from '@/config/messages';

const namespaced = true;

const state = {
  feedbacks: [],
  isLoadingFeedbacks: false,
};

const actions = {
  async getFeedbacks({ commit, dispatch }) {
    commit(Types.SET_IS_LOADING_FEEDBACKS, true);
    try {
      const data = await feedbacksApi.getFeedbacks();
      commit(Types.SET_FEEDBACKS, data);
      commit(Types.SET_IS_LOADING_FEEDBACKS, false);
    } catch (err) {
      commit(Types.SET_IS_LOADING_FEEDBACKS, false);
      dispatch(
        'app/setErrorMessage',
        Messages.FAILED_FETCH_FEEDBACKS,
        { root: true },
      );
      console.log(err);
    }
  },

  resetCredentialsData({ commit }) {
    commit(Types.SET_FEEDBACKS, []);
    commit(Types.SET_IS_LOADING_FEEDBACKS, false);
  },
};

const getters = {
  feedbacks: (state) => state.feedbacks,
  isLoadingFeedbacks: (state) => state.isLoadingFeedbacks,
};

const mutations = {
  [Types.SET_FEEDBACKS](state, data) {
    const feedbacks = data.map((value, index) => ({
      no: index + 1,
      description: value.description,
      type: value.feedbackType,
      createdAt: toDateString(value.createdAt),
    }));
    state.feedbacks = feedbacks;
  },

  [Types.SET_IS_LOADING_FEEDBACKS](state, value) {
    state.isLoadingFeedbacks = value;
  },
};

export default {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
