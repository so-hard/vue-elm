<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 14:53:49
 * @LastEditTime: 2019-09-03 00:07:26
 * @LastEditors: Please set LastEditors
 -->
<template>
  <section class="shop-detail"  v-scroll={hey,time:0}>
    <CommentHeader background='transparent' position='absolute'/>
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
    </header>


    <section class="detail-main"  >
      <el-menu default-active="shopitem" 	:router="true" mode="horizontal">
          <el-menu-item index="shopitem">点餐</el-menu-item>
          <el-menu-item index="comment">评价</el-menu-item>
          <el-menu-item index="owner">商家</el-menu-item>
      </el-menu>
      <router-view ></router-view>
    </section>
  </section>
</template>

<script>
import CommentHeader from './../../components/CommentHeader'
export default {
  name: 'shopdetail',
  components:{
    CommentHeader
  },
  data() {
    return{
      headerDate: [],
      baseImg: "//elm.cangdu.org/img/",
    }
  },
  computed:{
    img(){
      return{
        backgroundImage: `url("${this.baseImg + this.headerDate.image_path}")`
      } 
    }
  },
  methods: {
    checkId() {
      // console.log() 
      if( isNaN(this.id)) {
        this.$router.push('/msite')
      }else{
        this.$store.commit('setResId',this.id)
      }
    },
    hey(){
      console.log(window.scrollY)
        if(window.scrollY >= 250){
          // setClass(el,"fixed")
          if(this.$store.state.shop.is_scoll != 'scroll') {
              this.$store.commit('setScroll','scroll')
          }
        } else{
          // console.log(this.$store.state.shop.is_scoll)
          if(this.$store.state.shop.is_scoll != 'hidden') {
              this.$store.commit('setScroll','hidden')
          }
        }
    }
  },
  props: ['id'],
  created(){
    this.checkId()
    this.$store.commit('setCurCart')
  },
  mounted() {
    this.$store.dispatch('fetchRestaurantDetail')
    .then( (res)=> {
      this.headerDate = res
    })
  },
  watch: {
    
  }
}
</script>

<style lang="stylus" scoped>
 @import '../../assets/css/mix';



header 
.shop-detail
  // position relative
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
.detail-main
  position relative
  width 100vw
  height 100vh
  // overflow scroll
  .el-menu
    background #fff
    z-index 99
    width 100vw
    display flex
    justify-content center
    .el-menu-item
      height 7vh
</style>

