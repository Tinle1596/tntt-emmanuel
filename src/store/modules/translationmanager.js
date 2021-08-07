const state = {
    isTranslated: false,
    // Home 
    purpose: {
        english: 'To educate and train youths in becoming a better person as well as an excellent Christian and To organize and to guide all youths in spreading the Good News of the Gospel and to actively be involved in working for the good of society through charitable services and helping others.',
        vietnamese: 'Đào Luyện thanh thiếu niên trở thành những con người kiện toàn và những Kitô Hữu hoàn hảo. Đoàn ngũ hoá và hướng dẫn thanh thiếu niên loan truyền Tin Mừng Chúa Kitô và góp phần xây dựng xã hội.'
    }
}

const getters = {
    getPurposeStatement: () => {
        if (state.isTranslated) {
            return state.purpose.vietnamese;
        } else {
            return state.purpose.english;
        }
    }    
}

const mutations = {
    TOGGLE_TRANSLATION: () => {
        state.isTranslated = !state.isTranslated;
    }
}

const actions = {
    toggleTranslation: (context) => {
        context.commit('TOGGLE_TRANSLATION')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}