<style scoped>
thead {
  font-size: 2rem!important;
}
</style>

<template>
  <div class="teacher-credentials-views">
    <v-container class="pt-8">
      <v-data-table
        :headers="headers"
        :items="credentialsData"
        :items-per-page="10"
        class="elevation-2 ma-4 rounded-lg teacher-credentials__table">

        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title class="text-h3">Token Credentials for Teacher</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              color="secondary"
              @click="generateToken()"
            >
              Generate New Token
            </v-btn>
          </v-toolbar>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            @click="confirmBeforeDeleteToken(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>

      <confirmation-dialog
        :openDialog.sync="openDialog"
        :dialog="getDialog"
        :doAction="deleteToken"
      />
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { CONFIRMATION_DIALOG } from '@/router/components';
import * as Messages from '@/config/messages';

export default {
  name: 'TeacherCredentials',

  components: {
    ConfirmationDialog: CONFIRMATION_DIALOG,
  },

  computed: {
    ...mapGetters('teacherCredentials', [
      'credentialsData',
    ]),

    getDialog() {
      return {
        title: Messages.DELETE_TOKEN_TITLE,
        description: Messages.DELETE_TOKEN_DESCRIPTION,
        closeButton: Messages.DELETE_TOKEN_CANCEL,
        confirmButton: Messages.DELETE_TOKEN_CONFIRM,
      };
    },
  },

  async created() {
    this.setIsLoading();
    await this.getCredentialsData();
    this.setIsNotLoading();
  },

  data() {
    return {
      headers: [
        { text: 'NO', sortable: false, value: 'no' },
        { text: 'CREDENTIALS TOKEN', sortable: false, value: 'id' },
        { text: 'CREATED AT', sortable: false, value: 'createdAt' },
        { text: '', sortable: false, value: 'actions' },
      ],
      openDialog: false,
      selectedToken: '',
    };
  },

  methods: {
    ...mapActions('app', [
      'setIsLoading',
      'setIsNotLoading',
    ]),
    ...mapActions('teacherCredentials', [
      'getCredentialsData',
      'resetCredentialsData',
      'createNewCredentials',
      'deleteCredentials',
    ]),

    confirmBeforeDeleteToken(item) {
      this.openDialog = true;
      this.selectedToken = item.id;
    },

    async deleteToken() {
      this.openDialog = false;
      await this.deleteCredentials(this.selectedToken);
    },

    async generateToken() {
      this.setIsLoading();
      await this.createNewCredentials();
      this.setIsNotLoading();
    },
  },
};
</script>
