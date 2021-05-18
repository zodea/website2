import "@/styles/index.scss";
import ElementUI from "element-ui";
import Vue from "vue";
import "../theme/index.css";
import App from "./App.vue";
import "./components/element";
import router from "./router";
import store from "./store";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
