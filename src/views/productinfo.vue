<template>
  <div>
    <section class="product" id="product">
      <div class="center" ref="center">
        <img
          src="../../public/productinfo_icon/product.png"
          alt=""
          class="titleone"
        />
        <div class="slider-container" id="container">
          <div id="list" class="slider" style="left: 0vw">
            <div class="slider__item">
              <div class="nm">矿小助App</div>
              <a href="https://kxz.atcumt.com"></a>
              <img src="../../public/productinfo/kxz.png" alt="0" />
              <p class="ab">
                <br />
                <span class="slider__caption family"
                  >矿小助提供课表、考试、成绩、校车校历、图书馆藏、校卡余额、宿舍电量等查询功能；同时具有课表导入日历、加权成绩计算、校园网自动登录、个性化主题背景等实用功能。
                </span>
              </p>
            </div>
            <div class="slider__item">
              <div class="nm">校园网络助手</div>
              <a href="https://jq.qq.com/?_wv=1027&k=WM7qZEHB"></a>
              <img src="../../public/productinfo/nav.jpg" alt="1" />
              <p class="ab">
                <br />
                <span class="slider__caption family"
                  >还在为电脑连校网操作复杂而烦恼吗？还为校园网络不稳定而焦虑吗？快让校园网络助手来帮你——快捷登录注销校园网络，断网自动连接！</span
                >
              </p>
            </div>
            <div class="slider__item">
              <div class="nm">矿大校庆头像</div>
              <a href="https://jq.qq.com/?_wv=1027&k=WM7qZEHB"></a>
              <img src="../../public/productinfo/ybface.jpg" alt="2" />
              <p class="ab">
                <br />
                <span class="slider__caption family"
                  >微信搜索小程序“矿大头像戳”，快来pick专属与你的矿大112周年校庆头像框吧！</span
                >
              </p>
            </div>
            <div class="slider__item">
              <div class="nm">矿大文库（维护）</div>
              <a href="https://jq.qq.com/?_wv=1027&k=WM7qZEHB"></a>
              <img src="../../public/productinfo/wenku.jpg" alt="3" />
              <p class="ab">
                <br />
                <span class="slider__caption famliy"
                  >一个矿大专有资料分享网站，如果你还在为课件PPT，试卷考题，物理实验愁苦，通过这个网站，你可以发现很多丰富的资源！</span
                >
              </p>
            </div>
            <div class="slider__item">
              <div class="nm">矿大导航（维护）</div>
              <a href="https://jq.qq.com/?_wv=1027&k=WM7qZEHB"></a>
              <img class="" src="../../public/productinfo/nav.jpg" alt="4" />
              <p class="ab">
                <br />
                <span class="slider__caption family"
                  >矿大人的导航应用，有着生活学习需要的很多快捷链接！
                </span>
              </p>
            </div>
            <div class="slider__item">
              <div class="nm">矿小淘（维护）</div>
              <a href="https://jq.qq.com/?_wv=1027&k=WM7qZEHB"></a>
              <img src="../../public/productinfo/nav.jpg" alt="5" />
              <p class="ab">
                <br />
                <span class="slider__caption family"
                  >一个专属矿大学子的二手交易APP。如果你有闲置的想要出手的物品，或者你有想要购入的二手物品，上淘矿，满足你的所需，淘到你的所想。</span
                >
              </p>
            </div>
            <div class="slider__item">
              <div class="nm">矿大浏览器</div>
              <a
                href="http://www.wandoujia.com/apps/com.flyingstudio.cumtbrowser"
              ></a>
              <img src="../../public/productinfo/矿大浏览器.png" alt="6" />
              <p class="ab">
                <br />
                <span class="slider__caption family"
                  >导航站对应的链接导航类APP，有着所有矿大的链接，实时更新近期的校内新闻和学术讲座，不定期更新的背景带你领略矿大的美，体贴小煤球的生活！
                </span>
              </p>
            </div>
            <div class="slider__item">
              <div class="nm">值班人脸签到</div>
              <a href="https://jq.qq.com/?_wv=1027&k=WM7qZEHB"></a>
              <img src="../../public/productinfo/ybface.jpg" alt="7" />
              <p class="ab">
                <br />
                <span class="slider__caption family"
                  >针对社团值班的自动化签到系统！</span
                >
              </p>
            </div>
          </div>
        </div>
        <img
          src="../../public/productinfo_icon/btn_5.png"
          alt=""
          class="titletwo"
        />
        <div id="buttons" class="preview">
          <span index="1" class="on"></span>
          <span index="2"></span>
          <span index="3"></span>
          <span index="4"></span>
          <span index="5"></span>
          <span index="6"></span>
          <span index="7"></span>
          <span index="8"></span>
        </div>
        <a href="javascript:;" id="prev" class="arrow prev">
          <img src="../../public/productinfo_icon/right.png" alt="" />
        </a>
        <a href="javascript:;" id="next" class="arrow next">
          <img src="../../public/productinfo_icon/left.png" alt="" />
        </a>
      </div>
    </section>
    <Play @dian="go" ref="play"></Play>
  </div>
</template>
<script>
import "../../src/assets/js/slider";
import Play from "../components/play.vue";
export default {
  data() {
    return {
      index: 1,
    };
  },
  methods: {
    go() {
      console.log("dian");
      this.$refs.play.start();
    },
  },
  created() {
    setTimeout(() => {
      this.$router.push("/aboutus");
    }, 1000);
    setTimeout(() => {
      this.$router.push("/starmembers");
    }, 2000);
    setTimeout(() => {
      this.$router.push("/blog");
    }, 3200);
    setTimeout(() => {
      this.$router.push("/shouye");
    }, 3900);
  },
  mounted() {},
  components: { Play },
};
</script>
<style scoped>
@import url(../assets/css/slider.css);
#product {
  height: 900px;
}
.center {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 200px;
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
}

.titleone {
  top: 318px;
  left: 100px;
  width: 350px;
  height: 130px;
  box-shadow: 2px 2px 20px 4px rgb(0 0 0 / 50%);
}
.arrow {
  position: absolute;
  z-index: 9999;
  top: 450px;
  cursor: pointer;
}
#prev {
  position: absolute;
  top: 465px;
  left: 46px;
}
#next {
  top: 465px;
  left: 470px;
}
</style>