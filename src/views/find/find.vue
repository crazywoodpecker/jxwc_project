<template>
    <div class="find">
        <popup-header
        :left-text="'返回'"
        :right-text="'首页'"
        :title="'发现'"
        @on-click-left="goback"
        ></popup-header>
        <group>
            <cell is-link title="孕期保健知识" link="/find/secondPage" v-on="sendParams">
            <img slot="title" style="padding-right:10px;display:block;" src="../../assets/image/孕期保健知识@2x.png" width="30" height="30">
            孕期保健知识</cell>
            <cell is-link title="儿童保健知识" link="/component/tabbar-icon">
            <img slot="title" style="padding-right:10px;display:block;" src="../../assets/image/儿童保健知识@2x.png" width="30" height="30">
            儿童保健知识</cell>
        </group>
        <tab active-color="#FC4568" bar-active-color="#FC4568">
            <tab-item selected>为您推荐</tab-item>
            <tab-item >孕期营养</tab-item>
            <tab-item >儿童健康</tab-item>
        </tab>
    </div>
</template>
<script>
import { PopupHeader, Group, Cell, Tab, TabItem } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Tab,
    TabItem,
    PopupHeader
  },
  data () {
    return {
      titleText: ''
    }
  },
  mounted () {
  },
  methods: {
    sendParams () {
      this.$router.push({name: 'secondPage', params: {'title': '发现'}})
    },
    goback () {
      window.history.go(-1)
    }
  }
}
</script>
<style lang="less">
.find{
  .vux-no-group-title{
      margin-top: 0!important;
  }
  .weui-cell{
      padding: 20px 15px!important;
  }
  .weui-cell_access .weui-cell__ft{
      padding-right: 55%!important;
      color: #111111!important;
  }
}
</style>
