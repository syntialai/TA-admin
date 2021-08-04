<template>
  <div id="app">
    <v-app>
      <component :is="layout">
        <router-view></router-view>

        <snackbar
          class="app=snackbar"
          v-bind="appMessage"
        />
      </component>
    </v-app>
  </div>
</template>

<script>
import { SNACKBAR } from '@/router/components';
import { LAYOUT_DEFAULT, LAYOUT_SIGN_IN } from '@/router/pages';
import * as Layouts from '@/layouts/layouts';
import { mapGetters } from 'vuex';

export default {
  name: 'App',

  components: {
    DefaultLayout: LAYOUT_DEFAULT,
    SignInLayout: LAYOUT_SIGN_IN,
    Snackbar: SNACKBAR,
  },

  computed: {
    ...mapGetters('app', [
      'appMessage',
    ]),

    layout() {
      return `${(this.$route.meta.layout || Layouts.DEFAULT_LAYOUT)}`;
    },
  },
};
</script>
