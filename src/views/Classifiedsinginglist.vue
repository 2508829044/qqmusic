<template>
  <div class="Classifiedsinginglist">
    <video :src="arr.video" controls="controls" autoplay="autoplay"></video>
    <ul>
      <li>
        <span>{{ arr.mvtitle }} -</span>
      </li>
      <li v-for="item in arr.singers" :key="item.index">
        <a>{{ item.name }}</a>
      </li>
      <b>播放量:{{ arr.listennum }}</b>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      arr: []
    };
  },
  mounted() {
    this.arr = JSON.parse(localStorage.getItem("MV"));
    console.log(this.arr);
  }
};
</script>

<style scoped="scoped" lang="less">
a,
li {
  list-style-type: none;
  text-decoration: none;
}
.Classifiedsinginglist {
  width: 100%;
  height: 778px;
  background-color: rgb(51, 51, 51);
  video {
    width: 95%;
    padding-top: 40px;
    margin: 0px auto;
    display: block;
  }
  ul {
    display: flex;
    li {
      padding-top: 16px;
    }
  }
  span {
    font-size: 22px;
    color: rgb(255, 255, 255);
    padding-left: 30px;
  }
  a {
    font-size: 22px;
    color: rgb(255, 255, 255);
    padding-left: 10px;
  }
  b {
    font-family: poppin, Tahoma, Arial, \5fae\8f6f\96c5\9ed1, sans-serif;
    font-size: 14px;
    color: #999;
    font-weight: 300;
    padding-top: 25px;
    padding-left: 15px;
  }
}
</style>
