<template>
  <header id="header">
    <img 
      src="../../public/flyinglogo2.png"
      alt=""
      class="flyinglogo"
      @click="imgcolor"
    />

    <div class="header_ul" id="header_ul">
      <a href="javascript:;" id="header-abtn">
        <img src="static/ico/banner-menu.png" alt="" class="mmenu" />
      </a>
      <ul id="headerurls" class="headerurls">
        <li
          class="foucs"
          @mouseenter="pointer"
          @mouseleave="pointer"
          :class="{ pointer: ispointer }"
          @click="topath"
          topath="/shouye"
        >
          <a class="link family" @click="topath" topath="/shouye">首页</a>
        </li>
        <li
          class="foucs"
          @mouseenter="pointer"
          @mouseleave="pointer"
          :class="{ pointer: ispointer }"
          @click="topath"
          topath="/productinfo"
        >
          <a class="link family" @click="topath" topath="/productinfo"
            >产品信息</a
          >
        </li>
        <li
          class="foucs"
          @mouseenter="pointer"
          @mouseleave="pointer"
          :class="{ pointer: ispointer }"
          @click="topath"
          topath="/aboutus"
        >
          <a class="link family" @click="topath" topath="/aboutus">关于我们</a>
        </li>
        <li
          class="foucs"
          @mouseenter="pointer"
          @mouseleave="pointer"
          :class="{ pointer: ispointer }"
          @click="topath"
          topath="/starmembers"
        >
          <a class="link family" @click="topath" topath="/starmembers"
            >优秀成员</a
          >
        </li>
        <li
          class="foucs"
          @mouseenter="pointer"
          @mouseleave="pointer"
          :class="{ pointer: ispointer }"
          @click="topath"
          topath="/blog"
        >
          <a class="link family" @click="topath" topath="/blog">技术博客</a>
        </li>
        <li
          class="foucs"
          @mouseenter="pointer"
          @mouseleave="pointer"
          :class="{ pointer: ispointer }"
        >
          <a
            href="https://flyingstudio.feishu.cn/docs/doccnuWFYfcbHUZ65FmKB3iA6pf"
            class="link family"
            id="last_a"
            >加入我们</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      ispointer: false,
    };
  },
  methods: {
    topath(e) {
      this.$router.push(e.target.getAttribute("topath")).catch((err) => {
        console.log("输出报错", err);
      });
    },
    pointer() {
      this.ispointer = !this.ispointer;
    },
    imgcolor() {
      this.$emit("changecolor");
    },
  },
};
</script>
<style scoped>
@import url(../assets/css/navbar.css);

.pointer {
  cursor: pointer;
}
ul {
  display: flex;
}

@media  screen and (min-width: 500px) {
.flyinglogo {
  position: absolute;
  z-index: 999;
  top: 25px;
  left: 18%;
  width: 20%;
}
header .header_ul {
    position: absolute;
    top: 14px;
    left: 40%;
    text-align: center;
}
header li {
    display: inline;

    margin-left: 45px;
    padding: 10px;

    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 10px;
}
header .link {
    font-size: 20px;

    color: rgba(255, 255, 255, 0.924);
}


}


@media  screen and (max-width: 500px) {
  header{
     position: fixed;
  top: 0;
  left: 0;
    width: 100vw;
  }
.flyinglogo {
  position: absolute;
  top:4rem;
  z-index: 999;
  width: 80vw;
}
header .header_ul {
    position: absolute;
    text-align: center;
}
header li {
    display: inline;

    padding: .8rem;

    border-radius: 9px;
}
header .link {
    font-size: 1rem;

    color: rgba(255, 255, 255, 0.924);
}

}
@media  screen and (max-width: 350px) {

header li {
 
    display: inline;

    padding: .3rem;

    border-radius: 10px;
}
}
</style>