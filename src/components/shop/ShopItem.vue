<template>
  <section class="shop-item" v-scroll={hey}>
    <section class="left">
      <ul>
        <li class="left-tag" 
        v-for="(item, index) in itemName"
        :key="index">
          {{item}}
        </li>
      </ul>
    </section>
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
            :src="baseImg+list.image_path"
            >
          <section class="item-description item-size">
            <section class="item-top">
              <h5 class="item-head ">{{list.name}}</h5>
              <div class="item-detail item-size">{{list.description}}</div>
              <div class="item-tips item-size">{{list.tips}}</div>
            </section>
            <section class="item-bottom">
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
      item: null,
      itemName: null
    }
  },
  methods: {
    // hey(el){
    //   if(this.scrollY > 290){
    //     el
    //   }
    // },
    hey(el){
      console.log(el)
    },
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
    justify-content flex-end
    height 90vh
    .left
      width 30vw
      display flex
      flex-direction column
      fontOver()
      overflow-y hidden
      ul
        width 32vw
        overflow-y scroll
        overflow-x hidden
        background #eeeeee
        li
          width 30vw
          fontOver()
          padding 2vw
    .right
      width 70vw
      position relative
      overflow-y scroll
      .item
        fontOver()
        text-align left 
        // width 70vw
        // overflow-x scroll
        // height 200vw 
        display flex
        flex-direction column
        align-items flex-start
        // width 70.vw
        margin  1vw
        .item-food
          padding 1vw 0
          display flex
          align-items center
          height 25vw
          width 100%
          overflow hidden
          img 
            width w = 20vw
            height  w
            padding 1vw
            margin 1vw
            border 0.5vw #eeeeee solid
            border-radius 5px
          .item-size
            font-size 3vw
            color #757575
          .item-description
            height 100%
            width 100%
            display flex
            flex-direction  column
            justify-content space-between
            .item-top
              width 43vw
              .item-head
                fontOver()
                font-size 4.5vw
                color #000
            .item-bottom
              width 100%
              .item-fooder
                display flex
                justify-content space-between
        .title
          font-size 5vw
          color #757575
          .description
            font-size 3vw
            margin 0 0 0 2vw
            color #9e9e9e



</style>
