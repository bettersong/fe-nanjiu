import Vue from 'vue'
import App from './App.vue'
import {toRem} from "./utils/toRem"
import vLazy from './utils/v-lazy'
toRem()
// initViewport()
window.addEventListener('resize', () => {
  toRem()
  // initViewport()
})
Vue.config.productionTip = false
Vue.use(vLazy)

new Vue({
  render: h => h(App),
}).$mount('#app')
