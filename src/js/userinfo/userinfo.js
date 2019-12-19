import { getRequest } from '../util/api'

export default {
  data () {
    return {
      userInfoDataList: []
    }
  },
  created () {
    this.getUserInfoList()
  },
  mounted () {
  },
  methods: {
    getUserInfoList () {
      getRequest('/api/user/list', null).then(res => {
        if (res.data.code === 0) {
          this.userInfoDataList = res.data.data
        } else {
          this.$message.error(res.data.data)
        }
      }).catch(() => {})
    }
  }
}
