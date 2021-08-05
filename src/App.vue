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
import { SIGN_IN } from '@/router/names';

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
    ...mapActions('signIn', [
      'getUserAuth',
    ]),

    ...mapActions('signIn', [
      'setNavigateToSignIn',
    ]),
  },

  computed: {
    ...mapGetters('app', [
      'appMessage',
    ]),

    ...mapGetters('signIn', [
      'navigateToSignIn',
    ]),

    layout() {
      return `${(this.$route.meta.layout || Layouts.DEFAULT_LAYOUT)}`;
    },
  },

  watch: {
    navigateToSignIn(value) {
      console.log(value, this.$route.name);
      if (value && this.$route.name !== SIGN_IN) {
        this.$router.push({
          name: SIGN_IN,
        });
        this.setNavigateToSignIn(false);
      }
    },
  },
};
</script>
