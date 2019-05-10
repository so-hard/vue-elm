<template>
  <div class="comment-header">
    <div class="header-svg" @click="go()">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="showIcon"></use>
      </svg>
    </div>
    <div class="header-text">{{headerText}}</div>
    <div class="last-svg"
    >
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="lastIcon"></use>
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

    };
  },
  props: ["headerIcon", "headerText",'lastIcon','routerNext' ],
  methods: {
    go(){
      // alert(1)
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
    color #fff
    display flex
    justify-content space-between
    height 10vw
    align-items center
    background #42a5f5
</style>

