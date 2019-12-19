<template>
  <div>
    <!-- 头部 -->
     <el-header height="20%" style="background-color: aqua; margin:0 0; padding: 0 0;">
      <div class="app-menu-header-div">
        <el-row>
          <el-col  :xs="8" :sm="6" :md="4" :lg="3" :xl="1"></el-col>
          <el-col>
            <span class="app-menu-span">App后台管理界面</span></el-col>
        </el-row>
    </div>
    </el-header>
    <!-- 内容 -->
    <el-container style="min-height:70%;max-height:70%" >
    <!-- 左边菜单栏 -->
    <el-aside  style="width: auto;height: 100%;" >
      <!-- <div>
        <el-button  @click="menuChangeClick" circle>
         <svg-icon :icon-class="menuSvgData"></svg-icon>
        </el-button>
      </div> -->
      <el-menu :collapse="collapseType" default-active="0"
      class="el-menu-vertical-demo"  :style="menuStyle" 
      router>
<template v-for="(item,index) in this.$router.options.routes" >
     <template v-if="item.noshowMuen===true">
     </template>
     <template v-else>
       <!-- 如果children为0 -->
       <template v-if="item.children.length===0">
          <!-- 为0的菜单 -->
          <!-- 如果  collapseType=true-->
          <template v-if="collapseType===true">
             <el-submenu index="index+''">
               <template slot="title">{{item.meta.title}}</template>
              <el-menu-item :index="item.path">
                <svg-icon :icon-class="item.meta.icon"></svg-icon>
                <span>{{item.meta.title}}</span>
              </el-menu-item>
             </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.path">
              <svg-icon :icon-class="item.meta.icon"></svg-icon>
              <span>{{item.meta.title}}</span>
            </el-menu-item>
          </template> 
       </template>
       <template v-if="item.children.length===1">
        <template v-if="collapseType===true">
          <el-submenu index="index+''">
            <template slot="title">{{item.children[0].meta.title}}</template>
        <el-menu-item :index="item.children[0].path">
          <svg-icon :icon-class="item.children[0].meta.icon"></svg-icon>
          <span>{{item.children[0].meta.title}}</span>
        </el-menu-item>
          </el-submenu>
       </template>
       <template v-else>
        <el-menu-item :index="item.children[0].path">
          <svg-icon :icon-class="item.children[0].meta.icon"></svg-icon>
          <span>{{item.children[0].meta.title}}</span>
        </el-menu-item>
       </template>
       </template>
       <template >
         <!-- 有子菜单 -->
          <el-submenu  :index="index+''"
          v-if="item.children.length>1">
           <template slot="title"> {{item.meta.title}}</template>
           <template   v-for="child in item.children">
           <el-menu-item :index="child.path">
              <svg-icon :icon-class="child.meta.icon"></svg-icon>
              <span>{{child.meta.title}}</span>
            </el-menu-item>
          </template>
          </el-submenu>
       </template>
     </template>
</template>
</el-menu>
    </el-aside>
    <el-container style="margin-left: 20px;">
    <router-view></router-view>
    </el-container>
    </el-container>
    <!-- 底部 -->
    <el-footer height="10%"> @author pxg @time {{dateData}}</el-footer>
  </div>
</template>

<script>
export default {
  name:"Menu",
  data () {
    return {
      collapseType:true,
      menuStyle:'height:100%;',
      menuSvgData:'svg-menu-open',
      dateData:new Date()
    }
  },
  mounted () {
    window.setInterval(
     () => {
       setTimeout(
         this.changeDate(),1000
       )
     } 
    )
  },
  methods: {
    changeDate(){
      this.dateData=new Date()
    },
    menuChangeClick(){
      if(this.collapseType===true){
        this.menuSvgData='svg-menu-close'
        this.menuStyle='height:100%; min-width:200px'
        this.collapseType=false
      }else{
        this.menuSvgData='svg-menu-open'
        this.menuStyle='height:100%;'
        this.collapseType=true
      }
    }
  }
}
</script>

<style>

</style>
