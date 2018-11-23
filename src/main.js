// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(ElementUI)
// axios.interceptors.request.use(function(config) {
//   iView.LoadingBar.start();
//   // iView.Message.loading({
//   //     content: 'Loading...',
//   //     top: 300,
//   //     duration: 0
//   // });
//   return config
// }, function(err) {
//   iView.LoadingBar.finish();
//   iView.Message.destroy();
//   // iView.Message.info({
//   //     top: "请求err",
//   //     content: err,
//   //     duration: 10
//   // });
//   return Promise.reject(err)
// });
// axios.interceptors.response.use(function(response) {
//   if (response.data.returnCode != "000000") {
//       iView.LoadingBar.finish();
//       iView.Message.destroy()
//       iView.Message.info({
//           top: 500,
//           content: "接口返回失败",
//           duration: 2
//       });
//   }
//   iView.LoadingBar.finish();
//   iView.Message.destroy();
//   return response
// }, function(err) {
//   iView.LoadingBar.finish();
//   iView.Message.destroy();
//   iView.Message.info({
//       top: "返回err",
//       content: err,
//       duration: 3
//   });
//   return Promise.reject(err)
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
