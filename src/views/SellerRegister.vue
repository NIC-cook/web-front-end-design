<template>

  <div>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="商店名称">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="营业执照">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="申请时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="商店性质">
        <el-checkbox-group v-model="sizeForm.type">
          <el-input v-model="sizeForm.name"></el-input>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="申请人">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即申请</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import mallHeader from "@/components/mallHeader";

export default {
  name: "SellerRegister",
  components: {
    mallHeader
  },
  data() {
    return {
      sizeForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  },
  methods: {
    onSubmit() {
      alert("申请已提交，请耐心等待！")
    }
  }

}
</script>

<style scoped>

</style>