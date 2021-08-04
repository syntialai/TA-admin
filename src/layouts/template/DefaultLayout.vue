<template>
  <div class="default-layout">
    <v-main class="flex-grow-1">
      <drawer />

      <slot />

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
import { NAVIGATION_DRAWER } from '@/router/components';

export default {
  name: 'DefaultLayout',

  components: {
    Drawer: NAVIGATION_DRAWER,
  },
};
</script>
