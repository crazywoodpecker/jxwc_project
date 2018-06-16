<template>
    <div class="secondPage">
        <popup-header
        :left-text="'返回'"
        :right-text= "'首页'"
        :title= demo1
        @on-click-left="goback"
        ></popup-header>
        <group>
            <cell is-link title="孕期保健知识" link="/demo">
            <img slot="title" style="padding-right:10px;display:block;" src="../../assets/image/孕期保健知识@2x.png" width="30" height="30">
            孕期保健知识</cell>
            <cell is-link title="儿童保健知识" link="/component/tabbar-icon">
            <img slot="title" style="padding-right:10px;display:block;" src="../../assets/image/儿童保健知识@2x.png" width="30" height="30">
            儿童保健知识</cell>
            <cell is-link title="儿童保健知识" link="/component/tabbar-icon">
            <img slot="title" style="padding-right:10px;display:block;" src="../../assets/image/儿童保健知识@2x.png" width="30" height="30">
            儿童保健知识</cell>
            <cell is-link title="儿童保健知识" link="/component/tabbar-icon">
            <img slot="title" style="padding-right:10px;display:block;" src="../../assets/image/儿童保健知识@2x.png" width="30" height="30">
            儿童保健知识</cell>
            <cell is-link title="儿童保健知识" link="/component/tabbar-icon">
            <img slot="title" style="padding-right:10px;display:block;" src="../../assets/image/儿童保健知识@2x.png" width="30" height="30">
            儿童保健知识</cell>
            <cell is-link title="儿童保健知识" link="/component/tabbar-icon">
            <img slot="title" style="padding-right:10px;display:block;" src="../../assets/image/儿童保健知识@2x.png" width="30" height="30">
            儿童保健知识</cell>
            <cell is-link title="儿童保健知识" link="/component/tabbar-icon">
            <img slot="title" style="padding-right:10px;display:block;" src="../../assets/image/儿童保健知识@2x.png" width="30" height="30">
            儿童保健知识</cell>
            <cell is-link title="儿童保健知识" link="/component/tabbar-icon">
            <img slot="title" style="padding-right:10px;display:block;" src="../../assets/image/儿童保健知识@2x.png" width="30" height="30">
            儿童保健知识</cell>
        </group>
    </div>
</template>
<script>
import { PopupHeader, Group, Cell, Tab, TabItem } from 'vux'

export default {
  name: 'secondPage',
  components: {
    Group,
    Cell,
    Tab,
    TabItem,
    PopupHeader
  },
  data () {
    return {
      demo1: ''
    }
  },
  mounted () {
    this.getParams()
  },
  methods: {
    getParams () {
      debugger
      this.demo1 = this.$route.params.title
      console.log(this.demo1)
    },
    goback () {
      window.history.go(-1)
    }
  }
}
</script>
<style lang="less">
.vux-no-group-title{
    margin-top: 0!important;
}
.weui-cell_access .weui-cell__ft{
    padding-right: 55%!important;
    color: #111111!important;
}
</style>
