<template>
  <div>
    <tabbar>
      <tabbar-item selected>
        <img slot="icon" src="../assets/image/index.png">
        <img slot="icon-active" src="../assets/image/index1.png">
        <span class="text" slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/image/text.png">
        <img slot="icon-active" src="../assets/image/text1.png">
        <span class="text" slot="label">日记</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/image/mesg.png">
        <img slot="icon-active" src="../assets/image/mesg1.png">
        <span class="text" slot="label">消息</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/image/find.png">
        <img slot="icon-active" src="../assets/image/find1.png">
        <span class="text" slot="label">发现</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/image/mine.png">
        <img slot="icon-active" src="../assets/image/mine1.png">
        <span class="text" slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  name: 'tab',
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>
<style lang="less">
.weui-tabbar__labe{
  color: #FC4568;
}
</style>
