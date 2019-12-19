import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import UserInfo from '@/components/system/userInfo'
import System from '@/components/system/system'
import Loginfo from '@/components/system/loginfo'
import Menu from '@/components/menu'
import Login from '@/components/login/login'
import Regist from '@/components/regist'
import Kettle from '@/components/filemanage/kettle'
import ShellFile from '@/components/filemanage/shell_file'
// eslint-disable-next-line no-unused-vars
import { Icon } from 'element-ui'
/**
 * 全局变量 和 设置 、配置等。。。
 */

import axios from 'axios'

Vue.use(Router) // 引入axios

// import Storage from '@/assets/js/util/storage.js' // storage工具类，简单的封装

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/* 请求拦截器 */

axios.interceptors.request.use(function (config) { // 每次请求时会从localStorage中获取token
  // let token = Storage.localGet('token')
  let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzgzMjYwMTIsInVzZXJuYW1lIjoiMTIzNDUifQ.PLE4U35dtARXjs6RZD2OSb2ODFUCyNFG2yd60bI8EUg'
  if (token) {
    token = token.replace(/'|"/g, '') // 把token加入到默认请求参数中

    config.headers.common['Authorization'] = token
  }

  return config
}, function (error) {
  return Promise.reject(error)
})

/* 响应拦截器 */

axios.interceptors.response.use(function (response) { // ①10010 token过期（30天） ②10011 token无效
  if (response.data.code === 10010 || response.data.code === 10011) {
    Storage.localRemove('token') // 删除已经失效或过期的token（不删除也可以，因为登录后覆盖）

    Router.replace({

      path: '/login' // 到登录页重新获取token

    })
  } else if (response.data.token) { // 判断token是否存在，如果存在说明需要更新token
    Storage.localSet('token', response.data.token) // 覆盖原来的token(默认一天刷新一次)
  }

  return response
}, function (error) {
  return Promise.reject(error)
})

export default new Router({
  routes: [

    {
      path: '/regist',
      name: 'regist',
      component: Regist,
      meta: {title: '用户注册', icon: 'user-01-svg'},
      noshowMuen: true,
      children: []
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {title: '用户登录', icon: 'svg-login'},
      noshowMuen: true,
      children: []
    },

    {
      path: '/',
      name: 'index',
      component: Menu,
      meta: {title: '首页', icon: 'svg-menu-title'},
      noshowMuen: false,
      children: [ {
        path: '/index',
        name: 'index',
        component: Index,
        meta: {title: '首页', icon: 'svg-menu-user'},
        noshowMuen: false,
        children: [
        ]
      }]
    },
    {
      path: '/',
      name: 'fileinfo',
      component: Menu,
      meta: {title: '资源', icon: 'svg-menu-title'},
      noshowMuen: false,
      children: [ {
        path: '/kettle',
        name: 'kettle',
        component: Kettle,
        meta: {title: 'SPOON资源', icon: 'svg-menu-user'},
        noshowMuen: false,
        children: [
        ]
      },
      {
        path: '/shell',
        name: 'shellfile',
        component: ShellFile,
        meta: {title: 'SHELL资源', icon: 'svg-menu-user'},
        noshowMuen: false,
        children: [
        ]
      } ]
    },
    {
      path: '/',
      name: 'jobinfo',
      component: Menu,
      meta: {title: '任务', icon: 'svg-menu-title'},
      noshowMuen: false,
      children: [ {
        path: '/index',
        name: 'index',
        component: Index,
        meta: {title: '定时任务', icon: 'svg-menu-user'},
        noshowMuen: false,
        children: [
        ]
      },
      {
        path: '/index',
        name: 'index',
        component: Index,
        meta: {title: '任务日志', icon: 'svg-menu-user'},
        noshowMuen: false,
        children: [
        ]
      } ]
    },

    {
      path: '/',
      name: 'fileinfo',
      component: Menu,
      meta: {title: '监控', icon: 'svg-menu-title'},
      noshowMuen: false,
      children: [ {
        path: '/index',
        name: 'index',
        component: Index,
        meta: {title: '定时监控', icon: 'svg-menu-user'},
        noshowMuen: false,
        children: [
        ]
      },
      {
        path: '/index',
        name: 'index',
        component: Index,
        meta: {title: '系统监控', icon: 'svg-menu-user'},
        noshowMuen: false,
        children: [
        ]
      },
      {
        path: '/index',
        name: 'index',
        component: Index,
        meta: {title: '日志监控', icon: 'svg-menu-user'},
        noshowMuen: false,
        children: [
        ]
      }]
    },

    {
      path: '/',
      name: 'UserInfo',
      component: Menu,
      meta: {title: '管理', icon: 'svg-menu-title'},
      noshowMuen: false,
      children: [
        {
          path: '/user',
          name: 'user',
          component: UserInfo,
          meta: {title: '用户管理', icon: 'svg-menu-user'},
          noshowMuen: false,
          children: []
        },
        {
          path: '/loginfo',
          name: 'loginfo',
          component: Loginfo,
          meta: {title: '日志管理', icon: 'svg-menu-user'},
          noshowMuen: false,
          children: []
        },
        {
          path: '/system',
          name: 'system',
          component: System,
          meta: {title: '系统管理', icon: 'svg-menu-user'},
          noshowMuen: false,
          children: []
        }
      ]
    }
  ]
})
