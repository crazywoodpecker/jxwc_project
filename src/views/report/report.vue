<template>
    <div class="report">
      <popup-header :left-text="'返回'" :right-text="'首页'" :title= "'检查报告'" @on-click-left="goback">
          <img slot="left-text" style="padding-right:10px;display:block;height:15px;width:15px;margin-top:15px" src="../../assets/image/返回@2x.png" width="30" height="30">
      </popup-header>
    <group>
        <cell class="type" title="唐氏综合征筛选"></cell>
    </group>
    <group>
        <cell title="医院名称" value="北京妇产医院"></cell>
        <cell title="医生名称" value="张小二"></cell>
        <cell class="hospt" title="科室" value="产科"></cell>
    </group>
    <group v-bind:key="item" v-for="item of data" >
        <cell v-bind:title="item.title" v-bind:value="item.project"></cell>
    </group>
    <x-button type="primary" @click.native="goto">评价医生</x-button>
    </div>
</template>
<script>
import { Cell, PopupHeader, XButton } from 'vux'
export default {
  components: {
    Cell,
    PopupHeader,
    XButton
  },
  data () {
    return {
      msg: '检查项目1',
      data: [
        {
          'title': '姓名',
          'project': '检查项目1'
        },
        {
          'title': '姓名',
          'project': '检查项目1'
        },
        {
          'title': '姓名',
          'project': '检查项目1'
        },
        {
          'title': '姓名',
          'project': '检查项目1'
        },
        {
          'title': '姓名',
          'project': '检查项目1'
        },
        {
          'title': '姓名',
          'project': '检查项目1'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
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
</style>
