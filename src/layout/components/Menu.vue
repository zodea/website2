<template>
  <el-menu
    class="menu"
    mode="horizontal"
    background-color=""
    :default-active="activeIndex"
    :router="true"
    :text-color="attr ? '#ffffff' : '#333333'"
    :active-text-color="attr ? '#ffffff' : '#333333'"
  >
    <el-menu-item
      v-for="(item, index) in menuList"
      :key="index"
      :index="item.path"
      >{{ item.title }}</el-menu-item
    >
  </el-menu>
</template>

<script>
import { navbar } from "../common";

export default {
  name: "Menu",
  props: {
    attr: Boolean,
  },
  computed: {
    activeIndex() {
      return this.$route.path.replace("/", "");
    },
  },
  data() {
    return {
      menuList: navbar,
    };
  },
};
</script>

<style lang="scss" scoped>
.el-menu-item {
  padding: 0 16px;
  font-size: 18px;
}

.el-menu {
  background-color: unset;

  &.el-menu--horizontal {
    border-bottom: 0;
  }
}

.el-menu--horizontal > .el-menu-item.is-active {
  // border-bottom-color: $primary-color !important;
}

.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
  background-color: inherit;
  // border-bottom: 2px solid $primary-color !important;
}
</style>
