import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFunctions, httpsCallable } from 'firebase/functions'
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
    async addAdminRoleToUser({commit}, payload) {
        console.log(payload)
        const functions = getFunctions();
        const addAdminRole = httpsCallable(functions, 'addAdminRole');
        addAdminRole({ email: payload })
        .then(result => {
            console.log(result)
        })
        .catch(e => {
            console.log(e)
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}