import { getFirestore, collection, getDocs } from 'firebase/firestore'

const state = {
    leaders: []
}

const getters = {
    getLeaders() {
        return state.leaders;
    }
}

const mutations = {
    SET_LEADERS(state, val) {
        state.leaders = val
    }
}

const actions = {
    async setLeaders({ commit }) {
        const results = [];
        try {
            const snap = await getDocs(collection(getFirestore(), 'leaders'));
            snap.forEach((doc) => {
                results.push({ id: doc.id, ...doc.data() });
            })
            commit('SET_LEADERS', results);
        } catch (e) {
            alert(e.message);
        }        
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}