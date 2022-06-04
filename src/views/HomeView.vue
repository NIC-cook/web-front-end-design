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
          <el-button type="primary" style="margin: 10px">查询</el-button>
        </div>

        <!--表格部分 -->
        <el-table
            :data="tableData"
            style="width: 100%"
            border>
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
              label="商品 ID"
              prop="id"
              sortable
          >
          </el-table-column>
          <el-table-column
              label="商品名称"
              prop="name">
          </el-table-column>
          <el-table-column
              label="描述"
              prop="desc">
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
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      total:5,
      currentPage:1,
      tableData: []
    }
  }

}



</script>
