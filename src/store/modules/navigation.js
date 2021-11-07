import { getAuth } from 'firebase/auth'

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
    SET_USER_LINKS(state, payload) {
        let links = state.links
        let userLinks = [];

        links.forEach(link => {
            if (link.claims.includes(payload)) {
                userLinks.push(link)
            }            
        })
        state.userLinks = userLinks;
    },
    CLEAR_LINKS(state) {
        state.userLinks = [];
    }
}

const actions = {
    async setNavbarLinks({ dispatch, commit }) {
        await dispatch('clearLinks')
        const auth = getAuth()
        let links = state.links
        if (auth.currentUser !== null) {
            await auth.currentUser.getIdTokenResult()
                .then((idTokenResult) => {
                    switch (true) {
                        case idTokenResult.claims.hasOwnProperty("admin"):
                            //allow all links
                            commit('SET_USER_LINKS', 'admin')
                            break;
                        case idTokenResult.claims.hasOwnProperty("teacher"):
                            //allow some links                      
                            commit('SET_USER_LINKS', 'teacher')
                            break;
                        case idTokenResult.claims.hasOwnProperty("parent"):
                            //allow only a few links
                            commit('SET_USER_LINKS', 'parent')
                            break;
                        case idTokenResult.claims.hasOwnProperty("student"):
                            //allow only a few links
                            commit('SET_USER_LINKS', 'student')
                            break;
                        default:
                            //allow minimal links
                            if (link.claims.includes('guest')) {
                                commit('SET_USER_LINKS', 'guest')
                            }
                            break;
                    }
                })
        } else {
            links.forEach((link) => {
                if (link.claims.includes('guest')) {
                    commit('SET_USER_LINKS', 'guest')
                }
            })
        }
    },
    clearLinks({ commit }) {
        commit('CLEAR_LINKS')
    },    
}

export default {
    state,
    getters,
    mutations,
    actions
}