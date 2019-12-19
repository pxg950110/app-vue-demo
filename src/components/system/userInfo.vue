<template>
  <div>
    <el-tabs  style="width:100%">
      <el-tab-pane>
      <template slot="label"><span>用户管理</span></template>
        <!--用户列表--->
        <!--获取用户列表的表格-->
        <el-table :data="userInfoDataList" >
          <el-table-column label="用户id" 
          prop="id">
          </el-table-column>
          <el-table-column
          label="用户名" prop="userName"></el-table-column>
          <el-table-column label="创建时间" width="200px">
          <template slot-scope="scope">
            <span>{{scope.row.createTime | dateTimeFormat}}</span>
          </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

        <el-tab-pane>
      <template slot="label"><span>权限管理</span></template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script src="../../js/userinfo/userinfo.js">

</script>

<style>
@import url("../../css/userinfo.css");
</style>