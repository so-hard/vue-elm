<template>
  <div @click="City()">
    <CommentHeader
      headerText="无法获取地理位置"
      headerIcon="#icon-search"
      routerNext="/order"
    />
     <el-carousel 
     height="150px"
     :autoplay=false
     >
      <el-carousel-item 
      v-for="item in 2" 
      :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <FootGuide/>
  </div>
</template>

<script>
import FootGuide from "../components/FootGuide.vue";
import CommentHeader from "../components/CommentHeader.vue";
import { getCity } from "../serve/getData";

export default {
  name: "msite",
  components: {
    FootGuide,
    CommentHeader
  },
  data() {
    return {};
  },
  methods: {
    City() {
      getCity();
    }
  },
  beforeMount(){
    
  }
};
</script>

<style lang='stylus' scoped>
.el-carousel
  margin-top 10vw
  
</style>
