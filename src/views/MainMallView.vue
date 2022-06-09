<template>
  <div >
    <mallHeader/>
    <div>
      <template>
        <!---->
        <!--轮播图-->
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in imagesrc" :key="item">
            <img src="item"></img>
          </el-carousel-item>
        </el-carousel>
        <!---->
        <!--卡片-->
        <el-row>
          <el-col :span="8" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">添加到购物车</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!---->
      </template>
    </div>
  </div>
</template>

<script>
import mallHeader from "@/components/mallHeader";

export default {
  name: "MainMallView",
  data(){
    return{
      imagesrc:{
        imagesrc1: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        imagesrc2:"https://img.alicdn.com/imgextra/i3/O1CN01Sf6dER1zbJ3uVQ0lE_!!6000000006732-0-tps-846-472.jpg",
        imagesrc3:"https://img.alicdn.com/imgextra/i3/O1CN01Sf6dER1zbJ3uVQ0lE_!!6000000006732-0-tps-846-472.jpg",
        imagesrc4:"https://img.alicdn.com/imgextra/i3/O1CN01Sf6dER1zbJ3uVQ0lE_!!6000000006732-0-tps-846-472.jpg",
        imagesrc5:"https://img.alicdn.com/imgextra/i3/O1CN01Sf6dER1zbJ3uVQ0lE_!!6000000006732-0-tps-846-472.jpg",
        imagesrc6:"https://img.alicdn.com/imgextra/i3/O1CN01Sf6dER1zbJ3uVQ0lE_!!6000000006732-0-tps-846-472.jpg",
      }

    }
  },
  components: {
    mallHeader
  },
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