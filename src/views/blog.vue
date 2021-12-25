<template>
  <section class="meeting" id="meeting">
    <div class="center">
      <div class="share">
        <span id="cg">{{ nowtime }}</span>
        <img id="mt-title" src="../../public/blog/meetingtitle.png" alt="" />
        <div class="s-left">
          <ul class="shareurls"></ul>
          <a id="s-more" href="https://blog.atcumt.com"
            ><img src="../../public/blog/btn_3.png" alt=""
          /></a>
        </div>
        <div class="s-right">
          <img src="../../public/blog/blog.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  setup() {},
  computed: {
    nowtime() {
      var nowtime = new Date();
      var y = nowtime.getFullYear();
      var m = nowtime.getMonth() + 1;
      var d = nowtime.getDate();
      return y + "." + m + "." + d;
    },
  },
};
</script>
<style scoped>
@import url(../assets/css/meeting.css);
.meeting {
  margin-top: 140px;
  margin-left: 240px;
}
.share span {
  position: absolute;
  top: -80px;
  left: 190px;
  font-size: 55px;
  font-weight: 550;
}
#mt-title {
  position: absolute;
  left: 197px;
  top: 0px;
  width: 240px;
  height: 80px;
}
.s-left {
  position: absolute;
  top: -80px;
  left: 6px;
}
.s-right {
  position: absolute;
  top: -80px;
  left: 650px;
}
</style>