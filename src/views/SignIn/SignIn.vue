<template>
  <v-form
    ref="form"
    class="d-flex"
    lazy-validation>
    <v-container class="sign-in d-flex" fluid>
      <v-row
        align="center"
        justify="center">
        <v-card
          elevation="2"
          width="300"
          class="px-10 py-8 rounded-lg"
        >
          <h1 class="text-h2 text-center mb-6">Admin Mlearn</h1>
          <v-row>
            <v-text-field
              v-model="email"
              class="text-body-1"
              label="Email"
              placeholder="Insert email"
              outlined
              :rules="emailRules"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              v-model="password"
              class="text-body-1"
              label="Password"
              placeholder="Insert password"
              outlined
              :rules="[required]"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-btn
              class="text-button"
              color="primary"
              block
              elevation="0"
              :loading="isLoading"
              @click="signInIfFormValid">
              Sign In
            </v-btn>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { STUDENTS } from '@/router/names';

export default {
  name: 'SignIn',

  data() {
    return {
      required: (value) => !!value || 'Required.',
      showPassword: false,
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
  },

  methods: {
    ...mapActions('app', [
      'setIsLoading',
      'setIsNotLoading',
    ]),

    ...mapActions('signIn', [
      'setEmail',
      'setPassword',
      'signIn',
      'getUserAuth',
      'setNavigateToHome',
    ]),

    async signInIfFormValid() {
      const formValid = this.$refs.form.validate();
      if (formValid) {
        this.setIsLoading();
        await this.signIn();
        this.setIsNotLoading();
      }
    },
  },

  computed: {
    ...mapGetters('app', {
      isLoading: 'isLoading',
    }),

    ...mapGetters('signIn', {
      getEmail: 'email',
      getPassword: 'password',
      shouldNavigateToHome: 'navigateToHome',
    }),

    email: {
      get() {
        return this.getEmail;
      },
      set(value) {
        return this.setEmail({ email: value });
      },
    },

    password: {
      get() {
        return this.getPassword;
      },
      set(value) {
        return this.setPassword({ password: value });
      },
    },
  },

  watch: {
    shouldNavigateToHome(value) {
      if (value && this.$route.name !== STUDENTS) {
        this.$router.push({
          name: STUDENTS,
        });
        this.setNavigateToHome(false);
      }
    },
  },
};
</script>
