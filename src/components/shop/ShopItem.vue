<template>
  <section class="shop-item" >
    <section class="left"></section>
    <section class="right">
      <section class="item"  v-for="lists in item"
      :key=lists.id
      >
        <div class="title">
          <span>{{lists.name}}</span>
          <span class="description">{{lists.description}}</span>
        </div>
        <section class="item-food" 
        v-for="list in lists.foods"
        :key="list.item_id"
        > 
            <img
            style="width: 20vw; height: 20vw" 
            :src="baseImg+list.image_path"
            >
          <section class="item-description item-size">
            <section class="item-top">
              <h5 class="item-head ">{{list.name}}</h5>
              <div class="item-detail item-size">{{list.description}}</div>
              <div class="item-tips item-size">{{list.tips}}</div>
            </section>
            <section class="item-bottom">
              <div class="item-active " v-if="list.activity">
                <span>
                  {{list.activity.image_text}}
                </span>
              </div>
              <div class="item-fooder">
                <span style="color: red">{{list.specfoods[0].price}}</span>
                <div class="item-control">
                  <span>-</span>
                  <span>{{}}</span>
                  <span>+</span>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import {getShiopItem} from '../../serve/getData'


export default {
  name: 'shopitem',
  data() {
    return {
      baseImg: "//elm.cangdu.org/img/",
      resId: null,
      item: [],
      itemName: []
    }
  },
  methods: {
    // hey(el){
    //   if(this.scrollY > 290){
    //     el
    //   }
    // },
    getResId() {
      return new Promise(
        ()=> {
          this.id = this.$store.state.shop.resId
          console.log(this.id)
        })
    },

    getItemHead(data) {
      this.itemName = data.map(
        (val)=> {
          return val.name;
        }
      )
    }
  },
  computed: {
    
  },
  created() {
    this.getResId().then(
      getShiopItem(this.id).then(
        (res)=>{
         this.item = res.data;
         this.getItemHead(res.data)
        }
      )
    )
  }
}
</script>

<style lang="stylus" scoped>
 @import '../../assets/css/mix';
// w = 50vw
  .shop-item
    position relative
    display flex
    .left
      width 30vw
    .right
      // width 90vw
      // overflow-x scroll
      height 200vh
      position relative
      .item
        text-align left 
        width 70vw
        overflow-x scroll
        height 200vw 
        display flex
        flex-direction column
        align-items flex-start
        // width 70.vw
        margin  1vw
        .item-food
          display flex
          align-items center
          height 30vw
          .item-size
            font-size 3.5vw
            color #757575
          .item-description
            width 100%
            display flex
            flex-direction  column
            justify-content space-between
        .title
          font-size 5vw
          color #757575
          .description
            font-size 3vw
            margin 0 0 0 2vw
            color #9e9e9e



</style>
