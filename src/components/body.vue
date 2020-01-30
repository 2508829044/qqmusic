<template>
  <div class="body">
    <h1>歌 单 推 荐</h1>
    <div class="body-app">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-ul">
          <ul>
            <li v-for="item in objeone[0]" :key="item.index">
              <img :src="item.cover" />
              <p>{{ item.title }}</p>
              <span>播放量:{{ item.listen_num }}</span>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide class="swiper-ul">
          <ul>
            <li v-for="item in objetwo[0]" :key="item.index">
              <img :src="item.cover" />
              <p>{{ item.title }}</p>
              <span>播放量:{{ item.listen_num }}</span>
            </li>
          </ul>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        Autoplay: true
      },
      obje: [],
      objeone: [],
      objetwo: []
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.qqmusic();
    console.log("this is current swiper instance object", this.swiper); //swiper轮播图插件
    this.swiper.slideTo(1, 1000, false);
  },
  methods: {
    qqmusic: function() {
      this.http.get("http://localhost:8080/qq.json").then(res => {
        for (var i = 0; i <= res.data.recomPlaylist.data.v_hot.length; i++) {
          //利用循环进行第一次数组分离
          this.obje.push(res.data.recomPlaylist.data.v_hot[i]);
          if (this.obje.length == 10) {
            this.objeone.push(this.obje.slice(0, 5)); //利用js数组属性选取任意数组长度进行第二次数组分离
            this.objetwo.push(this.obje.slice(5, 10));
            console.log(this.objetwo);
            break;
          }
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
a,
li {
  list-style-type: none;
  text-decoration: none;
}
.body {
  width: 100%;
  margin: 0px auto;
  height: 430px;
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
}
.swiper-container {
  width: 100%;
  height: 295px;
}
.swiper-slide {
  height: 66%;
}
.swiper-ul {
  ul {
    display: flex;
    justify-content: space-around;
    li {
      width: 224px;
      img {
        width: 224px;
        height: 224px;
      }
      p {
        font-size: 14.3px;
        padding-top: 5px;
      }
      span {
        font-size: 14px;
        color: rgb(162, 162, 162);
      }
    }
  }
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 40%;
  width: 27px;
  height: 44px;
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
  background-size: 27px 44px;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
