<template>
  <section class="shop-item">
    <Loading v-if="show" />
    <!-- 顶部随机推荐 -->
    <!-- <section>
            
    </section>-->
    <!-- 左侧导航 -->
    <section class="left">
      <ul>
        <li
          class="left-tag"
          v-for="(item, index) in itemNames"
          :key="index"
          ref="leftTag"
          :class="index == 0 ? 'active' : ''"
          @click="locatTag(index)"
        >{{item}}</li>
      </ul>
    </section>
    <!-- 右侧菜品 -->
    <section class="right" ref="items" v-scroll.cur="{hey}">
      <section class="item" v-for="lists in item" :key="lists.id">
        <div class="title">
          <span>{{lists.name}}</span>
          <span class="description">{{lists.description}}</span>
        </div>
        <section class="item-food" v-for="list in lists.foods" :key="list.item_id">
          <el-image :src="baseImg+list.image_path" fit="contain" lazy></el-image>
          <section class="item-description item-size">
            <section class="item-top">
              <h5 class="item-head">{{list.name}}</h5>
              <div class="item-detail item-size">{{list.description}}</div>
              <div class="item-tips item-size">{{list.tips}}</div>
              <Rate :rate="list.rating" />
            </section>
            <section class="item-bottom">
              <div class="item-fooder">
                <span style="color: red">{{list.specfoods[0].price}}￥起送</span>
                <div class="item-control">
                  <NumControl />
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
import { getShiopItem } from "../../serve/getData";
import { removeClass, setClass } from "../../extend/classAction";
import Rate from "./Rate";
import Loading from "./../Loading";
import NumControl from "./NumControl";

export default {
  components: {
    Loading,
    NumControl,
    Rate
  },
  name: "shopitem",
  data() {
    return {
      baseImg: "//elm.cangdu.org/img/",
      resId: null,
      item: null,
      itemNames: null,
      show: true,
      itemsHeight: []
    };
  },
  methods: {
    hey(el) {
      this.itemsHeight.forEach(val => {
        if (
          el.scrollTop >= val.off &&
          el.scrollTop < val.off + val.hight - 10
        ) {
          // console.log(el.scrollTop,val.off)
          setClass(val.tagDom, "active");
        } else {
          removeClass(val.tagDom, "active");
        }
      });
    },

    getItemHead(data) {
      //侧导航
      this.itemName = data.map(val => {
        return val.name;
      });
    },

    locatTag(index) {
      this.$refs.items.scrollTop = this.itemsHeight[index].off;
    },

    getItemHeight() {
      return [...this.$refs.items.childNodes].map(
            (val, index) => {
              return {
                tagDom: this.$refs.leftTag[index],
                off: Math.round(val.offsetTop),
                hight: val.clientHeight,
              };
            }
          );
    }
  },
  computed: {},
  mounted() {
    //分发action
    this.$store
      .dispatch("fetchShopItems")
      .then(() => {
        //给组件赋值
        this.item = this.$store.state.shop.restaurant_items;
        this.itemNames = this.$store.getters.getItemsHeader;
      })
      .then(() => {
        // 获取组件高度
          this.itemsHeight = this.getItemHeight()
      })
      .then(()=> {
        this.show = false
      });

  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/mix';

.shop-item {
  position: relative;
  display: flex;
  justify-content: flex-end;
  height: 90vh;

  .left {
    width: 30vw;
    display: flex;
    flex-direction: column;
    fontOver();
    overflow-y: hidden;
    background: #eeeeee;

    ul {
      width: 32vw;
      overflow-y: scroll;
      overflow-x: hidden;

      li {
        width: 30vw;
        fontOver();
        padding: 2vw;
      }
    }
  }

  .right {
    width: 70vw;
    position: relative;
    overflow-y: scroll;
    scroll-behavior: smooth;

    .item {
      fontOver();
      text-align: left;
      // width 70vw
      // overflow-x scroll
      // height 200vw
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      // width 70.vw
      padding: 1vw;

      .item-food {
        padding: 1vw 0;
        display: flex;
        align-items: center;
        height: 25vw;
        width: 100%;
        overflow: hidden;

        .el-image {
          width: 24vw;
          height: 18vw;
          padding: 1vw;
          margin: 1vw;
          border: 0.5vw #eeeeee solid;
          border-radius: 5px;
        }

        .item-size {
          font-size: 3vw;
          color: #757575;
        }

        .item-description {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .item-top {
            width: 43vw;

            .item-head {
              fontOver();
              font-size: 4.5vw;
              color: #000;
            }

            .rate {
              width: 25vw;
            }
          }

          .item-bottom {
            width: 100%;

            .item-fooder {
              font-size: 4vw;
              display: flex;
              justify-content: space-between;
            }
          }
        }
      }

      .title {
        font-size: 5vw;
        color: #757575;

        .description {
          font-size: 3vw;
          margin: 0 0 0 2vw;
          color: #9e9e9e;
        }
      }
    }
  }
}
</style>
