<template>
    <div class="detailedMsg">
      <popup-header
        :left-text="'返回'"
        :right-text= "'首页'"
        :title= "'消息'"
        @on-click-left="goback"
        @on-click-right="goindex"
        ></popup-header>
        <div class="msgContent" v-for="item of data" v-bind:key="item.title">
            <div class="left">
                <img src="../../assets/image/系统助手@2x.png">
            </div>
            <div class="right">
                <p>
                  <span style="margin-right:10px;font-size:15px">
                    <b>{{item.title}}</b>
                  </span>
                </p>
                <p style="margin-top:5px;">{{item.introduce}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { PopupHeader } from 'vux'

export default {
  name: 'detailedMsg',
  components: {
    PopupHeader
  },
  data () {
    return {
      data: [
        {
          title: '系统通知消息',
          introduce:
            '子宫颈病变及子宫颈HPV感染、反复发作引导炎及盆腔炎、反复流产保胎，孕前保健。'
        },
        {
          title: '重大通知',
          introduce:
            '子宫颈病变及子宫颈HPV感染、反复发作引导炎及盆腔炎、反复流产保胎，孕前保健。'
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
.detailedMsg{
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
.left{
    img{
        height: 50px;
        width: 50px;
        padding: 13px;
    }
}
</style>
