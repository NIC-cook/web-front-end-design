<template>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-menu-item index="1" @click="switch1()">商城主页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">分会场</template>
      <el-menu-item index="2-1">会场1</el-menu-item>
      <el-menu-item index="2-2">会场2</el-menu-item>
      <el-menu-item index="2-3">会场3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" @click="switch2()">我的购物车</el-menu-item>
    <el-menu-item index="4" @click="switch3()">订单管理</el-menu-item>
    <el-submenu index="5">
      <template slot="title">登陆ID：{{$store.state.accountId}}</template>
      <el-menu-item index="2-1">账号信息</el-menu-item>
      <el-menu-item index="2-2" @click="outLogin()">登出</el-menu-item>
    </el-submenu>
    <el-menu-item index="5">
      <span>商品搜索：</span>
      <el-input
          placeholder="请输入商品名/ 商品id/ 商店名"
          v-model="input"
          clearable>
      </el-input>
      &nbsp;
      <el-button type="primary" @click="insearch('search') " icon="el-icon-search">搜索</el-button>
    </el-menu-item>
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
    },
    outLogin(){
      this.$router.push("/");
    },
    switch1(){
      const th=this;
      th.$router.push("/main");
    },
    switch2(){
      const th=this;
      th.$router.push("/ShoppingCart");
    },
    switch3(){
      const th=this;
      th.$router.push("/home/admin");
    },
    switch4(){
      const th=this;
      th.$router.push("/main");
    },
  },
}
</script>

<style scoped>

</style>