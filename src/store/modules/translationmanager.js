const state = {
    isTranslated: false,

    english: {
        //Home Page
        homeGoalStatement: 'TNTT aims to teach Vietnamese youth 5 yrs. – 12th grade to be virtuous people and good Christians. The objectives are to promote prayers for the Holy Father, devotion to the Eucharist, to honor Mary as a model for discipleship, and to support the missionary efforts of the Church through prayer, sacraments, service and sacrifice.',
        homeRegister: 'Register for TNTT Emmanuel',
        homeInstagram: 'Follow us on Instagram!',

        //About Page
        aboutUsTitle: 'About Us',

        //Nested object for v-tabs mechanism
        aboutUsInfo: {
            ourPurpose: {
                subtitle: 'Purpose',
                arr:
                    [
                        'To educate and train youths in becoming a better person as well as an excellent Christian',
                        'To organize and to guide all youths in spreading the Good News of the Gospel and to actively be involved in working for the good of society through charitable services and helping others.'
                    ]
            },
            ourFoundation: {
                subtitle: 'Foundation',
                arr:
                    [
                        "The Eucharistic Youth Movement utilizes God's Word in the Scriptures and the teaching of the Catholic Church as the basis for educating and guiding the youth in its activities."
                    ]
            },
            ourIdeal: {
                subtitle: 'Ideal',
                arr:
                    [
                        'Eucharistic Youth Movement accepts the Eucharistic Jesus Christ as its focal point, as source of spiritual life, and as ideal for the life of its members.'
                    ]
            },
            ourPrinciples: {
                subtitle: 'Principles',
                arr:
                    [
                        "Live God’s Word and be united with the Eucharistic Christ through Prayer, Communion, Sacrifice, and Apostolic Work under the guidance of the Holy Spirit, particularly apostolic work by the youth: “The youth must do apostolic work first and directly to the youth” (Decree Lay Apostolicity, no. 12)",
                        "Love and honor the Blessed Virgin Mary, Mother of the Savior, so that through Our Mother, we receive Christ and take Christ into our lives in a perfect way.",
                        "Honor the Vietnamese Martyrs; follow their examples to become witnesses for the Good News of Christ.",
                        "Love and obey the representative of Christ, the Pope, who is the leader of the Eucharistic Youth, and at the same time pray and implement the monthly wishes of the Holy Father.",
                        "Improve humanity; protect and develop Vietnamese traditions and culture.",
                    ]
            },
            ourVows: {
                subtitle: 'Vows',
                arr:
                    [
                        "As Eucharistic Youths, we offer our days each morning and enrich our lives with prayers.",
                        "As Eucharistic Youths, we worship and receive the Eucharist, and visit regularly at the tabernacle.",
                        "As Eucharistic Youths, we make sacrifices and find joy in carrying the Cross of Christ.",
                        "As Eucharistic Youths, we depend on Mary’s intercession, and determine to be models worthy of Christ’s apostles.",
                        "As Eucharistic Youths, we perform tasks of all sizes in the spirit of obedience, and do so with excellence.",
                        "As Eucharistic Youths, we remain pure in our thoughts, words and actions.",
                        "As Eucharistic Youths, we act with charity, and our generous hearts are always willing to help others.",
                        "As Eucharistic Youths, we value honesty and gain the trust of people through our words and deeds.",
                        "As Eucharistic Youths, we fulfill our responsibilities, regardless of the difficulty.",
                        "As Eucharistic Youths, we partake in the spiritual bouquet, record each night and tally each week.",
                    ]
            }
        }
    },

    vietnamese: {
        //Home Page
        homeGoalStatement: 'Mục đích của Đoàn TNTT Emmanuel Là đào luyện thanh thiếu niên Việt Nam từ 5 tuổi đến lớp 12, để trở thành những con người kiện toàn và những kitô hữu hoàn hảo. Những mục tiêu thúc đẩy những lời cầu nguyện lên Đức Chúa Cha, lòng sùng kính Thánh Thể và tôn kính Đức Maria như một khuôn mẫu cho việc đào tạo môn đệ và hỗ trợ các nỗ lực truyền giáo của giáo hội qua cầu nguyện, các bí tích, phục vụ và hy sinh',
        homeRegister: 'Đăng ký TNTT Emmanuel',
        homeInstagram: 'Theo dõi chúng tôi trên instagram',

        //About Page
        aboutUsTitle: 'Về chúng toi',

        //Nested object for v-tabs mechanism
        aboutUsInfo: {
            ourPurpose: {
                subtitle: 'Mục Đích',
                arr:
                    [
                        'Đào Luyện thanh thiếu niên trở thành những con người kiện toàn và những Kitô Hữu hoàn hảo.',
                        'Đoàn ngũ hoá và hướng dẫn thanh thiếu niên loan truyền Tin Mừng Chúa Kitô và góp phần xây dựng xã hội.'
                    ]
            },

            ourFoundation: {
                subtitle: 'Nền Tảng',
                arr:
                    [
                        "Phong Trào Thiếu Nhi Thánh Thể lấy Lời Chúa trong Thánh Kinh và Giáo Huấn của Giáo Hội Công Giáo làm nền tảng để giáo dục và hướng dẫn giới trẻ trong các hoạt động."
                    ]
            },
            ourIdeal: {
                subtitle: 'Lý Tưởng',
                arr:
                    [
                        'Phong Trào Thiếu Nhi Thánh Thể nhận Chúa Giêsu Thánh Thể là trung tâm điểm, là nguồn sống thiêng liêng và là lý tưởng sống của đời mình.'
                    ]
            },
            ourPrinciples:
            {
                subtitle: 'Tôn Chỉ',
                arr:
                    [
                        "Sống Lời Chúa và kết hợp với Chúa Giêsu Thánh Thể bằng Cầu Nguyện, Rước Lễ, Hy Sinh, và Làm Việc Tông Đồ dưới sự hướng dẫn của Chúa Thánh Thần, cách riêng làm tông đồ cho giới trẻ: “Giới trẻ phải làm tông đồ trước tiên và trực tiếp cho giới trẻ” (Sắc Lệnh Tông Đồ Giáo Dân, số 12).",
                        "Yêu mến và tôn kính Đức Maria Mẹ Chúa Cứu Thế, để nhờ Mẹ chúng ta đón nhận Chúa và đem Chúa vào đời một cách tuyệt hảo.",
                        "Tôn kính các Thánh Tử Đạo Việt Nam, noi gương và nên chứng tá Tin Mừng Chúa Kitô như các Ngài.",
                        "Yêu mến và vâng phục vị đại diện Chúa Kitô là Đức Giáo Hoàng, thủ lãnh của Thiếu Nhi Thánh Thể, đồng thời cầu nguyện và thực hiện những ý chỉ hằng tháng của Ngài.",
                        "Thăng tiến con người nhân bản. Bảo tồn và phát huy truyền thống văn hoá dân tộc Việt Nam.",
                    ]
            },
            ourVows:
            {
                subtitle: '10 Điều Tâm Niệm',
                arr:
                    [
                        "Thiếu Nhi mỗi sáng dâng ngày, Điểm tô đời sống hương bay nguyện cầu.",
                        "Thiếu Nhi Thánh Thể nhiệm mầu, Tôn sùng rước lễ, nhà chầu viếng thăm.",
                        "Thiếu Nhi Thánh Giá Chúa nằm, Nhìn lên phấn khởi chuyên cần hy sinh.",
                        "Thiếu Nhi nhờ Mẹ đinh ninh, Quyết làm gương sáng xứng danh tông đồ.",
                        "Thiếu Nhi mọi việc nhỏ to, Tinh thần vâng phục chuyên lo đậm đà.",
                        "Thiếu Nhi đằm thắm nết na, Nói năng hành động nõn nà trắng trong.",
                        "Thiếu Nhi bác ái một lòng, Tim luôn quảng đại mới mong giúp người.",
                        "Thiếu Nhi ngay thẳng trọn đời, Nói làm đúng mực người người tin yêu.",
                        "Thiếu Nhi dù khó trăm chiều, Chu toàn bổn phận mọi điều chăm chuyên.",
                        "Thiếu Nhi thực hiện hoa thiêng, Chép ghi mỗi tối cộng biên mỗi tuần.",
                    ]
            }
        }
    }
}

const getters = {
    //returns vietnamese or english info
    getTranslation: () => {
        if (state.isTranslated) {
            return state.vietnamese;
        } else {
            return state.english;
        }
    },
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