import Vue from 'vue'
import App from './App.vue'
import components from '../../components' 
import http from '../../libs/axios'
import router from './router'

let myPlugin = {}
myPlugin.install = function (vue, options) {
  vue.prototype.$http = http;
}
Vue.use(myPlugin);

components.forEach(component => Vue.component(component.name,component.instance))

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')