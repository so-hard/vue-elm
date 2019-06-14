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
    let f = function () {
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

  unbind: function(el) {
    window.removeEventListener('scroll',el._onScroll);
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

