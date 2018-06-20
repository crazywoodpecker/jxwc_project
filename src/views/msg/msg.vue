<template>
	<div class="Msg">
		<popup-header :left-text="'返回'" :title= "'消息'" @on-click-left="goback">
            <img slot="left-text" style="padding-right:10px;display:block;" src="../../assets/image/孕期保健知识@2x.png" width="30" height="30">
        </popup-header>
		<div class="title">{{title}}</div>
    <div class="context">{{text}}</div>
	</div>
</template>
<script>
import { PopupHeader } from 'vux'
export default {
  name: 'Msg',
  components: {
    PopupHeader
  },
  data () {
    return {
      title: '孕妈妈课堂开课啦！',
      text: '我们欢迎广大的准妈妈来听课。我们欢迎广大的准妈妈来听课。我们欢迎广大的准妈妈来听课。我们欢迎广大的准妈妈来听课。我们欢迎广大的准妈妈来听课。'
    }
  }
}
</script>
<style lang="less">
.msg{
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
