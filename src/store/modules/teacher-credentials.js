/* eslint-disable no-shadow */
import * as Types from '@/store/types';
import * as credentialsApi from '@/api/data/credentials/credentials.api';
import { Credentials } from '@/api/objects/credentials/Credentials';
import * as Messages from '@/config/messages';
import { toDateString } from '@/utils/string-utils';

const namespaced = true;

const state = {
  credentialsData: [],
};

const actions = {
  async getCredentialsData({ commit, dispatch }) {
    try {
      const data = await credentialsApi.getCredentials();
      console.log(data);
      commit(Types.SET_CREDENTIALS_DATA, data);
    } catch (err) {
      dispatch(
        'app/setErrorMessage',
        Messages.FAILED_FETCH_CREDENTIALS,
        { root: true },
      );
      console.log(err);
    }
  },

  async createNewCredentials({ dispatch }) {
    const newCredentials = new Credentials({});
    try {
      await credentialsApi.addCredentials(newCredentials);
      dispatch(
        'app/setSuccessMessage',
        Messages.CREDENTIALS_CREATED,
        { root: true },
      );
      dispatch('getCredentialsData');
    } catch (err) {
      dispatch(
        'app/setErrorMessage',
        Messages.FAILED_TO_CREATE_CREDENTIALS,
        { root: true },
      );
    }
  },

  async deleteCredentials({ dispatch }, id) {
    try {
      await credentialsApi.deleteCredentials(id);
      dispatch(
        'app/setSuccessMessage',
        Messages.CREDENTIALS_DELETED,
        { root: true },
      );
      dispatch('getCredentialsData');
    } catch (err) {
      dispatch(
        'app/setErrorMessage',
        Messages.FAILED_TO_DELETE_CREDENTIALS,
        { root: true },
      );
    }
  },

  resetCredentialsData({ commit }) {
    commit(Types.SET_CREDENTIALS_DATA, []);
  },
};

const getters = {
  credentialsData: (state) => state.credentialsData,
};

const mutations = {
  [Types.SET_CREDENTIALS_DATA](state, data) {
    const credentials = data.map((value, index) => ({
      no: index + 1,
      id: value.id,
      createdAt: toDateString(value.createdAt),
    }));
    state.credentialsData = credentials;
  },
};

export default {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
