<template>
<div >
  <div style="text-align: center;
	width: 300px;
	height: 350px;
	position: absolute;
	left: 50%;
	top: 50%;
  transform: translate(-50%,-50%);"
  >
    <H1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FTB商城登陆</H1>
    <br>
    <div>
      <el-form :model="ruleForm"   ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="id">
          <el-input type="id" v-model="ruleForm.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="Password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
          <el-button @click="register('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  <el-dialog
      title="账号注册"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
    <el-form :label-position="labelPosition" label-width="80px" :model="registerform" action:post>
      <el-form-item label="用户名：">
        <el-input v-model="registerform.accountName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="registerform.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="手机号：">
        <el-input v-model="registerform.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：">
        <el-input v-model="registerform.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitregisterForm">注 册</el-button>
  </span>
  </el-dialog>
</div>
</template>


<script>
import request from "@/utils/request";
import router from "@/router";

export default {
  name: "LoginView",
  data() {
    return {
      dialogVisible: false,
      registerform: {
        accountName:'',
        password:'',
        phone:'',
        email:''
      },
      ruleForm: {
        password: '',
        id: ''
      }
    };
  },
  methods: {
    submitregisterForm(registerForm){
      request.post("http://localhost:8081/account",this.registerform).then(res =>{
        console.log(res)
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    register(formName) {
      this.dialogVisible=true;
      this.registerform={};
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

</style>