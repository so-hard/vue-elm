<template>
  <div id="app">
    <router-view></router-view>
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
    // FootGuide
  },
  data() {
    return {

    };
  },
  methods: {
    ...mapMutations([
      'setUserInfo',
      'setUserId'
    ]),
    
  },
  computed: {
    ...mapState({
        userInfo:state => state.user.userInfo,
    })

  },


  created() {
    let userinfo = getStore("userinfo")
    if (userinfo != null) {
      // console.log(typeof userInfo)
        // console.log(userInfo)
      this.setUserInfo(userinfo);
      this.setUserId(this.userInfo.user_id)
    }
  }
};
</script>




<style lang="stylus" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 5vw;
  background #fff
}


</style>
