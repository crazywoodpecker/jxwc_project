<template>
	<div class="thridPage">
		<popup-header :left-text="'返回'" :right-text= "'首页'" :title= titleText @on-click-left="goback"></popup-header>
		<div class="title">{{title}}</div>
    <div class="context">{{text}}</div>
	</div>
</template>
<script>
import { PopupHeader } from 'vux'
export default {
  name: 'thridPage',
  components: {
    PopupHeader
  },
  data () {
    return {
      title: '寶寶這個那個的',
      text: '尤雨溪是Vue.js框架的作者，HTML5版Clear的打造人。他认为，未来App的趋势是轻量化和细化，能解决问题的应用就是好应用。而在移动互联网时代大的背景下，个人开发者的机遇在门槛低，成本低，跨设备和多平台四个方面。'
    }
  }
}
</script>
<style lang="less">
.thridPage{
  .title{
    font-size: 15pt;
    margin-top: 20px;
    text-align: center;
  }
  .context{
    text-indent: 2rem;
    padding: 20px;
    text-align: left;
  }
}
</style>
