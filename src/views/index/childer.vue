<template>
  <div class="index">
    <view-box ref="viewBox">
    <div class="header">
      <div>
        <el-input
          placeholder="搜索孕期知识与育儿知识"
          v-model="searchText"
          clearable
          class="seacherbox">
        </el-input>
        <el-button class="serbtn" icon="el-icon-search"></el-button>
        <div class="types">
          <p>{{day}}</p>
          <p>宝宝健康，快乐成长</p>
        </div>
        <div class="msg">
          <p>您的宝宝下次体检时间为{{checkDate}}</p>
        </div>
      </div>
    </div>
    <div class="check">
      <div class="leftCheck">
        <div>
          <router-link tag="gotoschool" to="/">
            <img src="../../assets/image/检查@2x.png" >
            <span >体检报告</span>
          </router-link>
        </div>
      </div>
      <div class="rightCheck">
        <div class="rightTop">
          <img src="../../assets/image/mydocer.png">
          <span>儿保医生</span>
        </div>
        <div class="rightButtom">
          <img src="../../assets/image/意见@2x.png" >
          <span>指导意见</span>
        </div>
      </div>
    </div>
    <div class="tools">
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item label="体重管理">
          <img slot="icon" src="../../assets/image/体重管理@2x.png">
        </grid-item>
        <grid-item label="温度自测">
          <img slot="icon" src="../../assets/image/基础体温@2x.png">
        </grid-item>
        <grid-item label="孕期过程">
          <img slot="icon" src="../../assets/image/妊娠过程@2x.png">
        </grid-item>
        <grid-item label="安全自评">
          <img slot="icon" src="../../assets/image/安全自评@2x.png">
        </grid-item>
      </grid>
    </div>
    <div class="knowledeg">
      <div class="icon">
        <div>
          <img src="../../assets/image/小贴士@2x.png">
          <span style="float:left">孕期健康小贴士</span>
        </div>
      </div>
    </div>
    <div class="context">
      <div v-for="text in this.knowledegText" v-bind:key="text">
        {{text.context}}
      </div>
    </div>
    <tab></tab>
    </view-box>
  </div>
</template>
<script>
import tab from '../../components/tabbar'
import { Grid, GridItem, ViewBox } from 'vux'
import '../../assets/css/style.css'

export default {
  name: 'childer',
  components: {
    Grid,
    GridItem,
    tab,
    ViewBox
  },
  data () {
    return {
      checkDate: '2019-09-08',
      day: '孕周9+6天',
      searchText: '',
      knowledegText: [
        {
          context: '孕期保健,国家有哪些政策？'
        },
        {
          context: '孕期保健,国家有哪些政策1？'
        },
        {
          context: '孕期保健,国家有哪些政策2？'
        }
      ]
    }
  }
}
</script>
<style lang="less">
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
@bordercolor:#E8E8E8;
.index{
  height: 100%;
  width: 100%;
}
.weui-grid__icon{
  height: 70px!important;
}
.weui-grid{
  padding: 15px 10px!important;
}
.knowledeg{
  .icon{
    height: 30px;
    display: block;
  }
  border-top: 5px solid @bordercolor;
  border-bottom: 1px solid @bordercolor;
  width: 100%;
  img{
    float: left;
    margin-left: 15px;
    height:30px;
    width:30px;
  }
  span{
    margin: 5px;
    font-size: 12pt;
    letter-spacing: 3px;
  }
}
.context {
  div{
  line-height: 28px;
  height: 28px;
  border-bottom:1px solid @bordercolor;
  padding: 5px 0 5px 25px;
  text-align: left;
  font-size: 14pt;
  color: #111111;
  letter-spacing: 2px;
}
}
.rightTop{
  height: 50%;
  width: 100%;
}
.rightButtom{
  height: 50%;
  width: 100%;
}
.leftCheck{
  position:relative;
  float: left;
  width:49%;
  height: 100%;
  border-right: 1px solid @bordercolor;
   span{
    font-size: 14pt;
    position: absolute;
    top: 65%;
    left: 32%;
  }
}
.rightCheck{
  position: relative;
  float: right;
  height: 100%;
  width:50%;
  text-align: center;
  img{
    position: absolute;
    height:55px;
    left: 10px;
    top: 8%;
  }
  .rightTop{
    font-size: 15pt;
    position: relative;
    border-bottom: 1px solid @bordercolor;
    span{
      position: absolute;
      top: 35%;
      left: 45%;
    }
  }
  .rightButtom{
    font-size: 15pt;
    position: relative;
    span{
      position: absolute;
      top: 35%;
      left: 45%;
    }
  }
}
.header{
  height: 180pt;
  width: 100%;
  background: url("../../assets/image/backimg.png") no-repeat;
}
.msg{
  background: url("../../assets/image/消息背景@2x.png") no-repeat;
  position: relative;
  background-size: 100%;
  height: 50pt;
  width: 132pt;
  top:50pt;
  margin-left: 20pt;
  font-size: 12pt;
  color: white;
  p{
    width: 106pt;
    margin-left: 14px;
    padding-top: 7px;

  }
}
.types {
  position: relative;
  width: 155pt;
  top: 40pt;
  font-size: 20pt;
  color: #ffffff;
  margin-left: 27pt;
  text-align: left;
  p:last-child{
    margin-top: 10px;
    font-size: 15pt;
    color: #FEB5C3;
  }
}
.el-input__inner{
  position: absolute;
  border-radius: 25px;
  height: 30px;
  width: 85%;
  left: 10px;
  top:5px;
}
.serbtn{
  padding: 8px 8px;
  position: relative;
  float: right;
  border-radius: 25px;
  right: 5px;
}
.check{
  height: 100pt;
  width: 100%;
  border-bottom: 6px solid @bordercolor;
}
</style>
