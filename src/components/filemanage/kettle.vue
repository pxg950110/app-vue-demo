<template>

  <!-- kettle相关内容  --> 
  <el-tabs v-model="activeName" 
     type="border-card"
   width="100%">
    <!-- 文件系统 -->
    <el-tab-pane name="filesystem">
        <template slot="label">
            <span>文件系统</span>
        </template>
    </el-tab-pane>
     <el-tab-pane name="dbrepsystem">
        <template slot="label">
            <span>数据库资源库系统</span>
        </template>
        <div>
        <el-row :gutter="20">
        <el-col :span="3">
        <div>
        <h1>数据库资源库</h1>
        <el-button @click="addDbRepdialogTableVisible=true">添加</el-button>
        </div>
        </el-col>
          <el-col :span="17">
         <el-table>
          <el-table-column label="1">
          </el-table-column>
           <el-table-column label="1">
          </el-table-column>
           <el-table-column label="1">
          </el-table-column>
           <el-table-column label="1">
          </el-table-column>
           <el-table-column label="1">
          </el-table-column>
           <el-table-column label="1">
          </el-table-column>
           <el-table-column label="1">
          </el-table-column>
        </el-table>
        </el-col>
        </el-row>
        </div>
        <div class="el-dbrepdata-class">
            <el-dialog title="弹出框" :visible.sync="addDbRepdialogTableVisible">
                <!-- 弹出form表单 -->
                <el-form :model="dbrepDataForm">
                  <el-form-item label="资源库名称" label-width="20%">
                      <el-input v-model="dbrepDataForm.repName" placeholder="请输入资源库名称..." 
                      style="width:50%;"></el-input>
                  </el-form-item>
                  <el-form-item label="资源库地址" label-width="20%">
                    <el-input v-model="dbrepDataForm.repHost" placeholder="请输入资源库地址..." 
                    style="width:50%;"></el-input>
                </el-form-item>
                <el-form-item label="资源库端口" label-width="20%">
                    <el-input v-model="dbrepDataForm.repPort" placeholder="请输入资源库端口..." 
                    style="width:50%;"></el-input>
                </el-form-item>
                <el-form-item label="资源库" label-width="20%">
                    <el-input v-model="dbrepDataForm.qqq" placeholder="请输入资源库地址..." 
                    style="width:50%;"></el-input>
                </el-form-item>
                <el-form-item label="数据库类型" label-width="20%">
                    <el-input v-model="dbrepDataForm.qqq" placeholder="请输入数据库类型..." 
                    style="width:50%;"></el-input>
                </el-form-item>
                <el-form-item label="资源库" label-width="20%">
                    <el-input v-model="dbrepDataForm.qqq" placeholder="请输入资源库地址..." 
                    style="width:50%;"></el-input>
                </el-form-item>
                <el-form-item label="资源库" label-width="20%">
                    <el-input v-model="dbrepDataForm.qqq" placeholder="请输入资源库地址..." 
                    style="width:50%;"></el-input>
                </el-form-item>
                <el-form-item label="资源库" label-width="20%">
                    <el-input v-model="dbrepDataForm.qqq" placeholder="请输入资源库地址..." 
                    style="width:50%;"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button>提交</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
                </el-form>
            </el-dialog>
        </div>
    </el-tab-pane>
    <el-tab-pane name="filerepsystem">
        <template slot="label">
            <span>文件资源库系统</span>
        </template>
    </el-tab-pane>
  </el-tabs>


  <!--数据库资源库系统 -->
  <!-- 文件资源库类型 -->
</template>

<script src="./../../js//kettle.js"> 

</script>

<style>
@import url("../../css/kettle.css")
</style>
