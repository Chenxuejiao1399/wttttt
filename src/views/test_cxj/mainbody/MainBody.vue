<template>
  <div class="body">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#6490E8"
    >
      <el-menu-item index="1">行业应用</el-menu-item>
      <el-menu-item index="2">产品</el-menu-item>
    </el-menu>
    <div class="exhibition">
      <div class="exhibition_left">
        <div class="dryer_top">
          <span>干洗机</span>
          <span>
            <a href class="know_more">进一步了解 >></a>
          </span>
        </div>
        <div class="dryer_slide">
          <!-- <el-carousel :interval="3000" arrow="always">
            <el-carousel-item v-for="(item,index) in slideImages" :key="index">
              <img :src="item.idView">
            </el-carousel-item>
          </el-carousel>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SlideShow",
  data() {
    return {
      activeIndex: '1',
      slideImages: [
        { id: 0, idView: require("@/assets/pic1.png") },
        { id: 1, idView: require("@/assets/pic2.png") },
      ]
    }
  },
  methods: {}
}
</script>
<style>
.body {
  margin-top: 50px;
}
.el-menu {
  text-align: center;
  height: 30px;
  line-height: 30px;
}
.el-menu--horizontal > .el-menu-item {
  height: 30px;
  line-height: 30px;
}
.el-menu-demo {
  width: 300px;
  margin: 0 auto;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
  margin-bottom: 30px;
}
.el-menu-demo li {
  font-size: 18px;
  font-weight: 700;
}
.exhibition {
  height: 306px;
  width: 718px;
  margin: 0 auto;
}
.exhibition_left {
  width: 306px;
  height: 317px;
  border: 1px solid red;
}
.dryer_top {
  margin: 36px auto 0px auto;
}
.dryer_top span {
  display: block;
  text-align: center;
}
.dryer_top span:nth-child(1) {
  font-size: 17px;
  font-weight: 700;
}
.dryer_top span:nth-child(2) a {
  display: inline-block;
  font-size: 10px;
  color: #6490e8;
  text-decoration: none;
  margin-top: 5px;
}
.exhibition_left .el-carousel__container,
.exhibition_left .el-carousel {
  width: 306px;
  height: 317px;
}
.exhibition_left .exhibition_left img {
  width: 94px;
  height: 92px;
}
</style>


