<template>
  <div class="un-login">
    <div>
      <el-image :src="url" :fit="fit"></el-image>
    </div>
    <p>登陆后查看订单信息</p>
    <el-button plain type="primary" @click="goLogin()">立即登陆</el-button>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "unlogin",
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png",
      fit: "contain"
    };
  },
  methods: {
    goLogin() {
      router.push("/login");
    }
  }
};
</script>

<style scoped lang='stylus' >
.un-login
  margin-top 15vw
  padding 20px 0
// margin 150px 0 0 0
p {
  margin: 5px 0 5px 0;
}
</style>
