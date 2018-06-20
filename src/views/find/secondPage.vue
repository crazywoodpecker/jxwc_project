<template>
    <div class="secondPage">
        <popup-header
        :left-text="'返回'"
        :right-text= "'首页'"
        :title= titleText
        @on-click-left="goback"
        ></popup-header>
        <group>
            <cell is-link title="孕期保健知识" link="/find/secondPage/thridPage">
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
      titleText: ''
    }
  },
  mounted () {
    this.getParams()
  },
  methods: {
    getParams () {
      this.titleText = this.$route.params.title
      console.log(this.titleText)
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
