<template>
  <div >
    <mallHeader/>
    <div>
        <!---->
        <!--轮播图-->
      <template>
        <el-carousel indicator-position="outside">
          <el-carousel-item  v-for="item in imagesrc" :key="item">
            <img :src="item">
          </el-carousel-item>
        </el-carousel>
      </template>
        <!---->
      <el-table
          :data="tableDatax"
          style="width: 100%">
        <el-table-column type="expand">
        </el-table-column>
        <el-table-column
            label="商品 ID"
            prop="goodsId">
        </el-table-column>
        <el-table-column
            label="商品名称"
            prop="goodsName">
        </el-table-column>
        <el-table-column
            label="商品价格"
            prop="goodsCount">
        </el-table-column>
      </el-table>
        <!--卡片-->
      <div style="height: 20px"></div>
        <el-row>
          <el-col :span="8" v-for="(o, index) in cartcount" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button" @click="add()">添加到购物车</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!---->
    </div>
    <div style="text-align: center">
      <el-button type="text" class="button" @click="more()">加载更多</el-button>
    </div>
  </div>
</template>

<script>
import mallHeader from "@/components/mallHeader";

export default {
  name: "MainMallView",
  data(){
    return{
      tableDatax:[{
          goodsId:95,
          goodsCount:"1.5$",
          goodsName:"好吃的汉堡"
      },{
        goodsId:94,
        goodsCount:"1.5$",
        goodsName:"好吃的汉堡"
      },{
        goodsId:93,
        goodsCount:"1.5$",
        goodsName:"好吃的汉堡"
      }],
      cartcount:6,
      imagesrc:{
        imagesrc1: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/008e480893428ae9c9c4452f67a4eec9.jpg?thumb=1&w=1533&h=575&f=webp&q=90",
        imagesrc2:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab68a46dca21775807ab861d48a26320.jpg?thumb=1&w=1533&h=575&f=webp&q=90",
        imagesrc3:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/628a0172dc664f2740250ed9691b65ee.jpg?w=2452&h=920",
        imagesrc4:"https://img.alicdn.com/imgextra/i3/O1CN01Sf6dER1zbJ3uVQ0lE_!!6000000006732-0-tps-846-472.jpg",
        imagesrc5:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/008e480893428ae9c9c4452f67a4eec9.jpg?thumb=1&w=1533&h=575&f=webp&q=90",
        imagesrc6:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/008e480893428ae9c9c4452f67a4eec9.jpg?thumb=1&w=1533&h=575&f=webp&q=90",
      }

    }
  },
  components: {
    mallHeader
  },
  methods:{
    add(){
      const th=this;
      th.$store.commit("updatecart","好吃的汉堡")
    },
    more(){
      const th=this;
      th.cartcount=th.cartcount+6;
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>