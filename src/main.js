import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import socket from './socket/index'
import VueChatScroll from 'vue-chat-scroll'
import Vuetify from 'vuetify'


const token = localStorage.getItem('auth-token')
if (token) {
  axios.defaults.headers.common['auth-token'] = token
}

Vue.use(VueChatScroll)

Vue.config.productionTip = false

//Global variable for socket
Vue.prototype.$socket = socket

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)

}).$mount('#app')
