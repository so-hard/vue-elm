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
    // console.log(binding.value.time)
    // 判断是否传入时间参数
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
    el._onScroll = onScoll
    window.addEventListener('scroll', onScoll)
  },

  unbind: function(el) {
    window.removeEventListener('scroll',el._onScroll);
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

