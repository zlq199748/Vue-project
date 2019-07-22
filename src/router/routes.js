import Category from '../pages/category/Category.vue'
import Goods from '../pages/goods/Goods.vue'
import Home from '../pages/home/Home.vue'
import Individual from '../pages/individual/Individual.vue'
import Topic from '../pages/topic/Topic.vue'
import Expert from '../pages/expert/Expert.vue'
import Loginhome from '../pages/login/Loginhome.vue'
import Search from '../pages/search/Search.vue'

export default [
  {
    path:'/search',
    component:Search

  },
  {
    path:'/',
    component:Home,
    meta:{
      isShow:true
    }
  },
  {
    path:'/goods',
    component:Goods,
    meta:{
      isShow:true
    }
  },
  {
    path:'/category',
    component:Category,
    meta:{
      isShow:true
    },
    children:[
      {
        path:'/category/topic',
        component:Topic,
        meta:{
          isShow:true
        }
      },
      {
        path:'/category/expert',
        component:Expert
      },
      {
        path:'/',
        redirect:'/category/topic'
      },
    ]
  },

  {
    path:'/individual',
    component:Individual,
    meta:{
      isShow:true
    }
  },
  {
    path:'/loginhome',
    component:Loginhome
  },
]