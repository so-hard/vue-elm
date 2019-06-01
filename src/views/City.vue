<template>
  <section class="city">
    <CommentHeader
    headerText="选择地址"
    />
    <section class="address-select">
      <el-button 
          slot="prepend" 
          @click="moveTo">
          <i class="el-icon-arrow-down el-icon--right"></i>
          {{city.name}}
          </el-button>
        <el-input placeholder="请输入内容" >
        </el-input>
    </section>
    <router-view> </router-view>
    <section class="cur-adress">
      <div class="header">
        <p>当前地址</p> 
      </div>
      <section class="address-list">
          {{city.name}}
      </section>
    </section>
  </section>
</template>

<script>
import CommentHeader from "../components/CommentHeader.vue";

export default {
  name: 'city',
  components: {
    CommentHeader
  },
  data (){
    return {
      input1: '',
      city: ''
    }
  },
  methods:{
    moveTo(){
      this.$router.push('/cityList')
    }
  },
  mounted(){
    if(this.$store.state.city.curCity != null){
          // console.log(this.$store.state)
      this.city  =  this.$store.state.city.curCity
    }
  }
  
}
</script>

<style lang="stylus" scoped>
.city
  background #f5f5f5

.address-select
  // margin-top 15vw
  padding 1vw
  width 95%
  display flex
  margin 15vw auto 0 auto 
  .el-button
      text-overflow ellipsis
      white-space nowrap
      overflow hidden
      width 25vw
      padding 1vw
      margin-right 1vw
.address-input
  // margin 1vw
  padding 1vw



.cur-adress
  background #f5f5f5
  padding  1vw 0
  text-align left 
  .header
    font-size 2vw
    padding  2vw
    background #eeeeee
  .address-list
    padding 2vw
    font-weight 900

</style>

