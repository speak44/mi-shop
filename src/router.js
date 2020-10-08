import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home' // 根视图。为了统一用首和尾
import Index from './pages/index' // 首页
import Product from './pages/product' // 产品页
import Detail from './pages/detail' // 详情页
import Cart from './pages/cart' // 购物车页面，购物车是单独的页面，没有头部和尾部
import Order from './pages/order' // 订单
import OrderConfirm from './pages/orderConfirm' // 订单确认
import OrderList from './pages/orderList' // 订单列表
import OrderPay from './pages/orderPay' // 订单结算
import Alipay from './pages/alipay'
// 支付页面
Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:Home,
      // redirect:'/index',
      children:[
        {
          path:'/index',
          name:'index',
          component:Index
        },
        {
          path:'/product/:id',
          name:'product',
          component:Product
        },
        {
          path:'/detail/:id',
          name:'detail',
          component: Detail
        }
      ]
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/order',
      name:'order',
      component:Order,
      children:[
        {
          path: 'confirm',
          name:'order-confirm',
          component:OrderConfirm
        },
        {
          path:'list',
          name:'order-list',
          component: OrderList
        },
        {
          path:'pay',
          name:'order-pay',
          component:OrderPay
        },
        {
          path:'alipay',
          name:'ali-pay',
          component:Alipay
        }
      ]
    }
  ]
})