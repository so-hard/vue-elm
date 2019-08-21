<!--
 * @Description: In User Settings Edit
 * @Author: so-hard
 * @Date: 2019-08-20 16:06:41
 * @LastEditTime: 2019-08-21 11:44:38
 * @LastEditors: Please set LastEditors
 -->
<template>
  <section class="num-control">
    <svg v-show="num === 0 ? false : true" class="icon" aria-hidden="true" @click="()=> numDone('decreaseShopCar')">
      <use xlink:href="#icon-Minuswithcircle" />
    </svg>
    <span v-show="num === 0 ? false : true">{{num}}</span>
    <svg class="icon" aria-hidden="true" @click="()=> numDone('addShopCar')">
      <use xlink:href="#icon-add" />
    </svg>
  </section>
</template>

<script>
export default {
  name: "NumControl",
  data: () => {
    return {
      num: 0,
      show: false
    };
  },
  props: ['shop'],
  methods: {
    numDone(name){
      let shop = this.shop
      this.$store.commit(name,shop)
      this.num = this.$store.getters.getCarListNum(shop._id)
      this.$emit('getOrderNum')
    }
  },
  mounted(){
    let shop = this.shop
    this.num = this.$store.getters.getCarListNum(shop._id)
  }
};
</script>

<style lang="stylus" scoped>
.num-control {
  margin: 0 1vw;
  transition: all 0.8s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    padding: 0 1vw;
    color: #4fc3f7;
  }
}
</style>

