<template>
  <section class="shop-list">
    <div class="list-left">
      <img :src="baseImg + list.image_path" alt>
    </div>
    <div class="list-right">
      <div class="list-floor">
        <h4 class="list-name">{{list.name}}</h4>
      </div>
      <div class="list-second">
        <div class="second-left">
          <Rate :rate="list.rating"/>
          {{list.rating}}月售{{list.recent_order_num}}单
        </div>
        <div
          class="feng-bird"
          v-if="list.delivery_mode != null ? true : false"
        >{{list.delivery_mode.text}}</div>
      </div>
      <div class="list-third">
        <span>￥{{list.float_minimum_order_amount}}起送|{{list.piecewise_agent_fee.tips}}</span>
        <span>{{list.distance}}|{{list.order_lead_time}}</span>
      </div>
      <div class="list-fourth">
        <span v-for="list in list.supports" :key="list.id">{{list.icon_name}}</span>
      </div>
    </div>
  </section>
</template>

<script>
import Rate from "./Rate";
export default {
  name: "ShopList",
  components: {
    Rate
  },
  data() {
    return {
      baseImg: "//elm.cangdu.org/img/"
    };
  },
  props: ["list"]
};
</script>

 <style lang="stylus" scoped>
 @import '../../assets/css/mix';

 .shop-list {
   height: 30vw;
   width: 100%;
   background: #fff;
   display: flex;
   text-align: left;
   border-bottom: 2px solid #dcdfe6;

   .list-left {
     z-index: 22;
     height: w = 20vw;
     width: w;
     margin: auto 1vw;

     img {
       height: 100%;
       border: 2px solid #dcdfe6;
     }
   }

   .list-right {
     display: flex;
     flex-direction: column;
     width: 80vw;
     margin: auto 1vw;

     .list-floor {
       display: flex;
       align-items: center;

       &::before {
         content: '品牌';
         font-size: 2vw;
         font-weight: 800;
         border-radius: 5px;
         background-color: yellow;
         padding: 1vw;
         margin: 1vw;
       }

       h4 {
         width: 50vw;
         fontOver();
       }
     }

     .list-second, .list-third, .list-fourth {
       height: (25 / 5)vw;
       font-size: 3.5vw;
       margin: 1vw 0;
       color: #9e9e9e;
       width: 100%;
     }

     .list-third {
       display: flex;
       justify-content: space-between;
     }

     .list-second {
       display: flex;
       justify-content: space-between;
       align-items: center;

       .second-left {
         display: flex;
         align-items: center;
         height: 5vw;

         .rate {
           height: 5vw;
           overflow: hidden;
         }
       }

       .feng-bird {
         padding: 1vw;
         color: #fff;
         background: linear-gradient(to left, #42a5f5, #2979ff);
       }
     }

     .list-fourth {
       span {
         padding: 1vw;
         margin: 1vw;
         border: 1px solid #dcdfe6;
       }
     }
   }
 }
</style>
