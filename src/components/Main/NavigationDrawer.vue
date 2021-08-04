<template>
  <v-navigation-drawer
    id="navigation-drawer"
    app
    dark
    mobile-breakpoint="960"
    permanent
    src="https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg"
    v-bind="$attrs"
    width="260"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="`to bottom, rgba(50, 50, 50, .8), rgba(50, 50, 50, .8)`"
        v-bind="props"
      />
    </template>

    <v-divider class="mb-1" />

    <v-list
      dense
      nav
    >
      <v-list-item>
        <v-list-item-avatar
          class="align-self-center"
          color="white"
          contain
        >
          <v-img
            :src="`${publicPath}mlearn_logo.png`"
            max-height="30"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="display-1">Mlearn Admin</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list class="main-menu" elevation="0" nav>
      <v-list-item-group
        v-model="menuSelected"
        exact
        exact-active-class="active"
      >
        <v-list-item
          v-for="(menu, index) in mainMenus"
          :key="'main-menu-' + index"
          :to="getRouteByMenu(menu.title)"
        >
          <v-list-item-icon>
            <v-icon v-text="menu.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-h6">{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { getMainMenus } from '@/config/menus';

export default {
  name: 'NavigationDrawer',

  computed: {
    ...mapGetters('app', [
      'mainMenuSelected',
    ]),

    mainMenus() {
      return getMainMenus();
    },

    menuSelected: {
      get() {
        return this.mainMenuSelected;
      },
      set(value) {
        this.setMainMenuSelected(value);
      },
    },
  },

  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },

  methods: {
    ...mapActions('app', [
      'setMainMenuSelected',
    ]),

    getRouteByMenu(routeName) {
      return {
        name: routeName,
      };
    },
  },
};
</script>
