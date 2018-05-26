// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "../src/common/css/base.css"
import '../src/common/js/font_size'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import fastclick from 'fastclick'
Vue.use(MintUI);
Vue.config.productionTip = false
// 这个插件是移动端300秒延迟
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
