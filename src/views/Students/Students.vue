<style scoped>
table {
  font-size: 2rem;
}
</style>
<template>
  <div class="pa-16">
    <confirmation-dialog
      :maxWidth=300
      :openDialog.sync="deactivateDialog.show"
      :dialog="getDeactivateDialog"
      :doAction="askStoreToDeactivateUser(deactivateDialog.user)"
    ></confirmation-dialog>
    <confirmation-dialog
      :maxWidth=300
      :openDialog.sync="activateDialog.show"
      :dialog="getActivateDialog"
      :doAction="askStoreToActivateUser(activateDialog.user)"
    ></confirmation-dialog>
    <div class="students__container">
      <v-skeleton-loader
        v-if="isLoading"
        type="table"></v-skeleton-loader>
      <v-data-table
        v-else
        :headers="headers"
        :items="studentInfo"
        :items-per-page="10"
        :search="search"
        class="elevation-2 my-8 pt-4 rounded-lg students__container__table">
        <template v-slot:item="row">
          <tr>
            <td>{{ row.item.name }}</td>
            <td>{{ row.item.email }}</td>
            <td class="ml-2">
              <v-tooltip v-if="row.item.deactivated" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    small
                    class="text-center"
                    style="cursor:pointer;"
                    v-bind="attrs"
                    v-on="on"
                    @click="askStoreToActivateUser(row.item)">
                    mdi-power
                  </v-icon>
                </template>
                <span>Activate</span>
              </v-tooltip>
              <v-tooltip v-else bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    small
                    class="text-center"
                    style="cursor:pointer;"
                    v-bind="attrs"
                    v-on="on"
                    @click="askStoreToDeactivateUser(row.item)">
                    mdi-power-off
                  </v-icon>
                </template>
                <span>Deactivate</span>
              </v-tooltip>
            </td>
          </tr>
        </template>
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search by Name or Email"
            class="mx-4"
            ></v-text-field>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { CONFIRMATION_DIALOG } from '@/router/components';

export default {
  name: 'Students',

  components: {
    ConfirmationDialog: CONFIRMATION_DIALOG,
  },

  async created() {
    this.setIsLoading();
    await this.getStudentsDataFromApi();
    this.setIsNotLoading();
  },

  destroyed() {
    this.resetState();
  },

  data() {
    return {
      search: '',
      avgFilter: '',
      headers: [
        { text: 'STUDENT NAME', sortable: false, value: 'name' },
        { text: 'STUDENT EMAIL', sortable: false, value: 'email' },
        { text: 'ACTION', sortable: false, value: 'deactivated' },
      ],
    };
  },

  methods: {
    ...mapActions('students', [
      'getStudentsDataFromApi',
      'updateStudent',
      'resetState',
    ]),
    ...mapActions('app', [
      'setIsLoading',
      'setIsNotLoading',
    ]),
    async askStoreToActivateUser(user) {
      await this.updateStudent({ user, deactivated: false });
    },
    async askStoreToDeactivateUser(user) {
      await this.updateStudent({ user, deactivated: true });
    },
  },

  computed: {
    ...mapGetters('app', [
      'isLoading',
    ]),
    ...mapGetters('students', [
      'studentInfo',
    ]),
  },
};
</script>
