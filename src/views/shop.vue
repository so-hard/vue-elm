<template>
  <section>
    <CommentHeader
      :headerText="text"    
     /> 
     <ShopMain />
     <FootGuide/>
  </section>
</template>

<script>
import CommentHeader  from "../../src/components/CommentHeader"
import ShopMain from "../components/shop/ShopMain"
import FootGuide from '../components/FootGuide.vue'

export default {
  name: "shop",
  components: {
    CommentHeader,
    ShopMain,
    FootGuide
  },

  // beforeDestroy(){
  //   this.isLoading = false
  // },
  props: ['text'],

}
</script>

<style lang="stylus" scoped>
.shop-main
  margin-top 15vw

</style>

