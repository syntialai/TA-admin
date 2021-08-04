<template>
  <v-snackbar
    app
    bottom
    :color="getSnackbarColor"
    right
    v-model="snackbar"
  >
    {{ message }}

    <template v-slot:action="{ attrs }">
      <v-btn
        :color="getActionButtonColor"
        text
        v-bind="attrs"
        @click="resetAppMessage()"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
/* eslint-disable no-unused-vars */
import { mapActions } from 'vuex';

export default {
  name: 'Snackbar',

  props: {
    message: String,
    isError: Boolean,
  },

  computed: {
    getActionButtonColor() {
      if (this.isError) {
        return 'white';
      }
      return 'primary';
    },

    getSnackbarColor() {
      if (this.isError) {
        return 'error';
      }
      return undefined;
    },

    snackbar: {
      get() {
        return this.message !== null;
      },
      set(_value) {
        this.resetAppMessage();
      },
    },
  },

  methods: {
    ...mapActions('app', [
      'resetAppMessage',
    ]),
  },
};
</script>
