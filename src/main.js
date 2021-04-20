import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import {WebRTC} from 'vue-webrtc'
Vue.component(WebRTC.name, WebRTC)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  WebRTC,
  render: h => h(App)
}).$mount('#app')
