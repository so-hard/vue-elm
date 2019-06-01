import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'




Vue.config.productionTip = false
Vue.directive('scroll', {
  inserted: function (el, binding) {
    // console.log(binding.value)
    let f = function () {
      if (binding.value.hey(el,binding.value.val)) {
        console.log(111)
        window.removeEventListener('scroll', f)
      }
    }
    
  //   let f = function () {
     
  //   }
  window.addEventListener('scroll', f)
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

