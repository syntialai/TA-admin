<template>
  <v-app-bar
    class="navigation"
    app
    hide-on-scroll
    min-height="64"
  >
    <v-container class="navigation__container d-flex align-center">
      <div class="nav-left-menu">
        <span class="text-h2">{{ getMenuSelected }}</span>
      </div>

      <v-spacer></v-spacer>

      <div class="nav-right-menu d-flex align-center">
        <v-btn
          class="nav-right-menu__sign-out ml-8 text-subtitle-1"
          text
          @click="askStoreToSignOut"
        >
          Sign Out
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { getMainMenus } from '@/config/menus';

export default {
  name: 'Navigation',

  methods: {
    ...mapActions('app', [
      'signOut',
    ]),

    async askStoreToSignOut() {
      await this.signOut();
    },
  },

  computed: {
    ...mapGetters('app', [
      'mainMenuSelected',
    ]),

    getMenuSelected() {
      return getMainMenus()[this.mainMenuSelected].title;
    },
  },
};
</script>
