<template>
  <header :class="{ virtual: virtual && hasOverHeight }" class="NavBar">
    <div class="left">
      <img class="company-logo" src="" alt="logo" />
    </div>
    <div class="right">
      <Menu :attr="virtual && hasOverHeight" />
      <el-icon class="el-icon-user"></el-icon>
    </div>
  </header>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  name: "NavBar",
  props: {
    virtual: {
      // 头部是否可虚化
      type: Boolean,
      default: true,
    },
    maxTop: {
      // 头部最大的虚化高度
      type: Number,
      default: 880,
    },
  },
  data() {
    return {
      hasOverHeight: true, // 是否超出需要虚化的高度
    };
  },
  components: { Menu },
  beforeMount() {
    window.addEventListener("scroll", this.$_scrollHeader);
  },
  mounted() {},
  beforeUnmount() {
    window.removeEventListener("scroll", this.$_scrollHeader);
  },
  methods: {
    $_scrollHeader() {
      const screenHeight =
        document.documentElement.scrollTop || document.body.scrollTop; // 获取滚动的垂直方向上的位移
      const scrollLeft = Math.max(
        document.body.scrollLeft,
        document.documentElement.scrollLeft
      ); // 获取滚动的水平方向上的位移
      document.querySelector(".NavBar").style.left = `-${scrollLeft}px`;
      if (screenHeight > this.maxTop) {
        this.hasOverHeight = false;
      } else {
        this.hasOverHeight = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.NavBar {
  position: fixed;
  z-index: $layout-header-z-indexMax;
  display: flex;
  height: 80px;
  min-width: $min-width;
  padding: 0 $normal-left;
  background-color: #fff;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
}

.virtual {
  background-color: rgba($color: #000, $alpha: 0.4);
}

.right {
  display: flex;
  align-items: center;

  .el-icon-user {
    margin-left: 28px;
    font-size: 26px;
  }
}
</style>
