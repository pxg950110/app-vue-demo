/* eslint-disable no-array-constructor */
/**
 * @author pxg
 * @emil pxg950110@163.com
 * @date 2019/9/22
 * @version v1.0
 * @description 工具类
 */
import Vue from 'vue'
/**
 * 时间转换
 * @param var1
 * @returns {string}
 */
Vue.filter('dateTimeFormat', function dateTimeFormat (var1) {
  if (var1 === null || var1 === '') {
    return null
  }
  var date = new Date(var1)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
})
/**
 * 日期转换
 * @param var1
 * @returns {string}
 */
Vue.filter('dateFormat', function dateTimeFormat (var1) {
  if (var1 === null || var1 === '') {
    return null
  }
  var date = new Date(var1)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  //   var hours = date.getHours()
  //   var minutes = date.getMinutes()
  //   var seconds = date.getSeconds()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  //   if (hours < 10) {
  //     hours = '0' + hours
  //   }
  //   if (minutes < 10) {
  //     minutes = '0' + minutes
  //   }
  //   if (seconds < 10) {
  //     seconds = '0' + seconds
  //   }
  return year + '-' + month + '-' + day // + ' ' + hours + ':' + minutes + ':' + seconds
})
// eslint-disable-next-line no-unused-vars
let base = '' // 基本路径
// eslint-disable-next-line no-unused-vars
export const createCode = (codeLength) => {
  var codeStr = ''
  const random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z') // 随机数
  for (let i = 0; i < codeLength; i++) { // 循环操作
    let index = Math.floor(Math.random() * 36) // 取得随机数的索引（0~35）
    // eslint-disable-next-line no-const-assign
    codeStr += random[index] // 根据索引取得随机数加到code上
  }
  return codeStr // 把code值赋给验证码
}
