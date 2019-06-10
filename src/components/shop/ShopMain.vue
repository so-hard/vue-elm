<template>
  <section class="shop-main" v-scroll="{hey,offset}">
    <ShopSeclct />
    <ShopList v-for="list in RestaurantList" :key="list.id" :list="list"/>
  </section>
</template>

<script>
import ShopList from './ShopList';
import ShopSeclct from './ShopSeclct'

import { getShoppingRestaurants } from "../../serve/getData";

export default {
  name: "ShopMain",
  components: {
    ShopList,
    ShopSeclct
  },
  props: ["text"],
  data() {
    return {
      curAddress: null,
      RestaurantList: null,
      offset: 0,
      loadingConr: false,
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
        this.loadingConr = true;
        this.offset += 20;
        this.getRestaurantList();
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
        this.loadingConr = false;
      });
    }
  },
  mounted() {
    this.loadingConr = true;
    this.curAddress = this.$store.getters.curAddress;
    this.getRestaurantList();
  },
  watch: {
    "$store.state.shop.restaurant_category_id": function() {
      this.loadingConr = true;
      this.offset = 0;
      this.RestaurantList = null;
      this.getRestaurantList();
    },
    "$store.state.shop.order_by": function() {
      this.loadingConr = true;
      this.offset = 0;
      this.RestaurantList = null;
      this.getRestaurantList();
    }
  }
};
</script>

<style lang="stylus" scoped></style>

