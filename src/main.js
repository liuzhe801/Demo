// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//mint-ui
import 'mint-ui/lib/style.min.css'
import Mint from 'mint-ui';
Vue.use(Mint);

//mui
import '../static/mui/dist/css/mui.css';

//全局css样式
import '../static/css/site.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
