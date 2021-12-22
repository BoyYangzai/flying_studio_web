<template>
  <header id="header">
      <img src="../../public/flyinglogo.png" alt="" class="flyinglogo"  @click="imgcolor"/>

    <div class="header-back"></div>

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
      this.$router.push(e.target.getAttribute("topath"));
    },
    pointer() {
      console.log("123");
      this.ispointer = !this.ispointer;
    },
    imgcolor(){
       this.$emit('changecolor')
    }
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

.flyinglogo {
  position: absolute;
  z-index: 999;
  top: 25px;
  left: 18%;
  width: 20%;
}
</style>