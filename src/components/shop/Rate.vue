<template>
  <section class="rate"
  >
    <section class="on"
      :style="{width: returnRate}"
    >
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-on"
      ></i>
    </section>
    <section class="off">
      <i class="el-icon-star-off"></i>
      <i class="el-icon-star-off"></i>
      <i class="el-icon-star-off"></i>
      <i class="el-icon-star-off"></i>
      <i class="el-icon-star-off"></i>
    </section>
  </section>
</template>

<script>
export default {
  name: "Rate",
  props:['rate'],
  computed: {
    returnRate() {

      return `${this.rate/5*100}%`

    }
  }
};
</script>

<style lang="stylus">
.rate
  display: flex;
  align-items center
  .on
    display: flex;
    color: yellow;
    overflow hidden
  .off
    display: flex;
    position absolute
</style>

