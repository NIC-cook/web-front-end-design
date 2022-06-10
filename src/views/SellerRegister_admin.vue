<template>
  <div >
    <div>
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            label="日期"
            width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="申请人"
            width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="商店名"
            width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{  }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="营业执照编号"
            width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{  }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">通过</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">驳回</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import mallHeader from "@/components/mallHeader";

export default {
  name: "SellerRegister_admin",
  components: {
    mallHeader
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>

</style>