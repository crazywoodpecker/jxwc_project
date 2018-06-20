<template>
  <div class="login">
    <div v-transfer-dom>
      <alert v-model="show" :title="'提示'">身份证或手机号错误</alert>
    </div>
    <div v-transfer-dom>
      <alert v-model="show1" :title="'提示'">身份证或手机号不能为空</alert>
    </div>
    <div class="from">
      <span>
        <img src="../assets/image/logo@2x.png" height="60pt" width="60pt" alt="郏县妇幼保健院">
      </span>
      <p>
        郏县母子健康手册
      </p>
    <group label-width="5.5em" label-margin-right="2em" label-align="justify">
      <x-input v-model="sid" placeholder="请输入身份证号">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/image/身份证@2x.png" width="24" height="24">
      </x-input>
      <x-input v-model="mobil" placeholder="请输入预留手机号">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/image/用户名@2x.png" width="24" height="24">
      </x-input>
      <x-button type="primary" @click.native="checkLogin">登录</x-button>
    </group>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Group, XInput, XButton, Alert, TransferDomDirective as TransferDom } from 'vux'
export default {
  name: 'login',
  directives: {
    TransferDom
  },
  components: {
    Group,
    XInput,
    XButton,
    Alert
  },
  data () {
    return {
      sid: '',
      mobil: '',
      dataList: '',
      show: false,
      show1: false
    }
  },
  methods: {
    checkLogin () {
      if (this.sid === '' && this.mobil === '') {
        this.show1 = true
      } else {
        axios.post('http://123.57.205.80:8188/api/UserLogin/CheckUserLogin', {
        // axios.get('/knowledge', {
          sid: this.sid,
          mobil: this.mobil
        }).then(response => {
          this.dataList = JSON.parse(response.data)
          if (this.dataList.status === '1') {
            this.show = true
          } else {
            if (this.dataList.type === '1' && this.dataList.status === '0') {
              this.$router.push('/PreparationOfPregnancy')
            } else if (this.dataList.type === '0' && this.dataList.status === '0') {
              this.$router.push('/pregnancy')
            } else if (this.dataList.type === '3' && this.dataList.status === '0') {
              this.$router.push('/childer')
            } else if (this.dataList.type === '2' && this.dataList.status === '0') {
              this.$router.push('/PreparationOfPregnancy')
            }
            console.log(this.dataList)
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
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
  padding: 10px 70px!important;
}
.weui-cells{
  background: none!important;
}
.weui-cells:after{
  border-bottom: none!important;
}
</style>
