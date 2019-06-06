<template>
  <div class="msite">
    <CommentHeader
      :headerText="showAddres"
      textRouter="/city"
      headerIcon="#icon-search"
      routerNext="/order"
    />
    <el-carousel height="45vw" :autoplay="false" indicator-position="none">
      <el-carousel-item 
      v-for="(card,index) in cards" 
      :key="index">
        <MsiteCard 
        v-for="(list,index) in card" 
        :key="index" 
        :text="list.title" 
        :src="list.image_url"/>
      </el-carousel-item>
    </el-carousel>
    <section class="msite-shop">
      <p>附近商家</p>
      <shop/>
    </section>
    <FootGuide/>
  </div>
</template>

<script>
import FootGuide from "../components/FootGuide.vue";
import CommentHeader from "../components/CommentHeader.vue";
import MsiteCard from "../components/msite/MsiteCard.vue";
import shop from "./shop.vue"

import { getFoodType } from "../serve/getData";

export default {
  name: "msite",
  components: {
    FootGuide,
    CommentHeader,
    MsiteCard,
    shop
  },
  data() {
    return {
      cards: [
      ],
      curAddress: ''
    };
  },
  methods: {},
  computed: {
    showAddres(){
      let result;
      switch (typeof this.curAddress ) {
        case 'string':
            result = this.curAddress
          break;
        case 'object':
          result = this.curAddress.address
      }
      return result
    }
  },
  mounted() {
     this.curAddress = this.$store.getters.curAddress
  },
  
  created() {
    getFoodType().then(
      (rep) => {
        console.log(rep.data)
        //拆分数组为两组
        let arr1 = rep.data.splice(0,8);
                // console.log(rep.data)
        this.cards.push(arr1);
        this.cards.push(rep.data)
          
      }
    )
  }

};
</script>

<style lang='stylus' scoped>
.el-carousel 
  margin: 16vw 0 0 0;
  background #fff

  .el-carousel__item 
    display: flex;
    flex-wrap: wrap;

.msite-shop
  margin  0 0 15vw 0
</style>
