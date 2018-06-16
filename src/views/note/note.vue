<template>
    <div class="note">
      <popup-header
        :left-text="'返回'"
        :right-text= "'首页'"
        :title= "'日记'"
        @on-click-left="goback"
        @on-click-right="goindex"
        ></popup-header>
        <div class="msgContent" v-for="item of data" v-bind:key="item.title">
            <p class="title"><span><strong>{{item.title}}</strong></span></p>
            <p class="context"><span>{{item.introduce}}</span></p>
            <p class="img"><span><img v-bind:src="item.img"></span></p>
            <p class="time"><span>{{item.time}}</span></p>
        </div>
    </div>
</template>
<script>
import { PopupHeader } from 'vux'

export default {
  name: 'note',
  components: {
    PopupHeader
  },
  data () {
    return {
      data: [
        {
          title: '好吃就是贵',
          img: '../../../static/image/照片视频@2x.png',
          time: '2018-09-12',
          introduce:
            '出去散步看到有卖车厘子的，馋的不行，买了一点太贵了，花了20块大洋，心疼的我不行不行的不过好在味道很不错，心里来美滋滋。这20块花的也值了。'
        },
        {
          title: '好吃就是贵',
          img: '../../../static/image/照片视频@2x.png',
          time: '2018-09-12',
          introduce:
            '出去散步看到有卖车厘子的，馋的不行，买了一点太贵了，花了20块大洋，心疼的我不行不行的不过好在味道很不错，心里来美滋滋。这20块花的也值了。'
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
    .msgContent{
        border-bottom: 1px solid #E8E8E8;
        .img{
            img{
                width: 80px;
                height: 80px;
            }
            padding: 10px;
        }
        .time{
            text-align: right;
            padding-right: 10px;
        }
        .context{
            padding: 15px;
        }
        .title{
            font-size: 22px;
            padding-left:15px;
            padding-top: 5px ;
        }
    }
</style>
