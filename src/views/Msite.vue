<template>
  <div >
    <CommentHeader headerText="无法获取地理位置" textRouter="/city" headerIcon="#icon-search" routerNext="/order" />
    <el-carousel height="45vw" :autoplay="false" indicator-position=none>
      <el-carousel-item v-for="(card,index) in cards" :key="index">
        <MistCard v-for="(list,index) in card" :key="index" :text="list.text" :src="list.src"/>
      </el-carousel-item>
    </el-carousel>
    <FootGuide/>
  </div>
</template>

<script>
import FootGuide from "../components/FootGuide.vue";
import CommentHeader from "../components/CommentHeader.vue";
import MistCard from "../components/mist/MistCard.vue";

// import { getCity } from "../serve/getData";


export default {
  name: "msite",
  components: {
    FootGuide,
    CommentHeader,
    MistCard
  },
  data() {
    return {
      cards: [
        [
          {
            src:"https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
            text: "美食",
            rou: "/order"
          },
          {
            src:"https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
            text: "超市便利",
            rou: "/order"
          },
          {
            src:"https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
            text: "水果",
            rou: "/order"
          },
        
          {
            src:"https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
            text: "医药健康",
            rou: "/order"
          },
          {
            src:"https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
            text: "浪漫鲜花",
            rou: "/order"
          },
            {
            src:"https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
            text: "汉堡披萨",
            rou: "/order"
          },
          {
            src:"https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
            text: "厨房生鲜",
            rou: "/order"
          },
          {
            src:"https://fuss10.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
            text: "炸鸡炸串",
            rou: "/order"
          }
          ,{
            src:"https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
            text: "地方菜系",
            rou: "/order"
          }
          ,{
            src:"https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
            text: "麻辣烫",
            rou: "/order"
          }
          
        ],
        [
          {
            src:"https://fuss10.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
            text: "素食简餐",
            rou: "/order"
          },
          {
            src:"https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
            text: "地方小吃",
            rou: "/order"
          }
        ]
      ]
    };
  },
  methods: {
  
  },
  created() {
    
  }
};
</script>

<style lang='stylus' scoped>
.el-carousel {
  margin: 16vw 0 25vw 0;
  .el-carousel__item {
    display flex
    flex-wrap wrap
  }
}
</style>
