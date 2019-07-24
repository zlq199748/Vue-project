import Vue from 'vue'
import App from './App.vue'
import './mock/mock-server'
import router from './router'
import Header from './components/Header/Header.vue'
import store from './store' //包含多个数据的对象
/*import VueLazyload from 'vue-lazyload'*/
import {Button,Popup} from 'mint-ui'

Vue.component (Popup.name,Popup)
Vue.component(Button.name,Button)
Vue.component('Header',Header)

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
