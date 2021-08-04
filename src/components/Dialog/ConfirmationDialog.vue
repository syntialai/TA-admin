<template>
  <v-dialog
    class="confirm-delete-dialog"
    :max-width="maxWidth"
    v-model="openDialog"
    @click:outside="closeDialog"
  >
    <v-card>
      <v-card-title class="text-h4">
        {{ dialog.title }}
      </v-card-title>
      <v-card-text v-if="dialog.description" class="text-body-1">
        {{ dialog.description }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          v-if="dialog.closeButton"
          color="grey"
          text
          @click="closeDialog"
        >
          {{ dialog.closeButton }}
        </v-btn>
        <v-btn
          v-if="dialog.confirmButton"
          color="red darken-1"
          text
          @click="confirmAction"
        >
          {{ dialog.confirmButton }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ConfirmationDialog',

  props: {
    openDialog: Boolean,
    doAction: Function,
    dialog: {
      type: Object,
      default: () => ({
        title: '',
        description: null,
        closeButton: 'Cancel',
        confirmButton: 'Ok',
      }),
    },
    maxWidth: {
      type: Number,
      default: () => 400,
    },
  },

  methods: {
    closeDialog() {
      this.$emit('update:openDialog', false);
    },

    confirmAction() {
      if (typeof this.doAction === 'function') this.doAction();
      this.closeDialog();
    },
  },
};
</script>
