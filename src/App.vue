<!--
 * @Description: 初始化获取购物车本地存储
 * @Author: so-hard
 * @Date: 2019-08-21 19:21:30
 * @LastEditTime: 2019-08-21 19:25:31
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
// import FootGuide from "./components/FootGuide.vue";
// import { METHODS } from 'http';
import { getStore } from "./extend/storage.js";
import {mapMutations,mapState} from "vuex"
// import { userInfo } from 'os';
export default {
  name: "app",
  components: {
  },
  data() {
    return {

    };
  },
  methods: {
    ...mapMutations([
      'setUserInfo',
      'setUserId',
      'setCart'
    ]),
    
  },
  computed: {
    ...mapState({
        userInfo:state => state.user.userInfo,
    })
  },

  created() {
    let userinfo = getStore("userinfo"),
    userCart = getStore('cart')
    if (userinfo != null||userCart !=null) {
      this.setUserInfo(userinfo);
      this.setCart(userCart)
    }
  }
};
</script>




<style lang="stylus" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align center
  color: #2c3e50;
  font-size: 5vw;
  // background #fff
}


</style>
