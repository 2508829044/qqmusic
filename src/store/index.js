import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nav: [
      { name: "音乐馆", id: 0 },
      { name: "我的音乐", id: 1 },
      { name: "客户端", id: 2 },
      { name: "开发平台", id: 3 },
      { name: "VIP", id: 4 }
    ],
    navone: [
      { name: "首页", id: 0, path: "/" },
      { name: "歌手", id: 1, path: "About" },
      { name: "新碟", id: 2, path: "Newdish" },
      { name: "排行榜", id: 3, path: "RankingList" },
      { name: "分类歌单", id: 4 },
      { name: "电台", id: 5 },
      { name: "MV", id: 6 },
      { name: "数字专辑", id: 7 },
      { name: "票务", id: 8 }
    ],
    obje: [
      { name: "为你推荐", path: "Recommended" },
      { name: "官方歌单", path: "Official" },
      { name: "情歌" },
      { name: "网络歌曲" },
      { name: "经典" },
      { name: "KTV热歌" }
    ],
    Localstorage: [
      {
        video:
          "http://183.232.63.149/mv.music.tc.qq.com/AvraFSRN7B7NVx3o2Xm9V-HUjAxju_u3GPMcCjAGBZ9Y/05067522968F307CF7284AD0F3ABC740D45D529046472116B3151C4E0B0F939338B00A6B3469E5536822A1EB08B4539FZZqqmusic_default/1049_M0116300000I3FJ50r9U2w1001703879.f9844.mp4?fname=1049_M0116300000I3FJ50r9U2w1001703879.f9844.mp4",
        id: 0
      },
      {
        video:
          "http://183.232.63.151/mv.music.tc.qq.com/AmThFYU6p6cLJySrgg2o9LrKGYme2XXOpK0hoAg-KOvw/93260AE5F9EBB2BFF026941EF118124D8EEA5FEE3B64C7C08F47C088708865B3ADBF5D737D2B3BAD212D497E9D7254F6ZZqqmusic_default/1049_M0124400001DMbe53elHVh1001703800.f9844.mp4?fname=1049_M0124400001DMbe53elHVh1001703800.f9844.mp4",
        id: 1
      },
      {
        video:
          "http://183.232.63.149/mv.music.tc.qq.com/A0ftUVKERjSz5pqi5L4x9hiKNrWB8zfxYCqM5ikdlo80/223B7B4BB260ABE835628051A29906C0D65B6054E0B35326D406700E6A0F19B6FE6435C8417346873CCF14DDB61FAF1CZZqqmusic_default/1049_M0130200000EBdA92j3TSs1001704083.f9844.mp4?fname=1049_M0130200000EBdA92j3TSs1001704083.f9844.mp4",
        id: 2
      },
      {
        video:
          "http://183.232.63.160/mv.music.tc.qq.com/A1BDM9nM4G6GXEdTmq9667nIUtWkuRq2JfCawCqWeWeY/9354A7555AE447528C446182483D02D32B731B79B9FFE3BD86D39402F6DDB916A7070C685EB088EED131876C69A79A6AZZqqmusic_default/1049_M0101004003AVVUR4cVKi21001703685.f9844.mp4?fname=1049_M0101004003AVVUR4cVKi21001703685.f9844.mp4",
        id: 3
      },
      {
        video:
          "http://183.232.63.146/mv.music.tc.qq.com/AM6-u1vypEnic6Mu32U9KjcJx5aWQhSIJKPQEhcbMjl8/7FB5B3CA03C1455D2CC101C552A9E002C776D1E995B31D44EDE83700D9327042893786CF64377578CD390A78E2FDF640ZZqqmusic_default/1049_M027800000092Plg0jkUBk1001703446.f9844.mp4?fname=1049_M027800000092Plg0jkUBk1001703446.f9844.mp4",
        id: 4
      },
      {
        video:
          "http://183.232.63.152/mv.music.tc.qq.com/A1iQKT1NRTm1MJ0LDFp8gr8sEgSQHLM3OTZ9r8BcabZg/A4C2AFF7A9324F343966FF067DD2AAB72DC3707D54C209F4D06FCD0F45F51C1FFB94D0AAA578AC69DCAC800A289C921CZZqqmusic_default/1049_M0110300001UlCKH0PKjcE1001703100.f9844.mp4?fname=1049_M0110300001UlCKH0PKjcE1001703100.f9844.mp4",
        id: 5
      },
      {
        video:
          "http://183.232.63.156/mv.music.tc.qq.com/AoHYBr1LYHah2asD85f9Hqdi_9yoILdD96QaSPDNRV1E/7424F223CB3305F274D526E7203BF4CA156752B0BA346D32149205F65713276750BAA0697CE1B4C19EE438C6BF44EEC9ZZqqmusic_default/1049_M0102015004ePha53bpeJc1001703297.f9844.mp4?fname=1049_M0102015004ePha53bpeJc1001703297.f9844.mp4",
        id: 6
      },
      {
        video:
          "http://183.232.63.144/mv.music.tc.qq.com/AJu8IZaSwBd0p8_359moisLqPj8mWwe0qvq8g8r-Wuk8/01C94A49A8BCCD2BEF323BE66189EBE1B5197FF3CC92DA9B6284C1079EAB236685B88E1BAEC926846E423640E554796DZZqqmusic_default/1049_M0110200000Ke3qh2wpemX1001703508.f9844.mp4?fname=1049_M0110200000Ke3qh2wpemX1001703508.f9844.mp4",
        id: 7
      },
      {
        video:
          "http://183.232.63.152/mv.music.tc.qq.com/A8MWhHJWtT-2_8_BTJAZLJvKUO94dqw4SnkpxgMWqn3k/BC890C4A11DEB40F9DF6736A5986F72566551F850A74261AA513E2D4AF1CE4A965834EAC590CDA7F2DBD9E545A159E21ZZqqmusic_default/1049_M0101239000IIkjd05nLtN1001703268.f9844.mp4?fname=1049_M0101239000IIkjd05nLtN1001703268.f9844.mp4",
        id: 8
      },
      {
        video:
          "http://183.232.63.150/mv.music.tc.qq.com/ALK6VE5O07lpaOW9J0ko8WLLfpT_ERvYW1K82Vt9SXbA/49E3A2971AF91C9BD02DFA4873EF1AE4CD828E5BA70836AF843CC716B17EF0677F1E669B89E32D9109B01BD8C124D3D6ZZqqmusic_default/1049_M0101221000VFPvc10RDE81001703117.f9844.mp4?fname=1049_M0101221000VFPvc10RDE81001703117.f9844.mp4",
        id: 9
      }
    ],
    Music: [
      {
        cover:
          "//y.gtimg.cn/music/photo_new/T002R90x90M000003PvOKo2pvNgS_1.jpg?max_age=2592000"
      },
      {
        cover:
          "//y.gtimg.cn/music/photo_new/T002R300x300M000001AE4t22I8qX4.jpg?max_age=2592000"
      },
      {
        cover:
          "//y.gtimg.cn/music/photo_new/T002R300x300M000003V6LiD0MEQE4_1.jpg?max_age=2592000"
      },
      {
        cover:
          "//y.gtimg.cn/music/photo_new/T002R300x300M0000006cU6k1IdKug_1.jpg?max_age=2592000"
      },
      {
        cover:
          "//y.gtimg.cn/music/photo_new/T002R300x300M000001HowjU1C8uKB_1.jpg?max_age=2592000"
      },
      {
        cover:
          "//y.gtimg.cn/music/photo_new/T002R300x300M000002ymzY64D3pwK_1.jpg?max_age=2592000"
      },
      {
        cover:
          "//y.gtimg.cn/music/photo_new/T002R300x300M000000V6zJe0c0IZw_1.jpg?max_age=2592000"
      },
      {
        cover:
          "//y.gtimg.cn/music/photo_new/T002R300x300M000000Zp2Hu3XmGMl_1.jpg?max_age=2592000"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
