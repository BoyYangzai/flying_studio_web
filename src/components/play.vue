<template>
  <div class="play" @click="go2" @mouseenter="go2">
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/土星，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/土星，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/土星，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/土星，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/土星，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/土星，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/水星，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/实心星星.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/水星，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/土星，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/土星，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/土星，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/土星，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/土星，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/土星，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
    <div class="demo">
      <img src="../../public/地球，星球.png" alt="" />
    </div>
  </div>
</template>


    <script>
import anime from "animejs/lib/anime.es";
export default {
  data() {
    return {
      play: {},
    };
  },
  methods: {
    start() {
      this.play.play();
    },
    go2() {
      console.log("go2");
      this.$emit("dian");
      console.log("dianl");
    },
  },
  mounted() {
    this.play = anime({
      targets: ".play .demo",
      translateX: anime.stagger(28, {
        grid: [8, 8],
        from: "center",
        axis: "x",
      }),
      translateY: anime.stagger(14, {
        grid: [1, 8],
        from: "center",
        axis: "y",
      }),
      rotateZ: anime.stagger([360, 360], {
        grid: [6, 7],
        from: "center",
        axis: "x",
      }),
      delay: anime.stagger(100, { grid: [6, 7], from: "center" }),
      easing: "easeInOutQuad",
      direction: "alternate",
    });
    this.play.pause();
  },
};
</script>

    <style scoped>
.play {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  z-index: 998;
  top: 280px;
  right: -100px;
  width: 140px;
}
.play:hover {
  cursor: pointer;
}
.demo img {
  width: 20px;
  height: 20px;
}
</style>