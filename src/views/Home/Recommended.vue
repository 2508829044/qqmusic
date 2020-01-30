<template>
  <div>
    <div class="Recommended">
      <el-carousel :interval="4000" type="card" height="228px">
        <el-carousel-item v-for="item in chart" :key="item.index">
          <img :src="item.img" style="width:100%;" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <Middle-app></Middle-app>
    <app-body></app-body>
    <app-floot></app-floot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chart: [
        {
          img:
            "//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1983516.jpg?max_age=2592000"
        },
        {
          img:
            "//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1980307.jpg?max_age=2592000"
        },
        {
          img:
            "//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1981127.jpg?max_age=2592000"
        },
        {
          img:
            "//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1974570.jpg?max_age=2592000"
        },
        {
          img:
            "//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1979073.jpg?max_age=2592000"
        },
        {
          img:
            "//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1971044.jpg?max_age=2592000"
        }
      ]
    };
  }
};
</script>

<style scoped="scoped" lang="less">
.Recommended {
  width: 100%;
  height: 250px;
}
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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
