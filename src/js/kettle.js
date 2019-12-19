export default {
  /**
     * filesystem  文件系统
     * 数据库资源库系统 dbrepsystem
     * 文件资源库系统 filerepsystem
     */
  data () {
    return {
      activeName: 'dbrepsystem', // 初始化加载的pane
      dbrepDataInfo: [], // 数据库资源库中的信息
      addDbRepdialogTableVisible: true,
      dbrepDataForm: {
        qqq: '',
        repName: '',
        'repAccess': '',
        'repConnectPassword': '',
        'repConnectUser': '',
        'repDb': '',
        'repHost': '',
        'repPassword': '',
        'repPort': '',
        'repType': '',
        'repUserName': ''
      }
    }
  }
}
