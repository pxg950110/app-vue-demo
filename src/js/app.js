import { getRequest } from './util/api'

export default{
  data () {
    return {
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzgxNzg0NzQsInVzZXJuYW1lIjoiMTIzIn0.pt09l3C6lqYvbIuRfPrkXUKzjM_a9lq7HRgbnayv4pI'
    }
  },
  created () {
    this.updateTitle()
  },
  methods: {
    //  title标题修改
    updateTitle () {
      document.title = '皮小怪空间'
    },
    test () {
      var tokenData = {'Authorization': this.token, 'Content-Type': 'application/x-www-form-urlencoded'}
      getRequest('/api/user/test', null, tokenData).then(res => {}
      ).catch(() => {

      })
    }
  }

}
