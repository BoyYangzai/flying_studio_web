<template>
  <section class="depart" id="depart">
    <div class="center" style="width: 1500px">
     <div class="fixjiantou">
  <div id="left">
           <a
      href="javascript:;"
      id="depart_prev"
      class="d-arrow d_prev"
      @click="preclick"
    >
      <img src="../../public/aboutus/right2.png" alt="" class="d-btn1" />
    </a>
 
  </div>
     <div id="right">
          <a
      href="javascript:;"
      id="depart_next"
      class="d-arrow d_next"
      @click="nextclick"
    >
      <img src="../../public/aboutus/left2.png" alt="" class="d-btn2" />
    </a>
    </div>
        <img
        src="../../public/aboutus/depart-img.png"
        alt=""
        class="back_ground"
      />
     </div>
      <div class="depart_hidden" id="depart_hidden">
        <div
          class="depart_list"
          id="depart_list"
          style="left: 0vw"
          @click="listclick"
          ref="list"
        >
          <div class="depart_slide">
            <span>运营组</span>
            <P
              >学生在线的产品谁来推广？文案谁来写？宣传谁来搞？技术与非技术组之间该如何交流？工作室与用户如何达成一致？学生在线公众号谁来运营？没错，就是运营，运营组就是多功能的粘合剂！</P
            >
            <img src="../../public/aboutus/group_operate.jpeg" alt="运营" />
          </div>
          <div class="depart_slide">
            <span>前端组</span>
            <p>
              听说过HTML，JavaScript吗？前端基本就在研究这个，你在网页上能看到的东西就是前端。学生在线前端组有若干大牛提供前端技术的指导。相比较后端而言，前端可能更加易于上手。
            </p>
            <img src="../../public/aboutus/group_FE.jpg" alt="前端" />
          </div>
          <div class="depart_slide">
            <span>后端组</span>
            <p>
              与可视的前端不同，后端组隐于幕后。数据库交互，各种Web框架是后端组的方向。推荐有一些基础的同学参加。悄悄告诉你，技术副站长就是后端大佬呢。
            </p>
            <img src="../../public/aboutus/group_BE.jpg" alt="后端" />
          </div>
          <div class="depart_slide">
            <span>移动组</span>
            <p>
              致力于APP的开发。Android与iOS，引领新技术潮流。想看我们具体的成果？矿小助App，淘矿App，矿大浏览器！移动互联欢迎你！
            </p>
            <img src="../../public/aboutus/group_mobile.jpg" alt="移动" />
          </div>
          <div class="depart_slide">
            <span>视觉组</span>
            <p>
              只有前端的交互怎么够用呢？做海报，设计UI，视觉设计组举手投足间可以将这一切摆平！视觉组一定是艺术家们的天堂。
            </p>
            <img src="../../public/aboutus/group_view.jpg" alt="视觉" />
          </div>

          <div class="depart_slide">
            <span>视频组</span>
            <p>
              视频组负责工作室的视频制作和特效，有专业的摄影设备和无人机，运用Premiere、After
              Effects等专业软件进行制作动画和剪辑视频，组内成员思维新颖，工作激情。延时摄影微电影，文艺范十足！
            </p>
            <img src="../../public/aboutus/group_video.jpg" alt="视频" />
          </div>
        </div>
      </div>
    </div>
  <!-- 移动端轮播图 -->
        <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <div class="bigword">
            {{bigword[index]}}
            </div>
          <img :src="item" alt="" />
          <span class="word">{{ word[index] }}</span>
        </van-swipe-item>
      </van-swipe>

  </section>
    
</template>
<script>
// import "../assets/js/department";前辈用原生js写，已用下面代码替换
export default {
  setup() {},
  data() {
    return {
      num: 1,
       images: [
        "/img/group_operate.efacba88.jpeg",
        "/img/group_FE.87ed5d69.jpg",
        "/img/group_BE.2de1f48e.jpg",
        "/img/group_mobile.f1af7c52.jpg",
        "/img/group_view.9dc22001.jpg",
        "/img/group_video.523c8661.jpg"
      ],
      bigword:[
        '运营组',
        '前端组',
        '后端组',
        '移动组',
        '视觉组',
        '视频组'
      ],
      word: [
        "学生在线的产品谁来推广？文案谁来写？宣传谁来搞？技术与非技术组之间该如何交流？工作室与用户如何达成一致？学生在线公众号谁来运营？没错，就是运营，运营组就是多功能的粘合剂！",
        " 听说过HTML，JavaScript吗？前端基本就在研究这个，你在网页上能看到的东西就是前端。学生在线前端组有若干大牛提供前端技术的指导。相比较后端而言，前端可能更加易于上手。 ",
        " 与可视的前端不同，后端组隐于幕后。数据库交互，各种Web框架是后端组的方向。推荐有一些基础的同学参加。悄悄告诉你，技术副站长就是后端大佬呢。 ",
        " 致力于APP的开发。Android与iOS，引领新技术潮流。想看我们具体的成果？矿小助App，淘矿App，矿大浏览器！移动互联欢迎你！ ",
        " 只有前端的交互怎么够用呢？做海报，设计UI，视觉设计组举手投足间可以将这一切摆平！视觉组一定是艺术家们的天堂。  ",
        " 视频组负责工作室的视频制作和特效，有专业的摄影设备和无人机，运用Premiere、After Effects等专业软件进行制作动画和剪辑视频，组内成员思维新颖，工作激情。延时摄影微电影，文艺范十足！ "
      ],
    };
  },
  methods: {
    listclick() {},
    nextclick() {
      if (this.num > 5) {
        this.num = 0;
        this.$refs.list.native.style.left = 0 + "vw";
      } else {
        this.$refs.list.style.left = -100 * this.num + "vw";
      }
      this.num += 1;
    },
    preclick() {
      this.num -= 1;
      if (this.num < 1) {
        this.num = 7;
        this.$refs.list.style.left = -500 + "vw";
      } else {
        this.$refs.list.style.left = -100 * (this.num - 1) + "vw";
      }
    },
  },
};
</script>
<style scoped>
@import url(../assets/css/department.css);
@media screen and (min-width:500px) {

#depart {
  background-color: transparent;
  height: 100%;
}
.center{
  position: absolute;
  margin-left: 190px;
  margin-top: 90px;
}
.fixjiantou{
  position: absolute;
  width: 480px;
  height: 550px;
}

#left{
  position: absolute;
  z-index: 999;
  width: 100px;
  height: 100px;
  left: 550px;
  top: 300px;
}
#right{
  position: absolute;
  z-index: 999;
  width: 100px;
  height: 100px;
  left:1440px;
  top: 300px;
}
.depart {
  z-index: 888;
  height: 900px;
}
.depart_hidden {
  position: relative;
  width: 1640px;
  height: 700px;
  overflow: hidden;
}
.van-swipe{
  display: none;
}
}
@media screen and (max-width:500px) {
.center{
  display: none;
}

  .van-swipe {
    position: absolute;
    top: 10rem;
  }

.bigword{
  width: 100%;
  text-align: center;
  color: rgba(255, 255, 255, 0.954);
  font-size: 2.6rem;
   font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
}
.van-swipe{
  width: 100vw;
  overflow: hidden;
}
.van-swipe-item ::v-deep img {
  margin-top: .2rem;
    width: 100%;
    height: 14rem;
  }
 
  .word {
    display: block;
    margin-top: 0.3rem;
    color: rgba(255, 255, 255, 0.952);
    font-weight: 700;
    font-size: 1.2rem;
  }
  .van-swipe ::v-deep .van-swipe__indicators
  {
    bottom: 0;
  }
}
</style>