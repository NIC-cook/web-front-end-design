<template>
  <div style="height: 50px;line-height: 50px;border-bottom: 1px solid #ccc;display: flex">
    <div style="flex: 200px;padding-left: 10px;font-weight: bold;color: aqua">FTB商城</div>

    <div style="flex: 1"></div>

    <div style="flex: 100px;">
      <el-dropdown>
      <el-button type="primary">
        用户<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item></el-dropdown-item>
        <el-dropdown-item></el-dropdown-item>
        <el-dropdown-item></el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>