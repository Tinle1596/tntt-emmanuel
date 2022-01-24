import { getFirestore, collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc, deleteDoc, deleteField, orderBy, limit, query } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { convertUnixDate } from '../../common/formatter'
import router from '../../router/index'

const state = {
    // object: {
    //     title: '',
    //     type: '',
    //     text: '',
    //     postedDate: '',
    //     eventDate: '',
    //     tags: []
    // }
    bulletins: [],
    editBulletin: {},
    createBulletin: {},
    type: ['event', 'notification', 'post'],
    tags: ['TNTT', 'HS', 'NS', 'TN', 'AU', 'TT', 'PH']
}

const getters = {
    getBulletins() {
        return state.bulletins;
    },
    getEditBulletin() {
        return state.editBulletin;
    },
    getBulletinType() {
        return state.type;
    },
    getBulletinTags() {
        return state.tags;
    },
    getCreateBulletin() {
        return state.createBulletin;
    }
}

const mutations = {
    SET_BULLETINS(state, val) {
        state.bulletins = val;
    },
    SET_BULLETIN(state, val) {
        state.editBulletin = val
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
    // Getting Bulletins
    async setBulletins({ commit }) {
        const results = [];
        const q = query(collection(getFirestore(), 'bulletins'), orderBy('createdDate', 'desc'), limit(10))
        await getDocs(q)
            .then((snapShot) => {
                snapShot.forEach((doc) => {
                    results.push({
                        id: doc.id,
                        title: doc.data().title,
                        type: doc.data().type,
                        eventDate: doc.data().eventDate !== null ? convertUnixDate(doc.data().eventDate.seconds) : null,
                        createdDate: new Date(doc.data().createdDate.seconds * 1000),
                        createdBy: doc.data().createdBy,                        
                        updatedDate: doc.data().updatedDate !== null ? new Date(doc.data().updatedDate.seconds * 1000) : null,
                        updatedBy: doc.data().updatedBy ?? null,
                        text: doc.data().text,
                        tags: doc.data().tags,
                        posted: doc.data().posted
                    });
                })
                commit('SET_BULLETINS', results);
            })
            .catch((e) => {
                alert(e.message);
            })
    },
    // getting bulletin by id
    async getBulletinById({ commit }, id) {
        const docRef = doc(getFirestore(), 'bulletins', id);
        await getDoc(docRef).then((snapShot) => {
            if (snapShot.exists()) {
                const docData = {
                    id: snapShot.id,
                    title: snapShot.data().title,
                    type: snapShot.data().type,
                    eventDate: snapShot.data().eventDate !== null ? convertUnixDate(snapShot.data().eventDate.seconds) : null,
                    createdDate: new Date(snapShot.data().createdDate.seconds * 1000),
                    createdBy: snapShot.data().createdBy,
                    updatedDate: snapShot.data().updatedDate !== null ? new Date(snapShot.data().updatedDate.seconds * 1000) : null,
                    updatedBy: snapShot.data().updatedBy ?? null,
                    text: snapShot.data().text,
                    tags: snapShot.data().tags,
                    posted: snapShot.data().posted
                }
                commit('SET_BULLETIN', docData);
            } else {
                alert('No document found');
            }
        })
            .catch((e) => {
                alert(e.error);
            });
    },
    // Creating Bulletin
    async createBulletin({ commit }, payload) {
        let ref = collection(getFirestore(), 'bulletins');
        const result = await addDoc(ref, {
            title: payload.title,
            type: payload.type,
            text: payload.text,
            createdDate: new Date(),
            createdBy: getAuth().currentUser.uid,
            eventDate: payload.eventDate ?? null,
            updatedBy: null,
            updatedDate: null,
            tags: payload.tags,
            posted: false
        })
            .then(() => {
                //commit('CREATE_BULLETIN', result);
                router.push({name: 'bulletinboard'});
            })
            .catch((e) => {
                alert('Unsuccessful operation,', e.message);
            })
    },
    // Updating Bulletin
    async updateBulletin({ commit }, payload) {
        let ref = doc(getFirestore(), 'bulletins', payload.id);
        await updateDoc(ref, {
            title: payload.title,
            type: payload.type,
            text: payload.text,            
            eventDate: payload.eventDate !== null && payload.type === 'event' ? new Date(payload.eventDate) : null,
            updatedBy: getAuth().currentUser.uid,
            updatedDate: new Date(),
            tags: payload.tags
        })
            .then(() => {
                router.push({ name: 'bulletinboard' });
                // commit('UPDATE_BULLETIN', result);
            })
            .catch((e) => {
                alert(e.message);
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