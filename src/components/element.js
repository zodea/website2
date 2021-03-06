import {
  Button,
  Loading,
  Menu,
  MenuItem,
  Message,
  MessageBox,
  Notification,
} from "element-ui";
import Vue from "vue";

Vue.use(Button);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
