<template>
  <div class="order-list" @click="goto(listData.unique_id)" >
    <div class="list-img">
      <img :src="imgBase+listData.restaurant_image_url" alt>
    </div>
    <div class="list-content">
      <div class="content-hand">
        <div class="content-title">
          <span class="res-name">{{listData.restaurant_name}}</span>
          <span class="order-status">{{listData.status_bar.title}}</span>
        </div>
        <span class="time">{{listData.formatted_created_at}}</span>
      </div>
      <div class="list-detail">
        <span class="order-detail">{{listData.basket.group[0][0].name}}{{listData.basket.group[0].length > 1 ? ' 等' + listData.basket.group[0].length + '件商品' : ''}}</span>
        <span class="order-price">{{listData.total_amount}}rmb</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "OrderList",
  data() {
    return {
      imgBase: "//elm.cangdu.org/img/",
    };
  },
  props:['listData'],
  methods: {
    goto(orderNum){
      console.log(111)
      this.$router.push({
        path:`order/detail/${orderNum}`
      })
    }
  }

};
</script>

<style lang="stylus" scoped>
@import "../../assets/css/mix"


.order-list
    background #fff
    text-align left 
    margin 5px
    display flex
    height 25vw
    padding 10px
    box-shadow 0 0 10px 1px #9e9e9e
    .list-content
        width 80%
        display flex
        flex-direction column
        justify-content space-between
        padding-left 10px
        .list-detail
          display flex
          justify-content space-between
          .order-detail
            width 40vw
            fontOver()
        .content-hand
            display flex
            flex-direction column
            justify-content space-between
            height 13vw
            border-bottom #e0e0e0 1px solid
            .time
                font-size 0.6em
                font-weight lighter
                text-align left
            .content-title
                display flex
                justify-content space-between
                .order-status
                  font-size 0.8em
    .list-img
        width 18vw
        height 18vw
        img 
            height 100%;
            width 100%
</style>

