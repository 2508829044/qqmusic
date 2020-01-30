<template>
  <div class="floot">
    <h1>新 碟 首 发</h1>
    <div class="floot-head">
      <ul>
        <li
          v-for="(item, index) in title"
          :key="item.index"
          :class="{ active: index == ins }"
          @click="swicte(index)"
        >
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="floot-muisc">
      <ul>
        <li v-for="time in obje" :key="time.index">
          <img :src="time.cover" style="width:224px;height:224px;" />
          <p style="font-size:14px;">{{ time.name }}</p>
          <span style="font-size:14px;color: rgb(171,171,171);">{{
            time.singers[0].name
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "floot",
  data() {
    return {
      title: null,
      ins: 0,
      obje: null
    };
  },
  mounted() {
    this.swicte();
  },
  methods: {
    swicte: function(index) {
      this.ins = index;
      var num = index;
      num = 0;
      this.http.get("http://localhost:8080/qq.json").then(res => {
        this.title = res.data.new_album_tag.data.area; //获取标题
        console.log(res.data.new_album.data.albums);

        if (num == 0) {
          this.obje = res.data.new_album.data.albums;
          for (var i = 0; i <= this.obje.length; i++) {
            this.obje[i]["cover"] = this.$store.state.Music[i].cover;
            console.log(this.obje);
          }
        } else {
          console.log("等一下");
        }
      });
    }
  }
};
</script>

<style scoped="scoped" lang="less">
* {
  margin: 0px;
  padding: 0px;
}
li,
a {
  text-decoration: none;
  list-style-type: none;
}
.floot {
  width: 100%;
  margin: 0px auto;
  /*height:430px;*/
  background-color: rgb(242, 242, 242);
  h1 {
    text-align: center;
    display: block;
    width: 100%;
    margin: 0px auto;
    padding-top: 40px;
    font-size: 29px;
    padding-bottom: 20px;
  }
  .floot-head {
    width: 40%;
    margin: 0px auto;
    ul {
      display: flex;
      justify-content: space-around;
      li {
        span {
          cursor: pointer;
        }
      }
    }
  }
  .floot-muisc {
    width: 100%;
    /*height:480px;*/
    margin: 0px auto;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        padding-top: 20px;
        padding-left: 25px;
      }
    }
  }
}
.active span {
  color: green;
}
</style>
