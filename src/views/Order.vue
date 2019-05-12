<template>
  <div class="order">
    <CommentHeader
    headerText="我的订单"
    />
    <router-view></router-view>
    <FootGuide/>
  </div>
</template>

<script>
// import UnLogin from "../components/UnLogin.vue";
import FootGuide from "../components/FootGuide.vue";
import CommentHeader from "../components/CommentHeader.vue";
import {getStore} from "../extend/storage.js"
export default {
  name: "order",
  components: {
    // UnLogin,
    FootGuide,
    CommentHeader
  },
  data() {
    return{

    }
  },

  beforeMount() {
    console.log(getStore('userinfo'))

    if(getStore('userinfo')!=null){
      console.log(this.$route)
      this.$router.replace({name: 'orderlist'})
    }
  }

};
</script>

<style lang='stylus' scoped>
.un-login
  margin-top 10vh
</style>
