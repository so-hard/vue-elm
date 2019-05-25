<template>
  <div class="order-list-detail">
    <CommentHeader headerText="订单详情"/>
    <section>
      <section class="order-head">
        <img :src="imgBase+orderDetail._doc.restaurant_image_url" alt>
        <h1>{{orderDetail._doc.status_bar.title}}</h1>
        <el-button type="primary" plain>再来一单</el-button>
      </section>
      <section class="restaurant-card">
        <div class="ret-header">
          <div>
            <img :src="imgBase+orderDetail._doc.restaurant_image_url" alt="">
            <span>{{orderDetail._doc.restaurant_name}}</span>
          </div>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-rerurn"></use>
            </svg>
          </span>
        </div>
        <div class="food-item"
        v-for="(item, index) in orderDetail._doc.basket.group[0]"
        :key=index
        >
        <span class="food-name">
          {{item.name}}
        </span>
          <div>
            <span class="quantity">×{{item.quantity}}</span>
            <span class="price">￥{{item.price}}</span>
          </div>
        </div>
        
          <div class="food-item">
          <span class="food-name">
          {{orderDetail._doc.basket.deliver_fee.name}}
          </span>
          <div>
            <span class="quantity">×{{orderDetail._doc.basket.deliver_fee.quantity}}</span>
            <span class="price">￥{{orderDetail._doc.basket.deliver_fee.price}}</span>
          </div>
        </div>
        <!-- 配送费以及其他的 -->
        <div class="food-item">
          <span class="food-name">
          {{orderDetail._doc.basket.packing_fee.name}}
          </span>
          <div>
            <span class="quantity">×{{orderDetail._doc.basket.packing_fee.quantity}}</span>
            <span class="price">￥{{orderDetail._doc.basket.packing_fee.price}}</span>
          </div>
        </div>
        <div class="food-item">
          <span class="food-name">
          
          </span>
          <div style="width:40vw">
            <span class="quantity">实付</span>
            <span class="price" style="font-weight: bolder">￥{{orderDetail._doc.total_amount}}</span>
          </div>
        </div>
        
      </section>
      <section class="delivery-infomation">
        <div class="del-header">
          配送信息
        </div>
        <div class="del-list">
          <span>送达时间:</span>
          <span>{{orderDetail.deliver_time}}</span>
        </div>
        <div class="del-list">
          <span style="align-self:flex-start">送货地址:</span>
          <div>
            <p>{{orderDetail.consignee}}</p>
            <p>{{orderDetail.phone}}</p>
            <p>{{orderDetail.addressDetail}}</p>
          </div>
        </div>
        <div class="del-list">
          <span>配送方式:</span>
          <span>蜂鸟专送</span>
        </div>
      </section>
       <section class="delivery-infomation">
        <div class="del-header">
          订单信息
        </div>
        <div class="del-list">
          <span>订单号:</span>
          <span>{{orderDetail._doc.unique_id}}</span>
        </div>
        <div class="del-list">
          <span>支付方式:</span>
          <span>{{orderDetail.pay_method}}</span>
        </div>
        <div class="del-list">
          <span>下单时间:</span>
          <span>{{orderDetail._doc.formatted_created_at}}</span>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import CommentHeader from "../../components/CommentHeader.vue";

import { mapState } from "vuex";
import { getOrderDetail } from "../../serve/getData";

export default {
  name: "OrderListDetail",
  components: {
    CommentHeader
  },
  data() {
    return {
      imgBase: "//elm.cangdu.org/img/",
      orderDetail: ''
    };
  },
  created() {
    // console.lgo(this.orderDetail,111)
     getOrderDetail(
       this.userId,
       this.$route.params.orderNum
        ).then(
          res => {
            this.orderDetail = res.data
            console.log(res)
          }
    );
  },
  computed: {
    ...mapState({
      userId: state => state.user.userId
    })
  }
};
</script>

<style lang="stylus" scoped>
detail-comment-style()
    background-color #fafafa
    margin 4vw 0  
    width 95vw
    box-shadow 0 0 2vw 0.5vw #bdbdbd 
    display flex
    flex-direction column
    align-items center

.order-list-detail 
  margin: 15vw 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  // bottom: 0;
  z-index: 101;
  background-color: #eeeeee;
  display flex
  flex-direction column
  align-items center
  // &::-webkit-scrollbar { width: 0 !important }
  .order-head
    detail-comment-style()
    img 
      width 30vw
      height 30vw
      border-radius 100%
      margin  2vw 0
      box-shadow 0 0 10vw 1vw #bdbdbd 
    .el-button
      margin  2vw 0
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
    div 
      width 40%
      display flex
      justify-content space-between
      .quantity
        margin 0 4vw 0 0
  .delivery-infomation
    detail-comment-style()
    display flex
    flex-direction column
    div
      width 90%
      min-height  5vw
    .del-header
      text-align left 
      font-weight bolder
      padding 1vw 0 
    .del-list
      text-align left
      display flex
      align-items center
      padding 1vw 0 
      border-bottom 1px solid #e0e0e0
      div
        max-width 70%
      // span 
      //   line-height 5vw


</style>

