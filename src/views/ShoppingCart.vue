<template>
  <div >
    <mallHeader/>
    <div style="width: 2.5%"> &nbsp;</div>
    <div style="display: flex ">
      <div style="width: 2.5%"> </div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-tag size="medium">购物车</el-tag>
          <el-button style="float: right;margin: 10px" type="danger" @click="deleterow(tableData)">删除</el-button>
          <el-button style="float: right;margin: 10px" type="warning" @click="toggleSelection()">全部取消</el-button>
        </div>
        <div class="text item">
          <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                sortable
                prop="goodsId"
                label="商品id"
                width="120">
            </el-table-column>
            <el-table-column
                prop="goodsName"
                label="商品名"
                width="120">
            </el-table-column>
            <el-table-column
                prop="goodsCount"
                sortable
                label="价格"
                show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
    <el-button style="float: right;margin: 10px" type="success" @click="dialogVisible=true">结算</el-button>
    <el-dialog
        title="确认付款"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <span>请扫码付款</span>
      <img src="../assets/img.png" style="width: 70px;height: 70px"/>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button  type="success" @click="count()">确认付款</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import mallHeader from "@/components/mallHeader";

export default {
  name: "ShoppingCart",
  components: {
    mallHeader
  },
  data(){
    return{
      dialogVisible: false,
      tableData:this.$store.state.cart,
      multipleSelection:[]
    }
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val)
    },
    deleterow(tableData){
      console.log(this.multipleSelection)
      const th=this;
      th.$store.commit("deletecart",th.multipleSelection)
      // tableData.forEach(row => {
      //   if (row.checked()){
      //
      //   }
      // })
    },
    count(){
      this.$store.commit("deletecart",this.multipleSelection)
      alert("成功结算！")
      this.dialogVisible=false;
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 95%;
  border-radius: 30px
}
</style>