<template>
  <header :class="{ virtual: virtual && hasOverHeight }" class="NavBar">
    <div class="left">
      <img src="" alt="logo" />
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
      type: Boolean,
      default: true,
    },
    maxTop: {
      type: Number,
      default: 880,
    },
  },
  data() {
    return {
      hasOverHeight: true,
    };
  },
  components: { Menu },
  watch: {},
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
        document.documentElement.scrollTop || document.body.scrollTop;
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
  // z-index: $layout-header-z-indexMax;
  display: flex;
  width: 100vw;
  padding: 0 10%;
  background-color: #fff;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  // @media screen and (max-width: 720px) {
  //   padding: 0;
  // }
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
