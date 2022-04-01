import Vue from 'vue'
import App from './App.vue'
import {toRem,initViewport} from "./utils/toRem"
toRem()
initViewport()
window.addEventListener('resize', () => {
  toRem()
  // initViewport()
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
