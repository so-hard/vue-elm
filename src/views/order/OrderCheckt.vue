<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 10:25:40
 * @LastEditTime: 2019-09-05 01:35:15
 * @LastEditors: Please set LastEditors
 -->
<template>
  <section class="order-check">
    <CommentHeader headerText="确认订单" position="static"/>
    <main>
      <header>
        <p class="title">订单配送致</p>
        <h1><span>{{curCity.address+curCity.name}}</span><span>></span></h1>
        <p>wu1777</p>
      </header>
      <div class="time">
        <p><span>送达时间</span><span style="color:#2395ff">{{curCart.delivery_reach_time}}</span></p>
        <p><span>支付方式</span><span style="color:#2395ff">在线支付</span></p>
      </div>
      <section class="restaurant-card">
        <div class="ret-header">
          <div>
            <img :src="imgBase+curCart.cart.restaurant_info.image_path" alt="">
            <span>{{curCart.cart.restaurant_info.name}}</span>
          </div>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-rerurn"></use>
            </svg>
          </span>
        </div>
        <div class="food-item" v-for="(item, index) in curCart.cart.groups[0]" :key=index>
          <span class="food-name">
            {{item.name}}
          </span>
          <div>
            <span class="quantity">×{{item.quantity}}</span>
            <span class="price">￥{{item.price}}</span>
          </div>
        </div>

        <!-- 配送费以及其他的 -->
        <div class="food-item">
          <span class="food-name">
            {{curCart.cart.extra[0].name}}
          </span>
          <div>
            <span class="quantity">×{{curCart.cart.extra[0].quantity}}</span>
            <span class="price">￥{{curCart.cart.extra[0].price}}</span>
          </div>
        </div>
        <div class="food-item">
          <span class="food-name">
          </span>
          <div style="width:40vw">
            <span class="quantity">实付</span>
            <span class="price" style="font-weight: bolder">￥{{curCart.cart.total}}</span>
          </div>
        </div>
      </section>
      <section class="checkout-section">
        <p><span>订单备注</span><span>口味偏好</span></p>
        <p><span>发票信息</span><span>不需要发票</span></p>
      </section>
      <footer>
        <span>总价</span> <el-button type="primary"> 提交</el-button>
      </footer>
    </main>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import CommentHeader from './../../components/CommentHeader'
export default {
  name: "OrderCheckt",
  components: {
    CommentHeader
  },
  data(){
    return {
      imgBase: "//elm.cangdu.org/img/",
    }
  },
  computed: mapState({
    curCart: state => state.shop.curCart,
    curCity: state => state.city.curAdddress || state.city.defaultAddress
    })
  ,
  created(){
     
  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/mix"
main
  height 90vh
  color #000
  display flex
  flex-flow column nowrap
  align-items center
  // justify-content center
  background linear-gradient(0deg,#f5f5f5,#f5f5f5 65%,hsla(0,0%,96%,.3) 75%,hsla(0,0%,96%,0)),linear-gradient(to right,#42a5f5, #2979ff)

header
  width 95vw
  margin 2vw 0;
  color #fff
  p
    text-align left 
    margin 1vw 
  h1 
    display flex
    justify-content space-between
    align-items center
    span 
      fontOver()   

.time, .checkout-section
  detail-comment-style()
  height 30vw
  width 95vw
  display  flex
  flex-direction column
  justify-content  center
  p
   width 90%
   display flex
   padding 2vw 0
   justify-content space-between

.restaurant-card
    detail-comment-style()
    .ret-header
      border-bottom 1vw solid #e0e0e0
      // padding  0 2vw
      display flex
      justify-content space-between
      width 90%
      align-items center
      height 12vw
      font-weight 200
      svg 
        transform rotate(180deg)
      span 
        font 
      div
        display flex
        justify-content space-between
        align-items center
        img 
          height 10vw
          margin  0 2vw 0 0
    .food-item 
      display flex
      padding 2vw 0
      width 90%
      justify-content space-between
      border-bottom 1px solid #e0e0e0
      .food-name 
        fontOver()
        // width 60vw

      div 
        width 40%
        display flex
        justify-content space-between
        .quantity
          margin 0 4vw 0 0
footer 
  display flex
  justify-content space-between
  width 90vw
  align-items center
  margin 2vw 0
</style>