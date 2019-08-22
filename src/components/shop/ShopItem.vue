<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 17:56:41
 * @LastEditTime: 2019-08-22 14:16:39
 * @LastEditors: Please set LastEditors
 -->
<template>
  <section class="shop-item">
    <Loading v-if="show" />
    <!-- 顶部随机推荐 -->
    <!-- <section>
            
    </section>-->
    <!-- 左侧导航 -->
    <section class="left">
      <ul>
        <li
          class="left-tag"
          v-for="(item, index) in getItemsHeader"
          :key="item.id"
          ref="leftTag"
          :class="index == 0 ? 'active' : ''"
          @click="locatTag(index)"
        >{{item.name}}
          <Tag v-if="(getItemCartNum(item.id))>0? true:false">
            {{getItemCartNum(item.id)}}
          </Tag> 
        </li>
      </ul>
    </section>
    <!-- 右侧菜品 -->
    <section
      class="right"
      ref="items"
      v-scroll.cur="{hey}"
      :style="{
      overflowY: scroll
    }"
    >
      <section class="item" v-for="lists in restaurant_items" :key="lists.id">
        <div class="title">
          <span>{{lists.name}}</span>
          <span class="description">{{lists.description}}</span>
        </div>
        <section class="item-food" v-for="list in lists.foods" :key="list.item_id">
          <el-image :src="baseImg+list.image_path" fit="contain" lazy></el-image>
          <section class="item-description item-size">
            <section class="item-top">
              <h5 class="item-head">{{list.name}}</h5>
              <div class="item-detail item-size">{{list.description}}</div>
              <div class="item-tips item-size">{{list.tips}}</div>
              <Rate :rate="list.rating" />
            </section>
            <section class="item-bottom">
              <div class="item-fooder">
                <span style="color: red">{{list.specfoods[0].price}}￥起送</span>
                <div class="item-control">
                  <NumControl
                    @getOrderNum="getOrderNum"
                    :itemid="lists.id"
                    :shopdata="formatData(list.specfoods[0])"
                  />
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
    <el-badge v-show="!show" :value="shopCartNum" class="car" :hidden="shopCartNum>0?false:true">
      <el-button
        circle
        type="primary"
        :icon="shopCartNum>0?'el-icon-shopping-cart-full':'el-icon-shopping-cart-1'"
        @click="drawer = true"
      ></el-button>
    </el-badge>
    <el-drawer title="cart" :visible.sync="drawer" direction="btt">
      <!-- <section v-for="list in getCartShop" :key="list.id">{{list}}</section> -->
    </el-drawer>
  </section>
</template>

<script>
import { removeClass, setClass } from "../../extend/classAction";
import Rate from "./Rate";
import Loading from "./../Loading";
import NumControl from "./NumControl";
import Tag from "./../Tag"

import { setStore } from "./../../extend/storage";
import { mapGetters } from "vuex";

export default {
  components: {
    Loading,
    NumControl,
    Rate,
    Tag
  },
  name: "shopitem",
  data() {
    return {
      baseImg: "//elm.cangdu.org/img/",
      resId: null,
      show: true,
      itemsHeight: [],
      scroll: "hidden",
      restaurant_items: null,
      shopCartNum: 0,
      drawer: false
    };
  },
  methods: {
    hey(el) {
      this.itemsHeight.forEach(val => {
        if (
          el.scrollTop >= val.off &&
          el.scrollTop < val.off + val.hight - 10
        ) {
          // console.log(el.scrollTop,val.off)
          setClass(val.tagDom, "active");
        } else {
          removeClass(val.tagDom, "active");
        }
      });
    },
    getOrderNum() {
      // console.log(this.$store.state.shop)
      let key = this.$store.state.shop.resId
      this.shopCartNum = this.$store.getters.getTotalNum(key);
    },
    getItemHead(data) {
      //侧导航
      this.itemName = data.map(val => {
        return val.name;
      });
    },

    locatTag(index) {
      this.$refs.items.scrollTop = this.itemsHeight[index].off;
    },

    getItemHeight() {
      return [...this.$refs.items.childNodes].map((val, index) => {
        return {
          tagDom: this.$refs.leftTag[index],
          off: Math.round(val.offsetTop),
          hight: val.clientHeight
        };
      });
    },
    formatData(data) {
      let result = {};
      result.attrs = [];
      result.estra = {};
      result.id = data.food_id;
      result.name = data.name;
      result.packing_fee = data.packing_fee;
      result.price = data.price;
      result.sku_id = data.sku_id;
      result.specs = data.specs;
      result.stock = data.stock;
      result.quantity = 0
      return result
    }
  },
  computed: {
    ...mapGetters(["getItemsHeader","getItemCartNum"]),
  },
  created() {
    //分发action
    this.$store
      .dispatch("fetchShopItems")
      .then(res => {
        // 获取组件高度
        this.restaurant_items = res;
      })
      .then(() => {
        this.getOrderNum();
        this.itemsHeight = this.getItemHeight();
        this.show = false;
      });
  },
  beforeDestroy() {
    let data = this.$store.state.shop.shoppingCar;
    console.log(data)
    setStore("cart", data);
  },
  watch: {
    "$store.state.shop.is_scoll": function() {
      this.scroll = this.$store.state.shop.is_scoll;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/mix';

.shop-item {
  position: relative;
  display: flex;
  justify-content: flex-end;
  height: 93vh;

  .left {
    width: 30vw;
    display: flex;
    flex-direction: column;
    fontOver();
    overflow-y: hidden;
    background: #eeeeee;

    ul {
      width: 32vw;
      overflow-y: scroll;
      overflow-x: hidden;

      li {
        position relative
        width: 30vw;
        fontOver();
        padding: 2vw 0;
      }
    }
  }

  .right {
    width: 70vw;
    position: relative;
    // overflow-y: scroll;
    scroll-behavior: smooth;

    .item {
      fontOver();
      text-align: left;
      // width 70vw
      // overflow-x scroll
      // height 200vw
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      // width 70.vw
      padding: 1vw;

      .item-food {
        padding: 1vw 0;
        display: flex;
        align-items: center;
        height: 25vw;
        width: 100%;
        overflow: hidden;

        .el-image {
          width: 24vw;
          height: 18vw;
          padding: 1vw;
          margin: 1vw;
          border: 0.5vw #eeeeee solid;
          border-radius: 5px;
        }

        .item-size {
          font-size: 3vw;
          color: #757575;
        }

        .item-description {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .item-top {
            width: 43vw;

            .item-head {
              fontOver();
              font-size: 4.5vw;
              color: #000;
            }

            .rate {
              width: 25vw;
            }
          }

          .item-bottom {
            width: 100%;

            .item-fooder {
              font-size: 4vw;
              display: flex;
              justify-content: space-between;
            }
          }
        }
      }

      .title {
        font-size: 5vw;
        color: #757575;

        .description {
          font-size: 3vw;
          margin: 0 0 0 2vw;
          color: #9e9e9e;
        }
      }
    }
  }

  .car {
    position: fixed;
    bottom: 0;
    transform: translate(-5vw, 0);
  }
}
</style>
