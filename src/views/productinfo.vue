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
              <img
                src="../../public/productinfo/kxz.png"
                @load="refresh"
                alt="0"
              />
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
      <van-swipe :autoplay="2000">
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <div class="bigword">
            {{bigword[index]}}
            </div>
          <img :src="item" alt="" />
          <span class="word">{{ word[index] }}</span>
        </van-swipe-item>
      </van-swipe>
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
      images: [
        "/img/kxz.86a279af.png",
        "/img/nav.bfa04310.jpg",
        "/img/ybface.d9ad9c7f.jpg",
        "/img/wenku.684e09d9.jpg",
        "/img/矿大浏览器.09b3f519.png",
      ],
      bigword:[
        ' 矿小助App',
        '网络校园助手',
        '矿大校庆头像',
        '矿大文库（维护）',
        '矿大浏览器'
      ],
      word: [
        "矿小助提供课表、考试、成绩、校车校历、图书馆藏、校卡余额、宿舍电量等查询功能；同时具有课表导入日历、加权成绩计算、校园网自动登录、个性化主题背景等实用功能。",
        "还在为电脑连校网操作复杂而烦恼吗？还为校园网络不稳定而焦虑吗？快让校园网络助手来帮你——快捷登录注销校园网络，断网自动连接！",
        "微信搜索小程序“矿大头像戳”，快来pick专属与你的矿大112周年校庆头像框吧！",
        "一个矿大专有资料分享网站，如果你还在为课件PPT，试卷考题，物理实验愁苦，通过这个网站，你可以发现很多丰富的资源！",
        "导航站对应的链接导航类APP，有着所有矿大的链接，实时更新近期的校内新闻和学术讲座，不定期更新的背景带你领略矿大的美，体贴小煤球的生活！ ",
      ],
    };
  },
  methods: {
    go() {
      console.log("dian");
      this.$refs.play.start();
    },
    refresh() {},
  },
  //解决法一，但不完美：
  // created() {
  //   //解决先加载首页轮播图失效的bug 但是又出现另一个bug--第二页必须先刷新 此时壁纸颜色会变回第一张
  //   if (window.localStorage.getItem("shuaxin") == "1") {
  //     setTimeout(() => {
  //       window.location.reload();
  //       window.localStorage.setItem("shuaxin", "2");
  //     }, 1000);
  //   }
  //   var body = document.getElementsByTagName("body");

  //   body[0].className = "bodycolor" + window.localStorage.getItem("bgcflag"); //自动刷新且背景不变  bug算是掩盖了换行，就是耗内存
  // },
  mounted() {
    //解决法二，将slider中js提取出来，去掉加载完毕再操作dom！成功！
    var container = document.getElementById("container");
    var list = document.getElementById("list");
    var buttons = document
      .getElementById("buttons")
      .getElementsByTagName("span");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var index = 1;
    var timer;

    console.log(prev);
    function animate(offset) {
      //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
      //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
      var newLeft = parseInt(list.style.left) + offset;
      list.style.left = newLeft + "vw";
      //无限滚动判断
      if (newLeft > 0) {
        list.style.left = -100 * (index - 1) + "vw";
      }
      if (newLeft < -700) {
        list.style.left = 0 + "vw";
      }
    }

    function play() {
      //重复执行的定时器
      timer = setInterval(function slider() {
        next.onclick();
      }, 6000);
    }

    function stop() {
      clearInterval(timer);
    }

    function buttonsShow() {
      //将之前的小圆点的样式清除
      for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].className == "on") {
          buttons[i].className = "";
        }
      }
      //数组从0开始，故index需要-1
      buttons[index - 1].className = "on";
    }

    prev.onclick = function () {
      index -= 1;
      if (index < 1) {
        index = 8;
      }
      console.log("ok");
      buttonsShow();
      animate(100);
      stop();
      play(); //刷新定时器
    };

    next.onclick = function () {
      //由于上边定时器的作用，index会一直递增下去，我们只有8个小圆点，所以需要做出判断
      index += 1;
      if (index > 8) {
        index = 1;
      }
      animate(-100);
      buttonsShow();
      stop();
      play(); //刷新定时器
    };

    for (var i = 0; i < buttons.length; i++) {
      (function (i) {
        buttons[i].onclick = function () {
          /*   这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法  */
          /*   由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
          var clickIndex = parseInt(this.getAttribute("index"));
          var offset = 100 * (index - clickIndex); //这个index是当前图片停留时的index
          animate(offset);
          index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
          buttonsShow();
          stop();
          play(); //刷新定时器
        };
      })(i);
    }

    container.onmouseover = stop;
    container.onmouseout = play;
    play();
  },
  components: { Play },
};
</script>
<style scoped>
@import url(../assets/css/slider.css);
@media screen and (max-width: 500px) {
  .center {
    display: none;
  }
  .play {
    position: absolute;
    height: 4rem;
    left: 0;
    display: none;
  }
  .van-swipe {
    position: absolute;
    top: 10rem;
  }

.bigword{
  width: 100%;
  text-align: center;
  color: rgba(97, 92, 92, 0.664);
  font-size: 2.6rem;
}
.van-swipe{
  width: 100vw;
  overflow: hidden;
}
.van-swipe-item ::v-deep img {
  margin-top: 20px;
    width: 100%;
    height: 219px;
  }
 
  .word {
    color: rgb(90, 87, 87);
    font-weight: 700;
    font-size: 1.2rem;
  }
}
@media screen and (min-width: 500px) {
  .van-swipe-item {
    display: none;
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

  #product {
    height: 900px;
  }
}
</style>