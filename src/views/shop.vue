<template>
  <section>
    <CommentHeader
      :headerText="text"    
     />  
     <ShopSeclct/>
     <ShopMain />
  </section>
</template>

<script>
import CommentHeader  from "../../src/components/CommentHeader"
import ShopMain from "../components/shop/ShopMain"
import ShopSeclct from "../components/shop/ShopSeclct"

export default {
  name: "shop",
  components: {
    CommentHeader,
    ShopMain,
    ShopSeclct
  },
  props: ['text'],
}
</script>

<style lang="stylus" scoped>
.shop-seclct
  margin-top 15vw

</style>

