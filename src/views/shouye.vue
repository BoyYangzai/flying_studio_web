<template>
  <div>
    <div class="shouye">
      <video
        src="../../public/飞书20211225-171358.mp4"
        autoplay
        muted
        loop
        poster="../../public/shouyebgc.png"
        preload="auto"
      ></video>
      <img src="../../public/biglogo.png" alt="" class="biglogo" />
    </div>
    <a href="https://mp.weixin.qq.com/s/9Garo40q6qYo_pnN6ax1SA" target="blank"
      ><el-button round type="danger" size="" class="history"
        >了解历史</el-button
      ></a
    >

    <a
      href="https://flyingstudio.feishu.cn/docs/doccnuWFYfcbHUZ65FmKB3iA6pf"
      target="blank"
    >
      <el-button round type="primary" size="" class="joinus"
        >加入我们</el-button
      >
    </a>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.shouye {
  position: relative;
  z-index: -1;
  width: 1920px;
  height: 100vh;
  margin: auto;
}
.shouye video {
  position: absolute;
  z-index: -999;
  top: 0;
  left: 0;
  width: 100%;
}
.biglogo {
  position: absolute;
  top: 222px;
  left: 17%;
  width: 34%;
}
.btn {
  position: absolute;
  z-index: 999;
  top: 510px;
  left: 326px;
  width: 260px;
  height: 40px;
}
.history {
  position: absolute;
  z-index: 999;
  left: 6px;
  width: 130px;
}
.joinus {
  position: absolute;
  z-index: 999;
  left: 150px;
  width: 130px;
}
.el-button:hover {
  cursor: pointer;
}
::v-deep .el-button--primary {
  background: linear-gradient(
    to bottom right,
    rgba(20, 55, 211, 0.801),
    rgba(180, 54, 197, 0.486)
  );
  border: 1px solid rgba(7, 136, 241, 0.842);
}
::v-deep .el-button--danger {
  background: linear-gradient(
    to bottom right,
    rgba(243, 12, 81, 0.863),
    rgba(240, 17, 203, 0.76)
  );
  border: 1px solid rgba(241, 7, 97, 0.575);
}
a {
  position: absolute;
  top: 510px;
  left: 326px;
  z-index: 999;
  width: 130px;
  height: 40px;
}
</style>
