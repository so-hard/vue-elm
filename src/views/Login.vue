<template>
  <div class="login">
    <div class="login-img">
      <el-image style="width: 130px; height: 56px" :src="url" fit="contain"></el-image>
    </div>

    <div class="login-form">
      <el-form ref="loginForm" :model="loginForm" :rules="rules">
        <el-form-item class="form-item-tel" prop="name">
          <el-input v-model="loginForm.name" maxlength="11" placeholder="用户名" size="large"></el-input>
        </el-form-item>

        <el-form-item class="form-item-pas" prop="pas">
          <el-input v-model="loginForm.pas" placeholder="密码" size="large"></el-input>
        </el-form-item>

        <el-form-item class="form-item-mess" prop="mess">
          <el-input v-model="loginForm.mess" placeholder="验证码" style="heigit" size="large">
            <el-button
              slot="suffix"
              type="text"
              :disabled="buttonIsDisabled"
              @click="getTheUrlBa64"
            >{{butIsConTxt}}</el-button>
            <el-image
              slot="suffix"
              style="width: 80px; height: 40px"
              :src="loginForm.url64"
              maxlength="4"
            ></el-image>
          </el-input>
        </el-form-item>
        <el-button type="success" @click="log('loginForm')">登录</el-button>
        <!-- <el-button type="success" @click="signOut()">退出</el-button> -->
      </el-form>
    </div>
  </div>
</template>

<script>
// import Axios from "../plugins/axios.js";
import { login, getCaptchas, signOut } from "../serve/getData.js";
import {mapMutations} from 'vuex'
// import { readlink } from 'fs';
// axios.defaults.withCredentials = true
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        name: "",
        pas: "",
        mess: "",
        url64: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名名称", trigger: "blur" }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pas: [{ required: true, message: "请输入密码", trigger: "blur" }],
        mess: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },

      butConTxt: "获取验证码",
      isBuShow: false,
      url: "https://shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png"
    };
  },
  created(){
    this.getTheUrlBa64()
  },


  methods: {
    ...mapMutations([
      'setUserInfo'
    ]),

    getTheUrlBa64() {
      getCaptchas().then(
        (response) => {
          // console.log(response)  
          // console.log(response.data.code, this.loginForm.url64);
          //判断是否第一次加载验证码
          if (response.status == 200 && this.loginForm.url64 !== '') {
            this.isBuShow = true;
            this.butConTxt = 6;
            this.countDown();
          }
          //在给验证码赋值
          this.loginForm.url64 = response.data.code;
        }
        
      );
    },

    signOut(){
      signOut()
    },
    //登陆方法
    log(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          login(
            this.loginForm.name,
            this.loginForm.pas,
            this.loginForm.mess
          ).then((res)=> {
            let data = res;
            if( data.data.status == 0 ){
              return
            }
            this.setUserInfo(data.data)
            console.log(data.data)
            this.$router.push('profile')
            console.log(res)
          });
        }
        
      });
    },

    countDown() {
      //验证码倒计时
      // console.log(typeof this.butConTxt, this.butConTxt);
      if (typeof this.butConTxt == "number") {
        for (let i = 0; i <= 5; i++) {
          setTimeout(
            s => {
              // console.log(s.butConTxt);
              s.butConTxt--;
            },
            1000 * i,
            this
          );
        }
      }

      // this.butConTxt = "获取验证码"
    }
  },
  computed: {
   
    //判断验证码的状态
    buttonIsDisabled() {
      let butShow = this.isBuShow;
      console.log(butShow);
      if (this.butConTxt == 0) {
        butShow = false;
      }
      return butShow;
    },

    //验证码内的文本
    butIsConTxt() {
      let contxt = this.butConTxt;
      if (contxt == 0) {
        contxt = "获取验证码";
      }
      return contxt;
    }
  },
  // created() {
  //   this.getTheUrlBa64();
  // }
};
</script>

<style scoped lang="stylus"  >
.login {
  margin: 20vh auto;
  width: 328px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .login-img {
    margin-bottom: 10px;
  }

  .login-form {
    .el-button--success {
      width: 200px;
    }

    .el-form-item {
      margin: 15px 0 10px 0;

      .el-button {
        font-size: 1.2em;
        margin-right: 15px;
        width: 80px;
      }
    }
  }
}
</style>
