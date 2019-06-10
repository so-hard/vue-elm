<template>
  <section>
    <CommentHeader
      :headerText="text"    
     /> 
     <ShopMain />
  </section>
</template>

<script>
import CommentHeader  from "../../src/components/CommentHeader"
import ShopMain from "../components/shop/ShopMain"
export default {
  name: "shop",
  components: {
    CommentHeader,
    ShopMain,
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

