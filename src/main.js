import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'




Vue.config.productionTip = false
Vue.directive('scroll', {
  inserted: function (el, binding) {
    // console.log(binding.value)
    // let debounceTimeout = null

    //节流
    let Timeout;
    let f = function () {
      // console.log(111)
      binding.value.hey(el, binding.value.val)
      Timeout = null
    }
    const onScoll = () => {
      if (!Timeout)
        Timeout = setTimeout(f, 800)
    }

    el._onScroll = onScoll
    window.addEventListener('scroll', onScoll)
  },

  unbind: function(el,binding) {
    window.removeEventListener('scroll',el._onScroll);
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

