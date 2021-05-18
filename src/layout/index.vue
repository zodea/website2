<template>
  <div class="index">
    <Navbar :maxTop="maxTop" :virtual="navbar" />
    <section class="app-main">
      <router-view v-slot="{ Component }">
        <transition name="mode" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </section>
    <Bottom />
  </div>
</template>

<script>
import { Navbar, Bottom } from "./components";

export default {
  name: "index",
  components: {
    Navbar,
    Bottom,
  },
  props: {
    maxTop: String,
  },
  computed: {
    key() {
      return this.$route.path;
    },
    navbar() {
      return this.$route.meta.navbar || false;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  min-height: 100vh;
}
</style>
