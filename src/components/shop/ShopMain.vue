<template>
  <section class="shop-main"
  v-scroll="{hey,offset}"
  > 
    <section class="shop-list" v-for="(list) in RestaurantList" :key="list.id">
      <div class="list-left">
        <img :src="baseImg + list.image_path" alt>
      </div>
      <div class="list-right">
        <div class="list-floor">
          <h4 class="list-name">{{list.name}}</h4>
        </div>
        <div class="list-second">
          <div>
            <div>{{list.rating}}月售{{list.recent_order_num}}单</div>
          </div>
          <div class="feng-bird"
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
  </section>
</template>

<script>
import { getShoppingRestaurants } from "../../serve/getData";

export default {
  name: "ShopMain",
  components: {
    
  },
  props: ['text'],
  data() {
    return {
      curAddress: null,
      RestaurantList: null,
      baseImg: "//elm.cangdu.org/img/",
      offset: 0,
      loadingConr: false
    };
  },
  computed: {
    getShopPara() {
      return {
        latitude: this.curAddress.latitude,
        longitude: this.curAddress.longitude,
        offset: this.offset,
        limit: 20,
        restaurant_category_id: null,
        order_by: null,
        delivery_mode: null,
        support_ids: null,
        restaurant_category_ids: null
      };
    }
  },
  methods: {
    hey() {
        if( 
            window.scrollY + document.documentElement.clientHeight == document.documentElement.scrollHeight
            ){  
                this.loadingConr = true
                this.offset +=20
                this.getRestaurantList()
            }
    },
     getRestaurantList() {
       getShoppingRestaurants(this.getShopPara).then(res => {
        if (this.RestaurantList == null) {
          this.RestaurantList = res.data;
        } else {
          res.data.forEach(element => {
            this.RestaurantList.push(element);
          });
        }
      });
    }
  },
      created() {
    this.curAddress = this.$store.getters.curAddress;
    this.getRestaurantList();
  },
};
</script>

<style lang="stylus" scoped>
@import "../../assets/css/mix"


.shop-list {
  height: 30vw;
  width: 100%;
  background: #fff;
  display: flex;
  text-align: left;
  border-bottom: 2px solid #dcdfe6;

  .list-left {
    height: w = 20vw;
    width: w;
    margin: auto 1vw;

    img {
      height: 100%;
      border: 2px solid #dcdfe6;
    }
  }

  .list-right {
    display flex
    flex-direction column
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
      h4{
        width 50vw
        fontOver()
      }
    }

    .list-second, .list-third, .list-fourth {
      height: (25 / 5)vw;
      font-size: 1vw;
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

