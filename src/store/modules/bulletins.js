import { getFirestore, collection, getDocs } from 'firebase/firestore'

const state = {
    // object: {
    //     title: '',
    //     type: '',
    //     text: '',
    //     postedDate: '',
    //     eventDate: '',
    //     tags: []
    // }
    bulletins: []
}

const getters = {
    getBulletins() {
        return state.bulletins;
    }
}

const mutations = {
    SET_BULLETINS(state, val) {
        state.bulletins = val;        
    }
}

const actions = {
    // Getting Bulletin
    async setBulletins({ commit }) {
        const results = [];
        try {
            const snapShot = await getDocs(collection(getFirestore(), 'bulletins'));
            snapShot.forEach((doc) => {
                results.push({ id: doc.id, ...doc.data() });
            })
            commit('SET_BULLETINS', results);
        } catch (e) {
            alert(e.message);
        }
    }
    // Creating Bulletin

    // Updating Bulletin

    // Deleting Bulletin
}

export default {
    state,
    getters,
    mutations,
    actions
}