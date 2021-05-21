import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#0277bd',
                fhnw: '#FDE70E',
                admin:'#c44348',
                general: '#0277bd',
            },
        },
    },
})



