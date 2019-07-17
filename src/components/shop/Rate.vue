 <!--  
 on为上层有填充的组建，
 通过传过来的propos来控制on的宽带
 -->

<template>
  <section class="rate"
  >
    <section style="display: flex">
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
    
    {{rate}}
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

