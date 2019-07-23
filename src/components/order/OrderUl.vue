<template>
  <div class="order-ul">
    <OrderList
    v-for="(list,index) in orders"
    :key=index
    :listData=list
    />
  </div>
</template>

<script>
import OrderList from "./OrderList.vue";

import { mapState } from "vuex";
import { getOrder } from "../../serve/getData.js";
export default {
  name: "OrderUl",
  components: {
    OrderList
  },
  data(){
      return {
        orders: ''
      }
  },
  methods: {},
  created() {
    getOrder(this.userId, 10, 0).then(res => {
      this.orders = res.data;
    });
  },
  computed: {
    ...mapState({
      userId: state => state.user.userId
    })
  }
};
</script>

<style lang="stylus" scoped>

</style>

