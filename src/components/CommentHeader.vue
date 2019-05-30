<template>
  <div class="comment-header">
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
  props: ["headerIcon",'routerNext', "headerText","textRouter",'footerIcon','footerRouter' ],
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
      }
  }
};
</script>

<style lang="stylus" scoped>
.comment-header
    z-index 99
    position fixed;
    top 0;
    width 100%
    color #fff
    display flex
    justify-content space-between
    height 15vw
    align-items center
    background linear-gradient(to right,#42a5f5, #2979ff);
</style>

