<template>
  <div class="head">
    <div class="head-nav">
      <ul>
        <li>
          <img src="//y.gtimg.cn/mediastyle/yqq/img/logo@2x.png?nowebp=1 2x" />
        </li>
        <li v-for="item in logan" :key="item.index" style="font-size:18px;">
          <span>{{ item.name }}</span>
        </li>
        <li><input type="text" /></li>
        <li>登录</li>
        <li><span>开通绿钻豪华版</span></li>
        <li>开通付费包</li>
      </ul>
    </div>
    <div class="head-navone">
      <ul>
        <router-link
          tag="li"
          v-for="time in switchone"
          :to="{ path: time.path }"
          :key="time.index"
        >
          {{ time.name }}
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "headd",
  data() {
    return {};
  },
  computed: {
    logan: function() {
      return this.$store.state.nav;
    },
    switchone: function() {
      return this.$store.state.navone;
    }
  }
};
</script>

<style scoped="scoped" lang="less">
li {
  list-style-type: none;
  cursor: pointer;
}
.head {
  width: 100%;
  height: 180px;
  display: flex;
  flex-wrap: wrap;
  li:hover {
    color: rgb(49, 194, 124);
  }
  h1 {
    text-align: center;
    line-height: 180px;
  }
  .head-nav {
    width: 95%;
    margin: 0px auto;
    float: right;
    padding-top: 35px;
    border-bottom: 1px solid rgb(242, 242, 242);
    ul {
      display: flex;
      justify-content: space-around;
      li {
        list-style-type: none;
        height: 38px;
        line-height: 38px;
        img {
          width: 170px;
          height: 46px;
        }
      }
      li:nth-last-child(2) {
        width: 111px;
        height: 38px;
        background-color: rgb(49, 194, 124);
        font-size: 13.5px;
        border-radius: 4px;
        text-align: center;
        line-height: 38px;
        color: rgb(255, 255, 255);
      }
      li:nth-last-child(1) {
        width: 90px;
        height: 38px;
        border: 1px solid rgb(201, 201, 201);
        border-radius: 4px;
        font-size: 13.5px;
        text-align: center;
        line-height: 38px;
      }
      input {
        width: 220px;
        height: 36px;
        border-radius: 5px;
      }
    }
  }
  .head-navone {
    width: 71%;
    height: 5px;
    margin: 0px auto;
    ul {
      display: flex;
      justify-content: space-around;
      li {
        line-height: 50px;
      }
    }
  }
}
</style>
