<style scoped>
  thead {
    font-size: 2rem!important;
  }
</style>

<template>
  <div>
    <v-container class="pt-8">
      <v-data-table
        :headers="headers"
        :items="feedbacks"
        :items-per-page="10"
        :loading="isLoadingFeedbacks"
        loading-text="Loading... Please wait"
        class="elevation-2 ma-4 rounded-lg">

        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title class="text-h3">Feedbacks</v-toolbar-title>

            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Feedbacks',

  data() {
    return {
      headers: [
        { text: 'NO', sortable: false, value: 'no' },
        { text: 'DESCRIPTION', sortable: false, value: 'description' },
        { text: 'TYPE', sortable: false, value: 'type' },
        { text: 'CREATED AT', sortable: false, value: 'createdAt' },
      ],
    };
  },

  computed: {
    ...mapGetters('feedback', [
      'feedbacks',
      'isLoadingFeedbacks',
    ]),
  },

  methods: {
    ...mapActions('feedback', [
      'getFeedbacks',
      'resetCredentialsData',
    ]),
  },

  beforeDestroy() {
    this.resetCredentialsData();
  },

  created() {
    this.getFeedbacks();
  },
};
</script>
