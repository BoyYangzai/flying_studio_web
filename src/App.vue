<template>
  <div id="app">
    <Navbar ref="changecolor" @changecolor="changecolor"></Navbar>
    <transition :name="transitionName">
      <router-view  class="Router"/>
    </transition>
  </div>
</template>
<script>
import Navbar from "./components/navbar.vue";
export default {
  data() {
    return {};
  },
  methods: {
    changecolor() {},
  },
  components: { Navbar },
  mounted() {},
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
#header {
  z-index: 999;
}
#header ul li {
  z-index: 999;
}
.bodycolor1 {
  background: radial-gradient(
      circle at 50% 0,
      rgba(7, 165, 238, 0.449),
      rgba(119, 118, 118, 0.253) 54.71%
    ),
    radial-gradient(
      circle at 6.7% 75%,
      rgba(0, 0, 255, 0.48),
      rgba(0, 0, 255, 0) 44.44%
    ),
    radial-gradient(
        circle at 93.3% 75%,
        rgba(45, 241, 94, 0.82),
        rgba(119, 118, 118, 0.151) 54.71%
      )
      rgba(226, 226, 135, 0.609);
  border-radius: 50%;
}
.bodycolor2 {
  background: radial-gradient(
      circle at 50% 0,
      rgba(238, 7, 45, 0.449),
      rgba(119, 118, 118, 0.253) 54.71%
    ),
    radial-gradient(
      circle at 6.7% 75%,
      rgba(240, 3, 3, 0.48),
      rgba(0, 0, 255, 0) 44.44%
    ),
    radial-gradient(
        circle at 93.3% 75%,
        rgba(243, 247, 6, 0.897),
        rgba(241, 2, 2, 0.151) 54.71%
      )
      rgba(5, 30, 255, 0.609);
  border-radius: 50%;
}
.Router {
  position: fixed;
  z-index: 0;
  top: 0; 
  left: 0;
  width: 100%;
 transition: all 1s ease;
}
 
.slide-left-enter,
 .slide-right-leave-active {
 opacity: 0;
 -webkit-transform: translate(100%, 0);
 transform: translate(50%, 0);
}
 
.slide-left-leave-active,
.slide-right-enter {
 opacity: 0;
 -webkit-transform: translate(100%, 0);
 transform: translate(50%, 0) ;
}
</style>
