import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

//import colors from 'vuetify/lib/util/color';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#59a5d8',
                secondary: '#2f6690',
                accent: "#133c55"
            }
        }
    }
});
