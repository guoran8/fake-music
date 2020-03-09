import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import '@/styles/reset.css' // reset css
import '@/styles/index.css'

// 消除移动端300ms延时
fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
