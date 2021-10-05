import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import router from '../../router/index'

const state = {
    user: null
}

const getters = {    
    getUser() {
        return state.user;
    }
}

const mutations = {
    SET_USER(state, payload) {
        state.user = payload
    }
}

const actions = {
    async logUserIn({ commit }, payload) {
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, payload.email, payload.password)
                .then(user => {
                    commit('SET_USER', user)
                    router.push('/')
                })
        } catch (e) {
            alert(e.message);
        }
    },
    async logUserOut({ commit }) {
        const auth = getAuth();
        try {
            await signOut(auth).then(
                commit('SET_USER', null)
            )
            router.push('/');
        } catch (e) {
            alert(e.message);
        }
    },    
}

export default {
    state,
    getters,
    mutations,
    actions
}