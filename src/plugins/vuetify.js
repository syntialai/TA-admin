import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const colorPrimary = '#00CB9D';
const colorSecondary = '#ED0027';

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colorPrimary,
        secondary: colorSecondary,
      },
      dark: {
        primary: colorPrimary,
        secondary: colorSecondary,
      },
      black: '#000000',
    },
  },
});
