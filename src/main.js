// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// Element-UI
// eslint-disable-next-line no-unused-vars
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import echarts from 'echarts'
// eslint-disable-next-line no-unused-vars
import x2js from 'x2js' // xml数据处理插件

// 注册svg
import './icon/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.prototype.$ajax = axios
// eslint-disable-next-line new-cap
Vue.prototype.$x2js = new x2js()
axios.defaults.baseURL = 'http://127.0.0.1:39999'
// Vue.prototype = adios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
