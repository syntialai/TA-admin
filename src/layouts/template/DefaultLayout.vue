<template>
  <div class="default-layout">
    <v-main class="flex-grow-1">
      <slot />
    </v-main>

    <v-footer class="mt-8">
      <v-col
        class="text-center text-body-1 pa-4"
        cols="12"
      >
        Copyright @ 2021 - Mlearn Team. All Rights Reserved.
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>
