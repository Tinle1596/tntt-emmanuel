import { getAuth } from 'firebase/auth'
import store from '..';

const state = {
    links: [
        {
            icon: "mdi-home",
            text: "Home",
            route: "/",
            claims: ["admin", "teacher", "parent", "student", "guest"],
        },
        {
            icon: "mdi-information",
            text: "About",
            route: "/about",
            claims: ["admin", "teacher", "parent", "student", "guest"],
        },
        {
            icon: "mdi-account-group",
            text: "Leaders",
            route: "/leaders",
            claims: ["admin", "teacher", "parent", "student"],
        },
        {
            icon: "mdi-bulletin-board",
            text: "Bulletin Board",
            route: "/bulletinboard",
            claims: ["admin", "teacher", "parent", "student"],
        },
        {
            icon: "mdi-view-dashboard",
            text: "Admin",
            route: "/admin",
            claims: ["admin"],
        },
    ],
    userLinks: []
}

const getters = {
    getUserLinks() {
        return state.userLinks;
    }
}

const mutations = {    
    ADD_LINK(state, payload) {
        state.userLinks.push(payload)
    },
    CLEAR_LINKS(state) {
        state.userLinks = [];
    }
}

const actions = {
    clearLinks({commit}) {
        commit('CLEAR_LINKS')
    },
    async setNavbarLinks({ dispatch, commit }) {
        await dispatch('clearLinks')
        const auth = getAuth()         
        let links = state.links
        if (auth.currentUser !== null) {
            await auth.currentUser.getIdTokenResult()
                .then((idTokenResult) => {
                    links.forEach((link) => {
                        switch (true) {
                            case idTokenResult.claims.hasOwnProperty("admin") && link.claims.includes("admin"):
                                //allow all links
                                commit('ADD_LINK', link);                                
                                break;
                            case idTokenResult.claims.hasOwnProperty("teacher") && link.claims.includes("teacher"):
                                //allow some links                      
                                commit('ADD_LINK', link);
                                break;
                            case idTokenResult.claims.hasOwnProperty("parent") && link.claims.includes("parent"):
                                //allow only a few links
                                commit('ADD_LINK', link);
                                break;
                            case idTokenResult.claims.hasOwnProperty("student") && link.claims.includes("student"):
                                //allow only a few links
                                commit('ADD_LINK', link);
                                break;
                            default:
                                //allow minimal links
                                if (link.claims.includes('guest')) {
                                    commit('ADD_LINK', link);
                                }
                                break;
                        }
                    })
                })
        } else {
            links.forEach((link) => {
                if (link.claims.includes('guest')) {
                    commit('ADD_LINK', link);
                }
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