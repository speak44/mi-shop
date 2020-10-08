import Vue from 'vue'
import App from './App.vue'
import Plugin from'./plugins/axios'
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  Plugin,
  render: h => h(App),
}).$mount('#app')
