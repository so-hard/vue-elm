<!--
 * @Description: 提醒标记组件,elm的标记组件只能在按钮图标上
 * @Author: so-hard
 * @Date: 2019-08-22 13:48:13
 * @LastEditTime: 2019-08-22 14:39:49
 * @LastEditors: Please set LastEditors
 -->
<template>
  <section class="tag">
      <slot></slot>
  </section>
</template>

<script>
export default {
    name: 'Tag'
}
</script>

<style>
    .tag {
        position: absolute;
        top: 0;
        right: 0;
        height: 3vw;
        font-size: 2vw;
        width: 3vw;
        padding: 1vw;
        color: #fff;
        background: #F56C6C;
        border-radius: 50%;
        text-align: center
    }
</style>