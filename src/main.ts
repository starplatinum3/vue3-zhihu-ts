import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tab, Tabs } from 'vant';
import Vant from 'vant'
import 'vant/lib/index.css'
import { Search } from 'vant';
import { Button } from 'vant';
import { Sticky } from 'vant';
// import installElementPlus from './plugins/element'
// installElementPlus(app)
// import '@/common/stylus/index.styl'
import '@/common/stylus/iconfont.styl'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

//弹出框禁止滑动
// Vue.prototype.noScroll = function () {
//     var mo = function (e) { e.preventDefault() }
//     document.body.style.overflow = 'hidden'
//     document.addEventListener('touchmove', mo, false)// 禁止页面滑动
//   }
   
//   //弹出框可以滑动
//   Vue.prototype.canScroll = function () {
//     var mo = function (e) {
//       e.preventDefault()
//     }
//     document.body.style.overflow = ''// 出现滚动条
//     document.removeEventListener('touchmove', mo, false)
//   }

createApp(App).use(store).use(router).use(Vant).
use(Search).use(Button).use(Tab).use(Tabs).use(Sticky).
    use(ElementPlus).
mount('#app')
// https://blog.csdn.net/weixin_47731144/article/details/109487204
// shims-vue.d.ts 没有这个文件 不会build

// elm
