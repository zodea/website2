<template>
  <footer class="footer flex flex-column">
    <div class="footer__normal flex justify-between items-center">
      <div class="left flex">
        <img class="qrcode" src="" alt="company QRCode" />
        <div class="address flex flex-column justify-around">
          <span>广州市三川田文化科技股份有限公司</span>
          <div class="flex flex-column">
            <span>全国热线：400-889-1113</span>
            <span>地址：广州市黄埔区科学城科汇四街5号301-B号</span>
          </div>
        </div>
      </div>
      <div class="right">
        <ul class="outer">
          <li
            :class="{ clearfix: index === navbar.length - 1 }"
            class="link"
            v-for="(item, index) in navbar"
            :key="item.path"
          >
            <router-link :to="item.path">{{ item.title }}</router-link>
          </li>
        </ul>
        <p>
          COPYRIGHT © 2002-2019 333F.COM.INC.ALL RIGHTS RESERVED.
          粤ICP备10217460号
        </p>
      </div>
    </div>
    <!-- 只在首页才显示的咨询条 -->
    <div class="footer__join"></div>
  </footer>
</template>

<script>
import { navbar } from "../common";

export default {
  name: "bottom",
  data() {
    return {
      navbar,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 0 $normal-left;
  font-size: 16px;
  color: #fff;
  background-color: #404040;
  box-sizing: border-box;

  &__normal {
    height: 200px;
  }

  &__join {
    height: 80px;
  }
}

.qrcode {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  margin-right: 25px;
}

.address {
  height: 100px;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  height: 100px;

  p {
    font-size: 12px;
  }
}

.outer {
  display: flex;
  margin: 0;
  white-space: nowrap;
  list-style-type: none;
}

.link + .link::before {
  margin: 0 14px;
  border-left: 3px solid #eee;
  content: " ";
}

p {
  font-size: 12px;
}
</style>
