import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import {removeClass,setClass} from './extend/classAction'

Vue.config.productionTip = false
Vue.directive('scroll', {
  inserted: function (el, binding,) {
    
    let f = function () {
      // if (binding.value(evt, el)) {
      //   window.removeEventListener('scroll', f)
      // }
      console.log(window.scrollY)
      if( window.scrollY >= binding.value.off && window.scrollY < binding.value.off+ binding.value.hight-10){
        console.log("skr")
        setClass(el,'skr')
      }else{
        removeClass(el,'skr')
      }
    }
    // let elArry = []
    // elArry.push(binding.value)
    window.addEventListener('scroll', f)
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

