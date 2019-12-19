<template>
  <div class="login-class">
  <div class="login_class_div">
  <el-form :model="loginData" :rules="rules" ref="loginData" >
    <el-form-item label="用户名" prop="userName">

    <el-input v-model="loginData.userName" placeholder="请输入用户名">
      <template slot="prepend" ><svg-icon icon-class="user-01-svg"> </svg-icon></template>
    </el-input></el-form-item>
    <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="loginData.password" placeholder="请输入密码">
    <template slot="prepend" ><svg-icon icon-class="svg-password-01-svg"> </svg-icon></template>
    </el-input></el-form-item>
   <el-form-item label="验证码" >

    <el-input  v-model="checksignData" placeholder="请输入验证码" >
   <template slot="prepend" ><svg-icon icon-class="svg-checkdata-svg-01"> </svg-icon></template>
     <template slot="append"> <el-button style="background-color:white;" @click="createCodeInfo"> {{checkData}}</el-button></template>
    </el-input>
  </el-form-item>
     <el-form-item>
       <el-button type="primary" @click="loginSubmit"><span>login</span></el-button>
       <el-button @click="registSubmit"> 注册</el-button>
    </el-form-item>
  </el-form>
  </div>
  </div>
</template>

<script>
import {createCode} from '../../js/util/util.js'
import {getRequest, postRequest} from '../../js/util/api.js'

export default {
  data () {
    return {
      loginData: {
        userName: '',
        password: ''
      },
      checksignData: '',
      lable_style: 'width:300px; text-align: left;',
      checkData: '',
      rules: {
        userName: [{
          required: true, message: '请输入用户名', trigger: 'blur'
        }],
        password: [{
          required: true, message: '请输入密码', trigger: 'blur'
        }]
      }
    }
  },
  created () {
    this.createCodeInfo()
    this.updateTitle()
  },
  methods: {
    registSubmit () {
      this.$router.push({ path: '/regist', name: 'regist'})
    },
    //  title标题修改
    updateTitle () {
      document.title = '用户登录'
    },
    createCodeInfo () {
      this.checkData = createCode(6)
    },

    loginSubmit () {
      /** 测试阶段禁用 */
      // // 验证码必输项
      if (this.checksignData === undefined || this.checksignData === null || this.checksignData === '') { return }
      console.log(this.checksignData)
      if (this.checksignData.toLowerCase() !== this.checkData.toLowerCase()) {
        this.$message.error('验证码错误')
        // 重置验证码
        this.createCodeInfo()
        return
      }
      // 验证码验证成功之后 调用登录接口
      var data = {userName: this.loginData.userName, userPassword: this.loginData.password}
      postRequest('/api/user/login', data).then((res) => {
        console.log(res.data)
        if (res.data.code === 0) {
          // 跳转到首页
          // eslint-disable-next-line standard/object-curly-even-spacing
          this.$router.push({ path: '/index', name: 'index', params: {loginData: this.loginData, token: res.data.data}})
        }
      }).catch(() => {
        this.$message.error('错误')
      })
      // 刷新 验证码
      this.createCodeInfo()
    }
  }
}
</script>

<style>
.login-class{

  background-image: url("../../image/backgroud-03.gif")  ;
  /* background-repeat:no-repeat; */
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  }
  .login_class_div{
    width: 50%;
    height: 90%;
    padding-top: 10% ;
    margin-left: 25%
  }

</style>
