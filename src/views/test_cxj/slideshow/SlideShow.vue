<template>
  <div class="slide">
    <el-carousel :interval="3000" arrow="never">
      <el-carousel-item v-for="(item,index) in slideImages" :key="index">
        <img :src="item.idView">
      </el-carousel-item>
    </el-carousel>
    <main-body></main-body>
  </div>
</template>
<script>
import MainBody from "@/views/test_cxj/mainbody/MainBody"
export default {
  name: "SlideShow",
  components: {
    "main-body": MainBody
  },
  data() {
    return {
      slideImages: [
        { id: 0, idView: require("@/assets/banner2.png") },
        { id: 1, idView: require("@/assets/banner3.jpg") },
      ]

    }
  }
}
</script>
<style>
.slide {
  width: 960px;
  margin: 0 auto;
}
.el-carousel__container {
  width: 960px;
  height: 540px;
}
.el-carousel__item img {
  height: 540px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>


