/**
 * @author pxg
 * @emil pxg950110@163.com
 * @date 2019/11/25
 * @version v1.0
 * @description
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'
Vue.component('svg-icon', SvgIcon)
const req = require.context('./svg', true, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
