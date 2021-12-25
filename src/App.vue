<template>
  <div id="app">
    <div class="pet">
      <img src="../public/翔工作室and矿大logo.png" alt="" />
    </div>

    <Navbar ref="changecolor" @changecolor="changecolor"></Navbar>
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="Router" />
      </keep-alive>
    </transition>
  </div>
</template>
<script>
import Navbar from "./components/navbar.vue";
import anime from "animejs/lib/anime.es";
export default {
  data() {
    return {
      index: 2,
      transitionName: "route",
    };
  },
  methods: {
    changecolor() {},
  },
  components: { Navbar },
  mounted() {
    var body = document.getElementsByTagName("body");
    window.addEventListener("click", () => {
      switch (this.index) {
        case 1:
          body[0].className = "bodycolor1";
          break;
        case 2:
          body[0].className = "bodycolor2";
          break;
        case 3:
          body[0].className = "bodycolor3";
          break;
        case 4:
          body[0].className = "bodycolor4";
          break;
      }
      this.index++;
      if (this.index == 5) {
        this.index = 1;
      }
    });
    var anime1 = anime({
      targets: [".pet"],
      translateX: "310px",
      rotate: 360,
      borderRadius: 8,
      duration: 2000,
      loop: true,
      direction: "alternate",
    });
    var path = anime.path(".i1 path");
    anime({
      targets: ".i1",
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      easing: "linear",
      duration: 2000,
      loop: true,
    });
  },
  watch: {
    $route(to, from) {
      let isBack = this.$router.isBack; // 监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    },
  },
};
</script>
<style>
@import url(../src/assets/css/body.css);
.icon {
  position: absolute;
  z-index: 99999;
  width: 50px;
  height: 500px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#header {
  z-index: 999;
}
#header ul li {
  z-index: 999;
}

.Router {
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 1600px;
  transition: all 0.6s ease;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(60%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(60%, 0);
}

.pet {
  position: absolute;
  z-index: 9999;
  top: 110px;
}
.pet img {
  width: 72px;
  height: 72px;
}
</style>
