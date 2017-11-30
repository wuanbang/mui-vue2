import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// import Index from '@/components/index/index'
// import Find from '@/components/find/find'
// import Order from '@/components/order/order'
// import Mine from '@/components/mine/mine'
// import RestaurantDetail from '@/components/index/restaurant-detail/restaurant-detail'
// import RestaurantList from '@/components/index/restaurant-list/restaurant-list'
// import Goods from '@/components/index/restaurant-detail/goods/goods'
// import Ratings from '@/components/index/restaurant-detail/ratings/ratings'
// import Seller from '@/components/index/restaurant-detail/seller/seller'
// import login from '@/components/login/login'

Vue.use(Router)

// 路由懒加载
const Index = (resolve) => {
  import('@/components/index/index').then((module) => {
    resolve(module)
  })
}
const Find = (resolve) => {
  import('@/components/find/find').then((module) => {
    resolve(module)
  })
}
const Order = (resolve) => {
  import('@/components/order/order').then((module) => {
    resolve(module)
  })
}
const Mine = (resolve) => {
  import('@/components/mine/mine').then((module) => {
    resolve(module)
  })
}
const RestaurantDetail = (resolve) => {
  import('@/components/index/restaurant-detail/restaurant-detail').then((module) => {
    resolve(module)
  })
}
const RestaurantList = (resolve) => {
  import('@/components/index/restaurant-list/restaurant-list').then((module) => {
    resolve(module)
  })
}
const Goods = (resolve) => {
  import('@/components/index/restaurant-detail/goods/goods').then((module) => {
    resolve(module)
  })
}
const Ratings = (resolve) => {
  import('@/components/index/restaurant-detail/ratings/ratings').then((module) => {
    resolve(module)
  })
}
const Seller = (resolve) => {
  import('@/components/index/restaurant-detail/seller/seller').then((module) => {
    resolve(module)
  })
}
const login = (resolve) => {
  import('@/components/login/login').then((module) => {
    resolve(module)
  })
}
const Home = (resolve) => {
  import('@/components/home/home').then((module) => {
    resolve(module)
  })
}

const router = new Router({
  routes: [
    // 根路径
    {
      path: '/',
      redirect: '/index',
      component: Index,
      meta:{title:'首页',isShowHead:false,isShowFoot:true}
    },
    // 首页
    {
      path: '/index',
      component: Index,
      meta:{title:'首页',isShowHead:false,isShowFoot:true}
    },
    // 登录
    {
      path: '/login',
      component: login      
    },
    // 商家列表
    {
      path: '/restaurant_list',
      component: RestaurantList
    },
    // 商家模块
    {
      path: '/restaurant',
      redirect: '/restaurant/goods',
      component: RestaurantDetail,
      children: [
        {
          path: 'goods',
          component: Goods
        },
        {
          path: 'ratings',
          component: Ratings
        },
        {
          path: 'seller',
          component: Seller
        }
      ]
    },
    // 发现
    {
      path: '/find',
      component: Find,
      meta:{title:'优惠劵',isShowHead:true,isShowFoot:true,isShowBack:false}
    },
    // 订单
    {
      path: '/order',
      component: Order
    },
    // 我的
    {
      path: '/mine',
      component: Mine,
      meta:{title:'我的',isShowHead:true,isShowFoot:true,isShowBack:true}
    },
    {
      path: '/home',
      component: Home,
   		meta:{title:'会员',isShowHead:false,isShowFoot:true,isShowBack:false}
    }
  ]
})
	router.afterEach(function(to,from){
		console.log(to.meta.title,to.meta.isShowBack)
		if(to.meta.title){
			store.dispatch("updateNavbarTitle", to.meta.title);
			store.dispatch('updateNavbarStatus',{isShowHead:to.meta.isShowHead,isShowFoot:to.meta.isShowFoot,isShowBack:to.meta.isShowBack})
			document.title = "加时代-" + to.meta.title || "";
		}		
	})
	export default router