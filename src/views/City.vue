<template>
  <section class="city">
    <CommentHeader headerText="选择地址"/>
    <section class="address-select">
      <el-button slot="prepend" @click="moveTo">
        <i class="el-icon-arrow-down el-icon--right"></i>
        {{city.name}}
      </el-button>
      <el-input placeholder="请输入内容" v-model="keyWorld" @input="goto"></el-input>
    </section>
    <section class="detaileAdresConAddr" v-show="this.keyWorld.length == 0 ? false : true">
      <section 
      class="detaileUlAddr" 
      v-for="(list, index) in detailAddr" 
      :key="index"
      @click="chooseDetailAddAddr(list)"
      >
        <h5>{{list.name}}</h5>
        <p>{{list.address}}</p>
      </section>
    </section>

    <section class="cur-adress">
      <div class="header">
        <p>当前地址</p>
      </div>
      <section class="address-list">
        <h5>{{curAddress.name}}</h5>
        <p>{{curAddress.address}}</p>     
      </section>
    </section>
  </section>
</template>

<script>
import CommentHeader from "../components/CommentHeader.vue";
import { getDeteilAddress } from "../serve/getData";
// import { debounce } from "../extend/classAction";

export default {
  name: "city",
  components: {
    CommentHeader
  },
  data() {
    return {
      input1: "",
      city: "",
      keyWorld: "",
      detailAddr: "",
      flag: false,
      curAddress: ''
    };
  },
  methods: {
    moveTo() {
      this.$router.push("/cityList");
    },
    goto() {
      this.flag = true;
      getDeteilAddress(this.city.id, this.keyWorld).then(res => {
        this.detailAddr = res.data;
      });
    },

    chooseDetailAddAddr(list){
      this.$store.commit('setCurAddress',list);
      this.curAddress = list
      this.keyWorld = '';
      this.$router.push('/msite')
    }
  },
  computed: {
    curAddressDeta () {
      return this.curAddres
  }
  },
  // mounted() {
  //   if (this.$store.state.city.curCity != null) {
  //     // console.log(this.$store.state)
  //     this.city = this.$store.state.city.curCity;
  //   }
  // },
  created() {
      this.city = this.$store.getters.curCity;
      this.curAddress = this.$store.getters.curAddress 
  },
  
};
</script>

<style lang="stylus" scoped>
.city {
  background: #f5f5f5;
}

.address-select {
  // margin-top 15vw
  padding: 1vw;
  width: 95%;
  display: flex;
  margin: 15vw auto 0 auto;

  .el-button {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 25vw;
    padding: 1vw;
    margin-right: 1vw;
  }
}

.address-input {
  // margin 1vw
  padding: 1vw;
}

.detaileAdresConAddr {
    position: absolute;
    // top: 0;
    left: 0;
    right: 0;
  .detaileUlAddr {
    margin: 0 auto;
    text-align: left;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 1vw;
    background: #FFF;
    width: 95%;
    p {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}

.cur-adress {
  background: #f5f5f5;
  padding: 1vw 0;
  text-align: left;

  .header {
    font-size: 2vw;
    padding: 2vw;
    background: #eeeeee;
  }

  .address-list {
    padding: 2vw;
  }
}
</style>

