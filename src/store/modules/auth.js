import { getAuth, signInWithEmailAndPassword, signOut, getUser } from 'firebase/auth'
import { getFunctions, httpsCallable } from 'firebase/functions'
import router from '../../router/index'

const state = {
    user: null,
    claim: null
}

const getters = {
    getUser() {
        return state.user;
    },
    getUserClaim() {
        return state.claim;
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
    async addAdminRoleToUser({ commit }, payload) {
        const functions = getFunctions();
        const addAdminRole = httpsCallable(functions, 'addAdminRole');
        addAdminRole({ email: payload })
            .then(result => {
                console.log(result)
            })
            .catch(e => {
                console.log(e)
            })
    },
    async addTeacherRoleToUser({ commit }, payload) {
        const functions = getFunctions();
        const addAdminRole = httpsCallable(functions, 'addTeacherRole');
        addAdminRole({ email: payload })
            .then(result => {
                console.log(result)
            })
            .catch(e => {
                console.log(e)
            })
    },
    async setUserCustomClaims({ commit }, payload) {        
        const auth = getAuth();
        if(auth.currentUser !== null){
            await auth.currentUser.getIdTokenResult()
            .then((idTokenResult) => {
                commit('SET_USER_CLAIM', idTokenResult.claims)
            })
            .catch(e => {
                console.log(e);
            })
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}