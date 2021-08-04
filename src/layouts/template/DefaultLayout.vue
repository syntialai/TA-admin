<template>
  <div class="default-layout">
    <v-main class="flex-grow-1">
      <drawer />

      <div class="main-app">
        <navigation :user="userData" />

        <slot />
      </div>

      <v-footer class="mt-8">
        <v-col
          class="text-center text-body-1 pa-4"
          cols="12"
        >
          Copyright @ 2021 - Mlearn Team. All Rights Reserved.
        </v-col>
      </v-footer>
    </v-main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { NAVIGATION, NAVIGATION_DRAWER } from '@/router/components';

export default {
  name: 'DefaultLayout',

  components: {
    Drawer: NAVIGATION_DRAWER,
    Navigation: NAVIGATION,
  },

  computed: {
    ...mapGetters('user', [
      'userData',
    ]),
  },
};
</script>
