import Vue from 'vue'
import App from './App.vue'
import components from '../../components'
import http from '../../libs/axios'

let myPlugin = {}
myPlugin.install = function (vue, options) {
  vue.prototype.$http = http;
}
Vue.use(myPlugin);

components.forEach(component => Vue.component(component.name, component.instance))

new Vue({
  render: h => h(App)
}).$mount('#app')