<template>
  <section class="num-control">
    <svg v-show="isShow" class="icon" aria-hidden="true" @click="num--">
      <use xlink:href="#icon-Minuswithcircle" />
    </svg>
    <span v-show="isShow">{{num}}</span>
    <svg class="icon" aria-hidden="true" @click="numAdd">
      <use xlink:href="#icon-add" />
    </svg>
  </section>
</template>

<script>
export default {
  name: "NumControl",
  data: () => {
    return {
      num: 0,
      show: false
    };
  },
  computed: {
    isShow() {
      return this.num == 0 ? false : true;
    }
  },
  methods: {
    numAdd() {
      this.$emit('test','test')
      this.num ++
    }
  }
};
</script>

<style lang="stylus" scoped>
.num-control {
  margin: 0 1vw;
  transition: all 0.8s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    padding: 0 1vw;
    color: #4fc3f7;
  }
}
</style>

