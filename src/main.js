import Vue from 'vue'
import App from './App.vue'
import './mock/mock-server'
import router from './router'
import Header from './components/Header/Header.vue'
import HeaderTwo from  './components/Header-two/HeaderTwo.vue'
import {Button,Popup} from 'mint-ui'
Vue.component (Popup.name,Popup)
Vue.component(Button.name,Button)
Vue.component('Header',Header)
Vue.component('HeaderTwo',HeaderTwo)


new Vue({
  el:'#app',
  render: h => h(App),
  router
})
