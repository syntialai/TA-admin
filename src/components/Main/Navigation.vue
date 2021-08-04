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
        <div
          v-if="user"
          class="nav-right-menu__user d-flex align-center"
        >
          <v-avatar color="primary" size="40" class="nav__user-image">
            <img
              v-if="user && user.photo"
              :src="user.photo"
              alt="User Image"
            />

            <v-icon
              v-else
              dark
            >
              mdi-account
            </v-icon>
          </v-avatar>

          <span class="nav__user-name ml-4 text-subtitle-1">
            {{ getUserName }}
          </span>
        </div>

        <v-btn
          class="nav-right-menu__sign-out ml-8 text-subtitle-1"
          text
          @click="signOut"
        >
          Sign Out
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';
import { getMainMenus } from '@/config/menus';

export default {
  name: 'Navigation',

  props: {
    user: Object,
  },

  computed: {
    ...mapGetters('app', [
      'mainMenuSelected',
    ]),

    getMenuSelected() {
      return getMainMenus()[this.mainMenuSelected].title;
    },

    getUserName() {
      if (!this.user) {
        return '';
      }

      if (this.user.name.length > 20) {
        return `${this.user.name.substr(0, 17)}...`;
      }

      return this.user.name;
    },
  },

  methods: {
    signOut() {
    },
  },
};
</script>
