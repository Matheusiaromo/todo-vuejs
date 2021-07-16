import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ErroNotificacao from '@/components/ErroNotificacao'


Vue.component("ErroNotificacao", ErroNotificacao)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
