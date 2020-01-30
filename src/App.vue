<template>
  <div id="app">
    <head-app></head-app>
    <router-view />

    <floot-app></floot-app>
  </div>
</template>
<script>
import head from "./components/head.vue";
export default {
  name: "app",
  components: {
    "head-app": head
  }
};
</script>
<style lang="less">
* {
  margin: 0px;
  padding: 0px;
}
</style>
