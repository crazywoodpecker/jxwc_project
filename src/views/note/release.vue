<template>
    <div class="release">
      <popup-header :right-text="'首页'" :title= "'写日记'">
          <img slot="left-text" style="padding-right:10px;display:block;height:15px;width:10px;margin-top:15px" src="../../assets/image/返回@2x.png" width="30" height="30">
      </popup-header>
      <group>
        <x-input :placeholder="'请输入标题(20字以内)'"></x-input>
        <x-textarea :max="200" :height="200" :placeholder="'请输入内容（200字以内）'"></x-textarea>
      </group>
      <x-button type="primary">发布</x-button>
    </div>
</template>
<script>
import { Cell, PopupHeader, XButton, Group, XInput, XTextarea } from 'vux'
export default {
  components: {
    Cell,
    PopupHeader,
    XButton,
    Group,
    XInput,
    XTextarea
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
.release{
  .weui-btn_primary{
    background-color: #FC4568!important;
    border-radius: 25px!important;
    width: 60%!important;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .vux-no-group-title{
    margin-top: 0!important;
  }
}
</style>
