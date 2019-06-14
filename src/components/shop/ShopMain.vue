<template>
  <section class="shop-main" v-scroll="{hey,offset}">
    <Loading  v-show="loadingConr"/>
    <ShopSeclct />
    <ShopList v-for="list in RestaurantList" :key="list.id" :list="list"/>
  </section>
</template>

<script>
import ShopList from './ShopList';
import ShopSeclct from './ShopSeclct'
import Loading from '../Loading'

import { getShoppingRestaurants } from "../../serve/getData";

export default {
  name: "ShopMain",
  components: {
    ShopList,
    ShopSeclct,
    Loading
  },
  props: ["text"],
  data() {
    return {
      curAddress: null,
      RestaurantList: null,
      offset: 0,
      loadingConr: true,
      rate: ""
    };
  },
  computed: {
    getShopPara() {
      return {
        latitude: this.curAddress.latitude,
        longitude: this.curAddress.longitude,
        offset: this.offset,
        limit: 20,
        restaurant_category_id: [],
        order_by: this.$store.getters.gtOrderId,
        delivery_mode: null,
        support_ids: null,
        restaurant_category_ids: this.$store.getters.getRestaurantId
      };
    }
  },
  methods: {
    hey() {
      if (
        window.scrollY + document.documentElement.clientHeight ==
        document.documentElement.scrollHeight
      ) {
        this.offset += 20;
        this.getRestaurantList();
      }
    },
    getRestaurantList() {
      this.loadingConr = true;
      getShoppingRestaurants(this.getShopPara).then(res => {
        if (this.RestaurantList == null) {
          this.RestaurantList = res.data;
        } else {
          res.data.forEach(element => {
            this.RestaurantList.push(element);
          });
        }
        this.loadingConr = false;
      });
    }
  },
  created() {
    this.curAddress = this.$store.getters.curAddress;
    this.getRestaurantList();
  },
  watch: {
    "$store.state.shop.restaurant_category_id":function(){
        //清空data数据以及offset
      this.offset = 0;
      this.RestaurantList = null;
    this.getRestaurantList()
    },
    "$store.state.shop.order_by":function(){
      this.offset = 0;
      this.RestaurantList = null;
    this.getRestaurantList()
    }
  }
};
</script>

<style lang="stylus" scoped></style>

