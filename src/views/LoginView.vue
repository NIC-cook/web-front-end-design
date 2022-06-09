<template>
<div>
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
        <el-form-item label="账号" prop="accountId">
          <el-input type="id" v-model="ruleForm.accountId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
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
    <el-button type="primary" @click="submitregisterForm('registerform')">注 册</el-button>
  </span>
  </el-dialog>
</div>
</template>


<script>
import request from "@/utils/request";
import router from "@/router";
import axios from "axios";

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
        password:'',
        accountId:''
      }
    };
  },
  methods: {
    submitregisterForm(registerForm){
      request.post("http://localhost:8081/account/saveUser",this.registerform).then(res =>{
        console.log(res)
      })
    },
    submitForm(formName) {
      // console.log(this.ruleForm.name)
      const th=this;
      //th.$store.account_id=this.ruleForm.accountId;//把id存入全局参数
      this.$axios({
        method: 'post',
        url: 'http://localhost:8081/account/userLogin',
        data: {
          "accountId":this.ruleForm.accountId,
          "password":this.ruleForm.password
        }
      })
          .then(function(response){
            console.log(response.data);
            //console.log(response.status);
            //console.log(response.request);
            //console.log(typeof (response.data.code))
            if(response.data.code==200){
              //th.$router.push("/home/admin");
                if (response.data.data=="1")
                {
                  th.$router.push("/home/admin");
                  th.$store.commit("updateId",th.ruleForm.accountId)
                }
                else if (response.data.data=="2")
                {
                  th.$router.push("/");
                  th.$store.commit("updateId",th.ruleForm.accountId)
                }
                else if (response.data.data=="3")
                {
                  console.log(th);
                  th.$store.commit("updateId",th.ruleForm.accountId)
                  // th.$store.account_id=formName.account_id;
                  th.$router.push("/main");
                }
              th.$refs[formName].resetFields();
              alert("登陆成功!");
            }
            else if (response.data.code==401)
            {
              th.$refs[formName].resetFields();
              th.$store.account_id=null;//清空全局变量中的id
              alert("账号错误！")
            }
            else if (response.data.code==402){
              th.$refs[formName].resetFields();
              alert("密码错误！");
            }
          })
          .then(function(error){
            console.log(error)
          })
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