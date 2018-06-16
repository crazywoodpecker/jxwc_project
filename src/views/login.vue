<template>
  <div class="login">
    <div class="from">
      <span>
        <img src="../assets/image/logo@2x.png" height="60pt" width="60pt" alt="郏县妇幼保健院">
      </span>
      <p>
        郏县母子健康手册
      </p>
    <group label-width="5.5em" label-margin-right="2em" label-align="justify">
      <x-input v-model="passWord" placeholder="请输入身份证号">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/image/身份证@2x.png" width="24" height="24">
      </x-input>
      <x-input v-model="userName" placeholder="请输入姓名">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/image/用户名@2x.png" width="24" height="24">
      </x-input>
      <x-input name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/image/手机@2x.png" width="24" height="24">
      </x-input>
      <x-input title="发送验证码" class="weui-vcode">
        <x-button slot="right" mini>发送验证码</x-button>
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/image/验证码@2x.png" width="24" height="24">
      </x-input>
      <x-button type="primary" @click.native="checkLogin">登录</x-button>
    </group>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Group, XInput, XButton } from 'vux'
export default {
  name: 'login',
  components: {
    Group,
    XInput,
    XButton
  },
  data () {
    return {
      title: '母子健康手册',
      userName: '',
      passWord: ''
    }
  },
  methods: {
    checkLogin () {
      axios.get('/users').then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="less">
.weui-btn_primary{
  background-color: #FC4568!important;
  border-radius: 25px!important;
  width: 60%!important;
  margin-top: 20px;
}
.from{
  position: relative;
  top: 50%;
  transform: translateY(-60%);
  text-align: center;
}
.body{
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.login{
  p {
    font-size: 25pt;
    text-align: center;
  }
  overflow: hidden;
  @media screen and (max-height: 667px){
    height: 667px;
  }
    height: 735px;
  width: 100%;
  background-image: url("../assets/image/背景@2x.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
.weui-cell{
  padding: 10px 50px!important;
  background-color: none!important;
}
</style>
