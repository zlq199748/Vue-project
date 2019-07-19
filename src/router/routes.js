import Category from '../pages/category/Category.vue'
import Goods from '../pages/goods/Goods.vue'
import Home from '../pages/home/Home.vue'
import Individual from '../pages/individual/Individual.vue'
import ShoppingCar from '../pages/shoppingcar/ShoppingCar.vue'
import Topic from '../pages/topic/Topic.vue'
import Expert from '../pages/expert/Expert.vue'
export default [
  {
    path:'/',
    component:Home
  },
  {
    path:'/goods',
    component:Goods
  },
  {
    path:'/category',
    component:Category,
    children:[
      {
        path:'/category/topic',
        component:Topic,
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
    component:Individual
  },
  {
    path:'/shoppingCar',
    component:ShoppingCar
  },

]