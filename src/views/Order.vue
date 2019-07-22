<template>
  <div class="order">
    <CommentHeader
    headerText="我的订单"
    />
    <UnLogin v-if="isShow"/>
    <OrderUl  v-if="!isShow"/>
    <FootGuide />
    <router-view></router-view>
  </div>
</template>

<script>
// import UnLogin from "../components/UnLogin.vue"
import OrderUl from "../components/order/OrderUl.vue"

import UnLogin from "../components/UnLogin.vue"
import FootGuide from "../components/FootGuide.vue"
import CommentHeader from "../components/CommentHeader.vue"
import {mapMutations,mapState} from "vuex"
// import { userInfo } from 'os';
export default {
  name: "order",
  components: {
    FootGuide,
    CommentHeader,
    OrderUl,
    UnLogin
  },
  data() {
    return{
    }
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
       userId: state => state.user.userId
    }),

    //判断是否登录然后设置vuex的userid
    isShow() {
      if(this.userInfo != null) {
        this.setUserId(this.userInfo.user_id)
        return false
      }else{
        // this.setUserId(this.userInfo.user_id)
        return true
      }
    }
  },
 

  // created() {
  //     // getOrder(1,10,0)
  // }

};
</script>

<style lang='stylus' scoped>
.order
  height 100vh
// .un-login
//   margin-bottom: 25vw

// .order-ul
//   margin-bottom: 25vw
</style>
