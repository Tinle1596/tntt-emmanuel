import Vue from "vue";
import Vuex from "vuex";
import translationmanager from './modules/translationmanager'
import leaders from './modules/leaders'
import auth from './modules/auth'
import bulletins from './modules/bulletins'
import navigation from './modules/navigation'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production"

// const dataState = createPersistedState({
//   paths: ['auth', 'bulletin']
// })

export default new Vuex.Store({  
  modules: {
    translationmanager,
    leaders,
    auth,
    bulletins,
    navigation
  },
  ///plugins: [dataState],
  strict: false
});