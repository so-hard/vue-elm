<template>
  <section class="num-control">
    <svg v-show="num === 0 ? false : true" class="icon" aria-hidden="true" @click="numReduce">
      <use xlink:href="#icon-Minuswithcircle" />
    </svg>
    <span v-show="num === 0 ? false : true">{{num}}</span>
    <svg class="icon" aria-hidden="true" @click="numAdd">
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
    numAdd() {
      let shop = this.shop
      this.$store.commit('addShopCar',shop)
      this.num = this.$store.getters.getCarListNum(shop)
    },
    numReduce(){
      let shop = this.shop
      this.$store.commit('decreaseShopCar',shop)
      this.num = this.$store.getters.getCarListNum(shop)
    }
  },
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

