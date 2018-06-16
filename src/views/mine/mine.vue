<template>
  <div class="mine">
      <div class="topHeader">
        <div class="left">
          <img class="portrait" src="../../assets/image/系统助手@2x.png">
          <div>
            <p style="font-size:15pt;color:white;">张曼</p>
            <p style="font-size:10pt;color:white;margin-top:10px;"><img src="../../assets/image/地址@2x.png">王家村</p>
          </div>
        </div>
        <div class="right">
          <p>
            孕9周+6天
          </p>
        </div>
      </div>
      <div class="content">
        <group>
            <cell is-link title="我的检查单" link="/find/secondPage" v-on="sendParams"></cell>
            <cell is-link title="我的评价" link="/component/tabbar-icon"></cell>
            <cell is-link title="关于我们" link="/component/tabbar-icon"></cell>
            <cell is-link title="技术支持" link="/component/tabbar-icon"></cell>
            <cell is-link title="问题反馈" link="/component/tabbar-icon"></cell>
        </group>
      </div>
      <div class="btn">
          <x-button type="primary" @click.native="checkLogin">退出登录</x-button>
      </div>
      <tab></tab>
  </div>
</template>
<script>
import { Group, XInput, XButton, Cell } from 'vux'
import tab from '../../components/tabbar'
export default {
  name: 'mine',
  components: {
    Group,
    XInput,
    XButton,
    Cell,
    tab
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
.weui-btn_primary{
    color: #FC4568!important;
  background-color: white!important;
  border: 1px solid #FC4568!important;
  border-radius: 25px!important;
  width: 60%!important;
  margin-top: 20px;
}
.right{
  margin-top: 10%;
  p{
    margin-top: 7%;
    margin-left: 20%;
    color: white;
    font-size: 20pt;
  }
  background-image: url("../../assets/image/孕期背景@2x.png");
  background-repeat: no-repeat;
  height: 87px;
  width: 200px;
}
.topHeader{
  display: flex;
  height: 119pt;
  width: 100%;
  background-image: url("../../assets/image/minbackground.png");
  background-repeat: no-repeat;
  background-size: 100%;
  .left{
    display: flex;
    width: 52%;
    .portrait{
      margin-left: 18%;
      margin-top: 17%;
      margin-right: 7%;
      height: 50pt;
      width: 50pt;
    }
    div{
      height: 30px;
      line-height: 30px;
      margin-top: 17%;
      img{
        height: 20px;
        width: 20px;
      }
    }
  }
}
</style>
