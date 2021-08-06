<template>
  <div class="students__container">
    <v-skeleton-loader
      v-if="isLoading"
      type="table"></v-skeleton-loader>
    <v-data-table
      v-else
      :headers="headers"
      :items="studentInfo"
      :items-per-page="5"
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
                  v-on="on">
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
                  v-on="on">
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
</template>

<script>
export default {
  name: 'UserTable',

  data() {
    return {
      search: '',
      avgFilter: '',
      headers: [
        { text: 'STUDENT NAME', sortable: false, value: 'name' },
        { text: 'STUDENT EMAIL', sortable: false, value: 'email' },
        { text: 'ACTION', sortable: false, value: 'deactivated' },
      ],
      studentInfo: [
        { name: 'Richard', email: 'richard@gmail.com', deactivated: true },
        { name: 'Steven', email: 'steven@gmail.com', deactivated: false },
      ],
    };
  },

  methods: {
  },

  computed: {
  },
};
</script>
