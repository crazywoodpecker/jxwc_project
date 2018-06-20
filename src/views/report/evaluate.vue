<template>
    <div class="evaluate">
      <popup-header :left-text="'返回'" :right-text="'首页'" :title= "'评价'" @on-click-left="goback">
          <img slot="left-text" style="padding-right:10px;display:block;height:15px;width:10px;margin-top:15px" src="../../assets/image/返回@2x.png" width="30" height="30">
      </popup-header>
      <div class="msgContent" v-for="item of data" v-bind:key="item.name">
            <div class="left">
                <img src="../../assets/image/mydocer.png">
            </div>
            <div class="right">
                <p>
                  <span style="margin-right:10px;font-size:18px">
                    <b>{{item.name}}</b>
                  </span>
                  <span style="margin-right:10px;">
                    {{item.position}}
                    </span>
                  <span>
                    {{item.dep}}
                  </span>
                  </p>
                <p  style="margin-top:5px;"><span>
                  {{item.address}}
                  </span></p>
                <p style="margin-top:5px;">{{item.introduce}}</p>
            </div>
        </div>
        <group>
            <cell title="评价医生：">
                <rater v-model="data5" star="✩" active-color="#FF9900" :margin="0"></rater>
            </cell>
        </group>
    <x-button type="primary" @click.native="goto">提交评价</x-button>
    </div>
</template>
<script>
import { Cell, PopupHeader, XButton, Rater, Group, Range } from 'vux'
export default {
  components: {
    Cell,
    PopupHeader,
    XButton,
    Rater,
    Group,
    Range
  },
  data () {
    return {
      data: [
        {
          name: '張醫生',
          position: '主任医师',
          dep: '产科',
          address: '北京婦幼保健醫院',
          introduce:
            '简介：子宫颈病变及子宫颈HPV感染、反复发作引导炎及盆腔炎、反复流产保胎，孕前保健。'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
.evaluate{
  .weui-btn_primary{
    background-color: #FC4568!important;
    border-radius: 25px!important;
    width: 60%!important;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .type{
    border-bottom: 10px solid #E8E8E8;
    font-size: 14pt;
  }
  .hospt{
    border-bottom: 10px solid #E8E8E8;
  }
  .msgContent{
      border-bottom: 1px solid #E8E8E8;
      display: flex;
      margin-top: 15px;
  }
  .weui-cell__ft{
      padding-right: 90px;
  }
  .vux-label{
      margin-left: 25px;
  }
}
</style>
