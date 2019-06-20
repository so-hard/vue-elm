import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'




Vue.config.productionTip = false
Vue.directive('scroll', {
  inserted: function (el, binding) {
    //节流
    let Timeout;
    let time = 800
    if(binding.value.time != null) {
      time = binding.value.time
    }  
    
    const onScoll = () => {
      if (!Timeout)
        Timeout = setTimeout(()=> {
          binding.value.hey(el, binding.value.val)
          Timeout = null
        }, time)
    }
    console.log(binding.arg)
    el._onScroll = onScoll
    if(binding.modifiers.cur){
      el.addEventListener('scroll',onScoll)
      binding.cur = 1
    }else{
      window.addEventListener('scroll', onScoll)
    }
  },

  unbind: function(el) {
    if(el.cur){
      el.removeEventListener('scroll',el._onScroll);
    }else{
      window.removeEventListener('scroll',el._onScroll);
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

