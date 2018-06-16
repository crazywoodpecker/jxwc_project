<template>
    <div class="doctor">
      <popup-header
        :left-text="'返回'"
        :right-text= "'首页'"
        :title= "'保健医生'"
        @on-click-left="goback"
        @on-click-right="goindex"
        ></popup-header>
        <div class="msgContent" v-for="item of data" v-bind:key="item.name">
            <div class="left">
                <img src="../../assets/image/mydocer.png">
            </div>
            <div class="right" v-if="item.name = true">
                <p>
                  <span style="margin-right:10px;font-size:18px">
                    <b>姓名：{{item.name}}</b>
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
    </div>
</template>
<script>
import { PopupHeader } from 'vux'

export default {
  name: 'doctor',
  components: {
    PopupHeader
  },
  data () {
    return {
      data: [
        {
          name: '',
          position: '主任医师',
          dep: '产科',
          address: '北京婦幼保健醫院',
          introduce:
            '简介：子宫颈病变及子宫颈HPV感染、反复发作引导炎及盆腔炎、反复流产保胎，孕前保健。'
        },
        {
          name: '張醫生',
          position: '主任医师',
          dep: '产科',
          address: '北京婦幼保健醫院',
          introduce:
            '简介：子宫颈病变及子宫颈HPV感染、反复发作引导炎及盆腔炎、反复流产保胎，孕前保健。'
        },
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
    goindex () {
      this.$router.push({path: '/PreparationOfPregnancy'})
    },
    goback () {
      window.history.go(-1)
    }
  }
}
</script>
<style lang="less">
.doctor{
  text-align: left;
}
.msgContent{
  display: flex;
  text-align: left;
  .right{
    font-size: 13px;
    padding: 5px;
  }
}
</style>
