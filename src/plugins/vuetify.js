import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#4B4453',
                accent: '#FF8066',
                third: '#B0A8B9',
                error: '#C34A36',
                fhnw: '#FDE70E',
                admin:'#c44348',
                general: '#0277bd',
            },
        },
    },
})



