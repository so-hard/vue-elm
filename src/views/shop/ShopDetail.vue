<template>
  <section class="shop-detail" >
    <header>
      <section class="header-top" :style="img">
        <img :src="baseImg+headerDate.image_path" alt="">
      </section>
      <section class="header-body">
        <h2>{{headerDate.name}}</h2>
        <p>{{`评价${headerDate.rating} 月售${headerDate.recent_order_num}`}}</p>
        <p> <span v-for="list in headerDate.supports" :key="list.id">{{list.icon_name}}</span></p>
        <p style="font-size:2vw">{{`公告： ${headerDate.promotion_info}`}}</p>
      </section>
      <section >
        <el-menu mode="horizontal" default-active="1">
          <el-menu-item index="1">点餐</el-menu-item>
          <el-menu-item index="2">评价</el-menu-item>
          <el-menu-item index="3">商家</el-menu-item>
        </el-menu>
      </section>
      
    </header>
    <section class="">
      <router-view ></router-view>
    </section>
  </section>
</template>

<script>
import {getRestaurantDetail} from  '../../serve/getData'
export default {
  name: 'shopdetail',
  data() {
    return{
      headerDate: {},
      baseImg: "//elm.cangdu.org/img/"
    }
  },
  computed:{
    img(){
      return{
        backgroundImage: `url("${this.baseImg + this.headerDate.image_path}")`
      } 
    }
  },
  props: ['id'],
  created() {
    getRestaurantDetail(this.id).then((res) => {
      this.headerDate = res.data
    })
  }
}
</script>

<style lang="stylus" scoped>
header 
.shop-detail
  border-bottom 1px 
  background #fff
  .header-top
    height 25vw
    position relative
    background-position center
    background-size cover
    z-index 1
    &:after
      content ''
      top 0
      height 25vw
      width 100vw
      display block
      position absolute
      background: inherit;
      z-index 2
      filter: blur(10px);
    img
      z-index 11
      position relative
      height w=20vw
      width w
      transform translateY(60%)
      box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  .header-body
    margin-top 10vw
    p
      padding 1vw
      span 
        padding: 1vw;
        margin: 1vw;
        border: 1px solid #dcdfe6;
  .el-menu
    display flex
    justify-content center
</style>

