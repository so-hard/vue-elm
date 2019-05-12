<template>
  <div class="order-list">
    <div class="list-img">
      <img src="//elm.cangdu.org/img/164ad0b6a3917599.jpg" alt>
    </div>
    <div class="list-content">
      <div class="content-hand">
        <div class="content-title">
          <span>演示效果</span>
          <span>订单送达</span>
        </div>
        <span>time</span>
      </div>
      <div class="list-detail">
        <span>巴拉巴拉芭芭拉</span>
        <span>价格</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getOrder } from "../../serve/getData.js";
export default {
  name: "OrderList",
  data() {
    return {
      imgBase: "//elm.cangdu.org/img/"
    };
  },
  methods: {},
  created() {
    getOrder(this.userId, 10, 0);
  },
  computed: {
    ...mapState({
      userId: state => state.user.userId
    })
  }
};
</script>

<style lang="stylus" scoped>
.order-list
    text-overflow ellipsis
    margin-top 15vw
    display flex
    height 25vw
    padding 10px
    .list-content
        width 80%
        display flex
        flex-direction column
        justify-content space-between
        .content-hand
            display flex
            flex-direction column
            justify-content space-between
            .content-title
                display flex
                justify-content space-between
    .list-img
        width 18vw
        height 18vw
        img 
            height 100%;
            width 100%
</style>

