<template>
    <div class="evaluateDoc">
      <popup-header
        :left-text="'返回'"
        :right-text= "'首页'"
        :title= "'检查报告'"
        @on-click-left="goback"
        @on-click-right="goindex"
        >
        <img slot="left-text" style="padding-right:10px;display:block;height:15px;width:15px;margin-top:15px" src="../../assets/image/返回@2x.png" width="30" height="30">
        </popup-header>
        <div class="msgContent" v-for="item of data" v-bind:key="item.name">
            <div class="msgTop">
                <div class="left">
                    <img src="../../assets/image/mydocer.png">
                </div>
                <div class="right">
                    <p style="margin-top:15px;">
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
                    <p  style="margin-top:10px;">
                        <span>
                            {{item.address}}
                        </span>
                    </p>
                </div>
            </div>
            <div class="msgButm">
                <ul>
                    <li>检查项目：{{item.check}}</li>
                    <li>检查日期：{{item.checkDate}}</li>
                </ul>
                <button class="checkDoc">查看报告</button>
            </div>
        </div>
    </div>
</template>
<script>
import { PopupHeader } from 'vux'

export default {
  name: 'evaluateDoc',
  components: {
    PopupHeader
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
            '简介：子宫颈病变及子宫颈HPV感染、反复发作引导炎及盆腔炎、反复流产保胎，孕前保健。',
          check: '唐氏筛查综合征筛选',
          checkDate: '2018-09-09'
        },
        {
          name: '張醫生',
          position: '主任医师',
          dep: '产科',
          address: '北京婦幼保健醫院',
          introduce:
            '简介：子宫颈病变及子宫颈HPV感染、反复发作引导炎及盆腔炎、反复流产保胎，孕前保健。',
          check: '唐氏筛查综合征筛选',
          checkDate: '2018-09-09'
        },
        {
          name: '張醫生',
          position: '主任医师',
          dep: '产科',
          address: '北京婦幼保健醫院',
          introduce:
            '简介：子宫颈病变及子宫颈HPV感染、反复发作引导炎及盆腔炎、反复流产保胎，孕前保健。',
          check: '唐氏筛查综合征筛选',
          checkDate: '2018-09-09'
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
.evaluateDoc{
  text-align: left;
  .msgContent{
      border-bottom: 10px solid #E8E8E8
  }
  .msgTop{
    display: flex;
    text-align: left;
    border-bottom: 1px solid #E8E8E8;
    height: 95px;
    .right{
      width: 100%;
      font-size: 13px;
      padding: 5px;
    }
  }
  .msgButm{
      position: relative;
      li{
          padding-left: 15px;
          padding-top: 5px;
          padding-bottom: 5px;
      }
      .checkDoc{
          position: absolute;
          right: 15px;
          top: 15px;
          border-radius: 25px;
          height: 30px;
          width: 100px;
          background-color: white;
          border: 1px solid #FC4568;
          color: #FC4568;
      }
  }
}
</style>
