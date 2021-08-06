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
import { mapGetters, mapActions } from 'vuex';
import { SIGN_IN, STUDENTS } from '@/router/names';

export default {
  name: 'App',

  created() {
    this.getUserAuth();
  },

  components: {
    DefaultLayout: LAYOUT_DEFAULT,
    SignInLayout: LAYOUT_SIGN_IN,
    Snackbar: SNACKBAR,
  },

  methods: {
    ...mapActions('app', [
      'setNavigateToSignIn',
      'setNavigateToHome',
      'getUserAuth',
    ]),
  },

  computed: {
    ...mapGetters('app', [
      'appMessage',
      'navigateToSignIn',
      'navigateToHome',
    ]),

    layout() {
      return `${(this.$route.meta.layout || Layouts.DEFAULT_LAYOUT)}`;
    },
  },

  watch: {
    navigateToSignIn(value) {
      if (value && this.$route.name !== SIGN_IN) {
        this.$router.push({
          name: SIGN_IN,
        });
      }
      this.setNavigateToSignIn(false);
    },
    navigateToHome(value) {
      if (value && this.$route.name !== STUDENTS) {
        this.$router.push({
          name: STUDENTS,
        });
      }
      this.setNavigateToHome(false);
    },
  },
};
</script>
