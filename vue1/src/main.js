import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './js/router'
// import axios from 'axios'
// Vue.prototype.$http = axios
// import router from 'vue-router'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})




