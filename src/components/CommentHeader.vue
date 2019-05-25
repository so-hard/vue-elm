<template>
  <div class="comment-header">
    <div class="header-svg" @click="go()">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="showIcon"></use>
      </svg>
    </div>
    <div class="header-text">{{headerText}}</div>
    <div></div>
  </div>
</template>

<script>
import router from '../router';
export default {
  name: "CommentHeader",
  data() {
    return {
        defineIcon: '#icon-rerurn',

    };
  },
  props: ["headerIcon", "headerText",'routerNext' ],
  methods: {
    go(){
      if(this.routerNext){
        router.push(this.routerNext)
      }else{
        router.go(-1)
      }
    }
  },
  computed: {
      showIcon(){
        return  this.headerIcon ? this.headerIcon : this.defineIcon
      },
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

