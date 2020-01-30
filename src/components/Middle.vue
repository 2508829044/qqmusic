<template>
  <div class="Middle">
    <h1>M V</h1>
    <div class="Middle-body">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <ul>
            <li
              v-for="(item, index) in arrone"
              :key="item.index"
              @click="clickone(item, index)"
              @mouseover="swtich"
            >
              <img
                src="../../public/img/icons/pass.png"
                class="img-app"
                :id="{ active: bloot }"
              />
              <img :src="item.picurl" style="width:224px;height:126px;" />
              <span>{{ item.mvtitle }}</span>
              <a href="#">{{ item.singer_name }}</a>
              <p>播放次数:{{ item.listennum }}</p>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide class="suspend">
          <ul>
            <li v-for="item in arrtwo" :key="item.index">
              <el-image :src="item.picurl" lazy></el-image>
              <span>{{ item.mvtitle }}</span>
              <a href="#">{{ item.singer_name }}</a>
              <p>播放次数:{{ item.listennum }}</p>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul>
            <li v-for="item in arrthire" :key="item.index">
              <img :src="item.picurl" style="width:224px;height:126px;" />
              <span>{{ item.mvtitle }}</span>
              <a href="#">{{ item.singer_name }}</a>
              <p>播放次数:{{ item.listennum }}</p>
            </li>
          </ul>
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      arrone: [],
      arrtwo: [],
      arrthire: [],
      bloot: false,
      swiperOption: {
        Autoplay: true
      }
    };
  },
  methods: {
    logan: function() {
      this.http.get("https://api.myjson.com/bins/16a5f2").then(res => {
        this.arr = res.data.data.mvlist;
        for (var i = 0; i <= this.arr.length; i++) {
          //截取数组前10位
          this.arrone.push(this.arr[i]);
          if (this.arrone.length == 10) {
            break;
          }
        }
        for (var y = 10; y <= this.arr.length; y++) {
          //截取数组后10位
          this.arrtwo.push(this.arr[y]);
          if (this.arrtwo.length == 10) {
            break;
          }
        }
        for (var x = 20; x <= this.arr.length; x++) {
          //截取数组后10位
          this.arrthire.push(this.arr[x]);
          if (this.arrthire.length == 10) {
            break;
          }
        }
      });
    },
    clickone: function(item, index) {
      //根据相应id储存mv以便子页面打开获取播放
      if (index == this.$store.state.Localstorage[index].id) {
        this.arrone[index]["video"] = this.$store.state.Localstorage[
          index
        ].video;
        this.arrone[index]["id"] = this.$store.state.Localstorage[index].id;
        localStorage.setItem("MV", JSON.stringify(this.arrone[index]));
        console.log(this.arrone[index]);
      } else {
        console.log("对不起其实我们不合适");
      }
      window.location.href = "http://localhost:8080/#/Classifiedsinginglist";
    },
    swtich: function() {
      this.bloot = true;
      console.log(this.bloot);
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.logan();
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(1, 1000, true);
  }
};
</script>

<style scoped="scoped" lang="less">
* {
  margin: 0px;
  padding: 0px;
}
a,
li {
  text-decoration: none;
  list-style-type: none;
}
.Middle {
  width: 100%;
  margin: 0px auto;
  height: 550px;
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
  .Middle-body {
    width: 100%;
    height: 425px;
    margin: 0px auto;
    ul {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        width: 224px;
        height: 215px;
        span {
          width: 100%;
          display: block;
          padding-top: 7px;
          font-size: 13px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        a {
          text-decoration: none;
          font-size: 13px;
          color: #999;
          padding-top: 5px;
          display: block;
        }
        p {
          color: #999;
          font-size: 13px;
          padding-top: 4px;
        }
      }
    }
  }
}
.swiper-container {
  width: 100%;
  height: 450px;
}
.swiper-slide {
  height: 66%;
}

.img-app {
  position: absolute;
  width: 70px;
  height: 70px;
  padding: 30px 70px;
  display: none;
}
#active img {
  display: block;
  position: absolute;
  width: 70px;
  height: 70px;
  padding: 30px 70px;
  display: block;
}
</style>
