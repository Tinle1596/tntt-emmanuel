import { getFirestore, collection, doc, getDocs, setDoc, addDoc, updateDoc, deleteDoc, deleteField } from 'firebase/firestore'

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
    },

    CREATE_BULLETIN(state, val) {
        state.bulletins.push(val);
    },

    UPDATE_BULLETIN(state, val) {
        state.bulletins.push(val);
    },

    DELETE_BULLETIN(state, val) {
        state.bulletins.pop(val);
    }
}

const actions = {
    // Getting Bulletin
    async setBulletins({ commit }) {
        const results = [];
        await getDocs(collection(getFirestore(), 'bulletins'))
            .then((snapShot) => {
                snapShot.forEach((doc) => {
                    results.push({ id: doc.id, ...doc.data() });
                })
                commit('SET_BULLETINS', results);
            })
            .catch((e) => {
                alert('Unsuccessful opertion', e.message);
            })
    },
    // Creating Bulletin
    async createBulletin({ commit, payload }) {
        let ref = collection(getFirestore(), 'bulletins');
        const result = await addDoc(ref, {
            title: payload.title,
            type: payload.type,
            text: payload.text,
            postedDate: payload.postedDate,
            isEvent: payload.isEvent,
            eventDate: payload.eventDate,
            tags: payload.tags
        })
            .then(() => {
                commit('CREATE_BULLETIN', result);
            })
            .catch((e) => {
                alert('Unsuccessful operation,', e.message);
            })
    },
    // Updating Bulletin
    async updateBulletin({ commit, payload }) {
        let ref = collection(getFirestore(), 'bulletins', payload.id);
        await updateDoc(ref, {
            title: payload.title,
            type: payload.type,
            text: payload.text,
            postedDate: payload.postedDate,
            isEvent: payload.isEvent,
            eventDate: payload.eventDate,
            tags: payload.tags
        })
            .then(() => {
                commit('UPDATE_BULLETIN', result);
            })
            .catch((e) => {
                alert('Unsuccessful operation,', e.message);
            })
    },

    // Deleting Bulletin
    async deleteBulletin({ commit, payload }) {
        let ref = collection(getFirestore(), 'bulletins', payload.id);
        const snapShot = await getDoc(ref);

        if (!snapShot.exists()) {
            alert("Document does not exist");
            return
        }

        await deleteDoc(ref)
            .then(() => {
                commit('CREATE_BULLETIN', result);
            })
            .catch((e) => {
                alert('Deleted successfully,', e.message);
            })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}