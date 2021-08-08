const state = {
    isTranslated: false,
    // Home 
    purpose: {
        english: 'TNTT aims to teach Vietnamese youth 5 yrs. – 12th grade to be virtuous people and good Christians. The objectives are to promote prayers for the Holy Father, devotion to the Eucharist, to honor Mary as a model for discipleship, and to support the missionary efforts of the Church through prayer, sacraments, service and sacrifice.',
        vietnamese: 'Mục đích của Đoàn TNTT Emmanuel Là đào luyện thanh thiếu niên Việt Nam từ 5 tuổi đến lớp 12, để trở thành những con người kiện toàn và những kitô hữu hoàn hảo. Những mục tiêu thúc đẩy những lời cầu nguyện lên Đức Chúa Cha, lòng sùng kính Thánh Thể và tôn kính Đức Maria như một khuôn mẫu cho việc đào tạo môn đệ và hỗ trợ các nỗ lực truyền giáo của giáo hội qua cầu nguyện, các bí tích, phục vụ và hy sinh'
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