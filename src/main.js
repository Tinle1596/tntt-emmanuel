import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase-config'
import 'firebase/firestore'


initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
