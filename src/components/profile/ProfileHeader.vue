<template>
  <div class="profile-header" @click="this.toLogin">
    <div class="header-left">
      <div class="header-img">
        <img :src="this.userInfoimgurl"  >
      </div>
      <div class="header-name">
        <div>
          <!-- <p>456</p> -->
            {{this.name}}
            <!-- wz -->
        </div>
        <span class="iconfont icon-phone" >没有绑定手机</span>
      </div>
    </div>
    <div style="margin: 0 10px">
        >
    </div>
  </div>
</template>

<script>
import  {mapState}  from 'vuex'
export default {
  name: "ProfileHeader",
  data() {
    return {
      imgBase: "//elm.cangdu.org/img/",
      name: '登录注册',
      userInfoimgurl:'data:image/jpeg;base64,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'
    };
  },
//   props: ["name", "imgurl"],
  computed: {
    ...mapState({
        userInfo:state => state.user.userInfo,
    }),
  },
  methods:{
      initData() {
          if(this.userInfo){
              this.name = this.userInfo.username;
              this.userInfoimgurl= this.imgBase + this.userInfo.avatar;
          }
      },
      toLogin(){
        if(this.userInfo == null) {
          this.$router.push('login')
        }
      }
  },
  created(){
      this.initData()
      console.log(typeof this.userInfo)
  }
};
</script>

<style lang="stylus" scoped>
.profile-header 
    color #fff
    // height 100px
    display flex
    align-items center
    justify-content space-between
    background #409EFF
    height 15vw
    padding 2vw 
    .header-left
        display  flex
        align-items center
        img 
            margin 0 2vw
            height   15vw
            border-radius 50%
</style>

