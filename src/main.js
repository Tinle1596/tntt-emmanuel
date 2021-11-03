import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import { getAuth } from 'firebase/auth'

Vue.config.productionTip = false

const app = new Vue({
  vuetify,
  router,
  store, 
  render: h => h(App),  
})

const auth = getAuth();
auth.onAuthStateChanged(user => {
  store.commit('SET_USER', user);
  store.dispatch('setNavbarLinks');
  app.$mount('#app')
})


