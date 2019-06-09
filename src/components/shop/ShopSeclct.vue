<template>
  <section class="shop-seclct">
    <el-cascader
      placeholder="分类"
      :options="seclctArr"
      :show-all-levels="false"
      :props="{
            label: 'name',
            value: 'id',
            children: 'sub_categories'
            }"
      @change="seclctRes"
    >
      <template slot-scope="{ node, data }" >
        <section class="seclct-node"
        @click="test(data)"
        >
          <div class="node-left">
            <img :src="getImgPath(data.image_url)" alt class="seclct-img">
            <span>{{ data.name }}</span>
          </div>
          <span>{{data.count}}</span>
        </section>
      </template>
    </el-cascader>
    <el-cascader :options="sortArr"></el-cascader>
    <el-cascader
      :options="seclctArr"
      :props="{
            label: 'name',
            value: 'name',
            children: 'sub_categories'
            }"
    ></el-cascader>
  </section>
</template>

<script>
import { getResCategory } from "@/serve/getData.js";
export default {
  name: "ShopSeclct",
  data() {
    return {
      seclctArr: null,
      sortArr: [
        {
          value: "1",
          label: "起送价"
        },
        {
          value: "2",
          label: "配送速度"
        },
        {
          value: "3",
          label: "评分"
        },
        {
          value: "4",
          label: "智能排序(默认)"
        },
        {
          value: "5",
          label: "距离最近"
        },
        {
          value: "6",
          label: "距离最近"
        },
        {
          value: "6",
          label: "距离最近"
        }
      ]
    };
  },
  methods: {
    //传递过来的图片地址需要处理后才能正常使用
    getImgPath(path) {
      let suffix;
      if (!path) {
        return "//elm.cangdu.org/img/default.jpg";
      }
      if (path.indexOf("jpeg") !== -1) {
        suffix = ".jpeg";
      } else {
        suffix = ".png";
      }
      let url =
        "/" +
        path.substr(0, 1) +
        "/" +
        path.substr(1, 2) +
        "/" +
        path.substr(3) +
        suffix;
      return "https://fuss10.elemecdn.com" + url;
    },
    seclctRes(value){
        this.$store.commit('setRestaurantId', [value[1]])
    },
    test(data) {
        console.log(data)
    }
  },
  created() {
    getResCategory().then(res => {
      this.seclctArr = res.data;
    });
  }
};
</script>

<style lang="stylus" scoped>
.shop-seclct {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.seclct-node
    display flex
    height  100%
    justify-content space-between
    align-items center
    img 
        height 15px
</style>

