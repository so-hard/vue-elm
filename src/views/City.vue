<template>
  <section class="city">
    <CommentHeader headerText="选择城市"/>
    <section class="hot-city">
      <el-tag v-for="(city) in hotCity" :key="city.id" type="info">{{city.name}}</el-tag>
    </section>
    <section class="group-city">
      <section v-for="(city, cityName) in sortgroupcity" :key="cityName" ref="cityHead">
        <div class="city-head" >{{cityName}}</div>
        <div class="city-ul">
          <div class="city-list" v-for="(list) in city" :key="list.id">{{list.name}}</div>
        </div>
      </section>
    </section>
    <section class="locate-head">
        <span v-for="(val,index) in headTop"
        :key="index"
        v-scroll="val"
        @click="loacteCity(val.off)"
        >
            {{val.valInner}}
        </span>
    </section>
  </section>
</template>

<script>
import CommentHeader from "../components/CommentHeader.vue";
// import { setTimeout, setInterval } from 'timers';

export default {
  name: "city",
  data() {
    return {
      hotCity: "",
      allCity: "",
      headTop: []
    };
  },
  components: {
    CommentHeader
  },
  methods: {
    loacteCity(palce){
        console.log(window.scrollY,palce)
        window.scrollTo({
            top: palce ,
            behavior: "smooth"
        }) 
    },
  },
  computed: {
    sortgroupcity() {
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
        if (this.allCity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.allCity[
            String.fromCharCode(i)
          ];
        }
      }
      return sortobj;
    },

    // theScrollTop (){
    //    document.documentElement.scrollTop
    // }
  },
  beforeCreate() {
    this.$store.dispatch("setCurCity", { type: "hot" }).then(res => {
      this.hotCity = res.data;
    });

    this.$store.dispatch("setCurCity", { type: "group" }).then(res => {
      this.allCity = res.data;
      this.$nextTick(() => {
        let cityHead = this.$refs.cityHead;
        console.log(cityHead)
        this.headTop = cityHead.map(val => {
                return {
                    off: Math.round(val.offsetTop- window.screen.height*0.2),
                    valInner: val.childNodes[0].innerHTML ,
                    hight: val.clientHeight,
                    classSkr: ''
                }
        });
      });
    });
    // console.log(this.hotCity)
  },
  mounted() {
     
  }
};
</script>

<style lang="stylus" scoped>
box-show() {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.hot-city {
  box-show();
  margin-top: 15vw;
  padding: 10px;

  .el-tag {
    margin: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}

.group-city {
  margin: 2vw 0;
  text-align: left;

  .city-head {
    background: #F2F6FC;
    padding: 0 0 0 2vw;
    height: h = 5vw;
    line-height: h;
  }

  .city-ul {
    .city-list {
      padding: 0 0 0 2vw;
      height: h = 15vw;
      line-height: h;
      box-show: 0 0 1vw 2vw #e0e0e0;
    }
  }
}


.locate-head
    font-size 20px
    display flex
    flex-direction column
    position fixed
    z-index 999
    right 0
    top 50%
    transform translateY(-50%)
    span 
        transition 0.8s all
        padding 1vw
        // margin 5px 0
    .skr
        // padding 2vw
        transform scale(1.5) translateX(-2vw)
</style>

