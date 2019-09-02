<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 23:00:20
 * @LastEditTime: 2019-09-03 00:12:54
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="comment-header" :style="backColorAndPosition">
      <div class="header-svg" @click="headGo()">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="showHeaderIcon"></use>
      </svg>
    </div>
    <div class="header-text" @click="textGo()">{{headerText}}</div>
    <div @click="footerGo()">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="showFooterIcon"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import router from '../router';
export default {
  name: "CommentHeader",
  data() {
    return {
        defineIcon: '#icon-rerurn',
        defineFooterIcon: ''

    };
  },
  //传入三个props 左边的图标 文字  左边图标的转跳， footerRouter
  props: ["headerIcon",'routerNext', "headerText","textRouter",'footerIcon','footerRouter',"background",'position'],
  methods: {
    headGo(){
      if(this.routerNext){
        router.push(this.routerNext)
      }else{
        router.go(-1)
      }
    },
    textGo() {
      if(this.textRouter){
        router.push(this.textRouter)
      }
      
    },
    footerGo (){
      if(this.footerRouter){
        router.push(this.footerRouter)
      }
    }
  },
  computed: {
      showHeaderIcon(){
        return  this.headerIcon ? this.headerIcon : this.defineIcon
      },
      showFooterIcon(){
        return  this.footerIcon ? this.footerIcon : this.defineFooterIcon
      },
      backColorAndPosition(){
        return {
          background: this.background,
          position: this.position 
        }
      }
  }
};
</script>

<style lang="stylus" scoped>
.comment-header
    z-index 99
    position sticky;
    top 0;
    width 100%
    color #fff
    display flex
    justify-content space-between
    height 15vw
    align-items center
    background linear-gradient(to right,#42a5f5, #2979ff);
    .header-text
      width 50% 
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    div 
      margin 1vw
</style>

