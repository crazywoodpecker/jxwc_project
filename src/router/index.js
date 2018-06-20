import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import PreparationOfPregnancy from '@/views/index/PreparationOfPregnancy'
import childer from '@/views/index/childer'
import pregnancy from '@/views/index/pregnancy'
import find from '@/views/find/find'
import secondPage from '@/views/find/secondPage'
import thridPage from '@/views/find/thridPage'
import doctor from '@/views/doctor/doctor'
import evaluateDoc from '@/views/doctor/evaluateDoc'
import report from '@/views/report/report'
import detailedMsg from '@/views/msg/detailedMsg'
import note from '@/views/note/note'
import mine from '@/views/mine/mine'
import msg from '@/views/msg/msg'
import evaluate from '@/views/report/evaluate'
import release from '@/views/note/release'
import demo1 from '@/views/demo1'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/msg',
      name: 'msg',
      component: msg
    },
    {
      path: '/childer',
      name: 'childer',
      component: childer
    },
    {
      path: '/pregnancy',
      name: 'pregnancy',
      component: pregnancy
    },
    {
      path: '/PreparationOfPregnancy',
      name: 'PreparationOfPregnancy',
      component: PreparationOfPregnancy
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/find/secondPage',
      name: 'secondPage',
      component: secondPage
    },
    {
      path: '/find/secondPage/thridPage',
      name: 'thridPage',
      component: thridPage
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: doctor
    },
    {
      path: '/evaluateDoc',
      name: 'evaluateDoc',
      component: evaluateDoc
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '/detailedMsg',
      name: 'detailedMsg',
      component: detailedMsg
    },
    {
      path: '/note',
      name: 'note',
      component: note
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      component: evaluate
    },
    {
      path: '/release',
      name: 'release',
      component: release
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    }
  ]
})
