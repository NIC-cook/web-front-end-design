<template>
  <div id="app">
      <div>
        <router-view />
      </div>
  </div>
</template>


<script>

export default {
  name:"Layout",
  components:{

  }
}
</script>
submitForm(formName) {
// console.log(this.ruleForm.name)
const th=this;
this.$axios({
method: 'post',
url: 'http://localhost:8080/goods/add',
data: {
"goodsName": this.ruleForm.name,
"price": this.ruleForm.price,
"repertory":this.ruleForm.num,
"description":this.ruleForm.desc,
"pic":this.ruleForm.pic,
"shopName":this.ruleForm.shop,
"name":this.ruleForm.type
}
})
.then(function(response){
if(response.data===200){
th.$refs[formName].resetFields();
alert("商品添加成功!")
}else{
th.$refs[formName].resetFields();
alert("商品添加失败，请重新添加！")
}
})
.then(function(error){
console.log(error)
})
},
