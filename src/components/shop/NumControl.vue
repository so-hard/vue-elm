<!--
 * @Description: In User Settings Edit
 * @Author: so-hard
 * @Date: 2019-08-20 16:06:41
 * @LastEditTime: 2019-08-22 12:27:48
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
  props: ['shopdata','itemid'],
  methods: {
    numDone(name){
      let shopdata = this.shopdata
      this.$store.commit(name,{
        shopdata,
        itemid:this.itemid
      })
      this.num = this.$store.getters.getCarListNum(this.itemid,shopdata.id)
      this.$emit('getOrderNum')
    }
  },
  mounted(){
    let shopdata = this.shopdata
    this.num = this.$store.getters.getCarListNum(this.itemid,shopdata.id)
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

