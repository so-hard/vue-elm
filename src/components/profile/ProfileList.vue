<template >
  <div class="profile-list" @click="goNext(routerNext)">
    <div class="list-left">
      <svg class="icon" aria-hidden="true" :style="{color:liColor}">
        <use :xlink:href="iconName"></use>
      </svg>
      <div class="text">{{text}}</div>
    </div>
    <div>></div>
  </div>
</template>

<script>
import router from '../../router';
export default {
  name: "ProfileList",
  data(){
      return{
      }
  },
  props: ['iconName', 'text','routerNext','liColor'],
  methods: {
    goNext(index) {
      router.push(index)
    }
  }
};
</script>

<style lang="stylus" scoped>
.profile-list, 
    // height 10vw
    display flex
    align-items center
    justify-content space-between
    padding 10px 10px
    .list-left
        display flex
        align-items center
        // height 15vw
        svg 
          padding 0 10px 0 0
.bootom
      border-bottom  1px #E4E7ED solid 


</style>

