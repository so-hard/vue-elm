<template>
  <section class="shop-item">
    <section class="left"></section>
    <section class="right">
      <section class="scoll">

      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'shopitem'
}
</script>

<style lang="stylus" scoped>
w = 50vw

.right
  height 100vw
  width w
  position relative
  .scoll
    position absolute
    height 200vw
    width w
</style>
