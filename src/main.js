import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import vuetify from './plugins/vuetify';
import { auth } from './plugins/firebase';

import { SIGN_IN } from './router/paths';

Vue.config.productionTip = false;

let unsubscribeUserAuth = null;

const needToSignIn = (userAuth) => !userAuth && router.currentRoute.path !== SIGN_IN;

function signOutIfNeed(userAuth) {
  if (needToSignIn(userAuth)) {
    store.dispatch('auth/signOutCurrentUser', null, { root: true });
    router.push(SIGN_IN);
  }
}

new Vue({
  router,
  store,
  vuetify,
  created() {
    unsubscribeUserAuth = auth.onAuthStateChanged((userAuth) => {
      signOutIfNeed(userAuth);
    });
  },
  beforeDestroy() {
    unsubscribeUserAuth();
  },
  render: (h) => h(App),
}).$mount('#app');
