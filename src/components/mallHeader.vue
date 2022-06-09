<template>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-menu-item index="1">商城主页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">分会场</template>
      <el-menu-item index="2-1">卖场1</el-menu-item>
      <el-menu-item index="2-2">卖场2</el-menu-item>
      <el-menu-item index="2-3">卖场3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" >消息中心</el-menu-item>
    <el-menu-item index="4">订单管理</el-menu-item>
    <el-submenu index="5">
      <template slot="title">{{activeIndex}}</template>
      <el-menu-item index="2-1">账号信息</el-menu-item>
      <el-menu-item index="2-2">登出</el-menu-item>
    </el-submenu>
  </el-menu>

</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>