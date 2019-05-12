<template>
  <div class="foot-guide">
    <el-menu :defaultActive="activeDetection()" class="el-menu" mode="horizontal" :router="true">
      <el-menu-item
        v-for="(item,index) in this.navItems"
        :key="index"
        :index="index.toString()"
        :route="`/${item.icon}`"
        class="nav-item"
      >
        <svg class="icon" aria-hidden="true" :style="green(index)">
          <use :xlink:href="iconClassName(index)"></use>
        </svg>
        <span>{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
// import { CLIENT_RENEG_LIMIT } from 'tls';
// import { constants } from 'crypto';
export default {
  name: "FootGuide",
  components: {},
  // props: ["navItems"],
  data() {
    return {
      activeIndex: "0",
      islogin: "1",
      navItems: [
        {
          name: "外卖",
          icon: "msite"
        },
        {
          name: "搜索",
          icon: "search"
        },
        {
          name: "订单",
          icon: "order"
        },
        {
          name: "我的",
          icon: "profile"
        }
      ],
      color: {
        color: "#409EFF"
      }
    };
  },
  methods: {
    // handSelect(key, keyPath) {
    //   // console.log(key, keyPath, this.navItems);
    // },

    green(index) {
      return this.activeIndex == index ? this.color : "";
    },

    iconClassName(index) {
      return `#icon-${this.navItems[index].icon}`;
    },

    returnRouter() {},
    activeDetection() {
      this.navItems.forEach((value, key) => {
        // 根据路由来判断activeIndex
        if (this.$route.path.indexOf(value.icon) != -1) {
          // console.log(value, value.icon, this.$route.name);
          this.activeIndex = `${key}`;
          // console.log(this.activeIndex)
        }
      });
      return `${this.activeIndex}`;
    }
  },
  computed: {},
  mounted() {
    // this.activeDetection()
  }
};
</script>

<style lang="stylus" scoped>
.foot-guide {
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;

  .el-menu {
    box-shadow: 0 -0.266667vw 0.533333vw rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;

    .nav-item {
      width: 25vw;
      height: 14vw;
      line-height: 4vw;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      font-size: 4vw;
      // justify-items center
      // justify-content space-between
      // justify-content space-between
      // height auto
      // line-height 20px;
    }
  }
}
</style>
