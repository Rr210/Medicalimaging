// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
import router from './router'
// 引入elemetn-ui组件库
import ElementUI from 'element-ui'
// 引入element-ui全部css
import 'element-ui/lib/theme-chalk/index.css'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 使用element
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
