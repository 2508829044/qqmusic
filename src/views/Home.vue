<template>
  <div class="home">
    <h1>精 彩 推 荐</h1>
    <div class="home-nav">
      <ul>
        <router-link
          v-for="item in obje"
          :to="{ path: item.path }"
          tag="li"
          :key="item.index"
        >
          {{ item.name }}
        </router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    obje: function() {
      return this.$store.state.obje;
    }
  }
};
</script>
<style scoped="scoped" lang="less">
.home {
  width: 100%;
  height: 430px;
  background-color: rgb(243, 243, 243);
  h1 {
    text-align: center;
    display: block;
    width: 100%;
    margin: 0px auto;
    padding-top: 40px;
    font-size: 29px;
  }
  .home-nav {
    width: 50%;
    height: 30px;
    margin: 0px auto;
    padding-top: 30px;
    padding-bottom: 30px;
    ul {
      display: flex;
      justify-content: space-around;
      li {
        list-style-type: none;
      }
    }
  }
}
</style>
