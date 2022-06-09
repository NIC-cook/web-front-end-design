<template>
  <div>
        <!--按钮部分 -->
        <div style="margin: 10px 0">
          <el-button type="primary">新增</el-button>
          <el-button type="primary">删除</el-button>
          <el-button type="primary">修改</el-button>
        </div>

        <!--搜索部分 -->
        <div style="margin: 10px 0">
          <el-input v-model="search" aria-placeholder="请输入搜索关键词" style="width: 20%"></el-input>
          <el-button type="primary" @click="insearch('search') ">查询</el-button>
        </div>

        <!--表格部分 -->
    <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%">
      <el-table-column
          sortable
          prop="accountId"
          label="用户ID"
          width="180">
      </el-table-column>
      <el-table-column
          prop="accountName"
          label="用户名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="password"
          label="密码">
      </el-table-column>
      <el-table-column
          prop="power"
          label="权限">
      </el-table-column>
      <el-table-column
          prop="phone"
          label="手机号">
      </el-table-column>
      <el-table-column
          prop="email"
          label="邮箱">
      </el-table-column>
      <el-table-column
          prop="orderListId"
          label="订单表ID">
      </el-table-column>
    </el-table>

        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 30]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tatal">
        </el-pagination>
      </div>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>

import Vue from 'vue';
import Element from 'element-ui';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
      total:5,
      currentPage:1,
      tableData: [],
      search:"all"
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    insearch(search){
    // console.log(this.ruleForm.name)
    const th=this;
    this.$axios({
      method: 'get',
      url: 'http://localhost:8082/api/account/getAccount',
      params: {
        "search":this.search
      }
    })
        .then(function(response){
           alert("正在查询...");
           console.log(response.data)
          th.tableData=response.data.data;
        })
        .then(function(error){
          console.log(error)
        })
  }
},

}



</script>
