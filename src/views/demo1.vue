<template>
  <div id="demo1">
      <div class="login">
          <div class="from">
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
  </div>
</template>
<script>
import tab from '../components/tabbar'
import { Group, XInput, XButton, ViewBox } from 'vux'
import '../assets/css/style.css'
export default {
  name: 'demo1',
  components: {
    tab,
    Group,
    XInput,
    ViewBox,
    XButton
  },
  data () {
    return {
      sid: '',
      mobil: ''
    }
  }
}
</script>

<style scoped>
</style>
