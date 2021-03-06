import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import MemoList from '@/pages/MemoList'
import MemoDetails from '@/pages/MemoDetails'
import SimpleForm from '@/pages/SimpleForm'
import GridView from '@/pages/GridView'
import PopperView from '@/pages/PopperView'
import CheckOut from '@/pages/CheckOut'
import SignIn from '@/pages/SignIn'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: 'hello world'
      }
    },
    {
      path: '/memo-list',
      name: 'MemoList',
      component: MemoList,
      meta: {
        title: 'memo list'
      }
    },
    {
      path: '/memo/:id',
      name: 'MemoDetails',
      component: MemoDetails,
      props: true,
      meta: {
        title: 'details of memo'
      }
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn,
      meta: {
        title: 'sign in'
      }
    },
    {
      path: '/simple-form',
      name: 'SimpleForm',
      component: SimpleForm,
      meta: {
        title: 'simple form'
      }
    },
    {
      path: '/grid-view',
      name: 'GridView',
      component: GridView,
      meta: {
        title: 'grid view'
      }
    },
    {
      path: '/popper-view',
      name: 'PopperView',
      component: PopperView,
      meta: {
        title: 'popper view'
      }
    },
    {
      path: '/check-out',
      name: 'CheckOut',
      component: CheckOut,
      meta: {
        title: 'check out'
      }
    },
    {
      path: '*',
      redirect: {
        name: 'HelloWorld'
      }
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || { x: 0, y: 0 }
  }
})

// グローバル before ガード
router.beforeEach((to, from, next) => {
  // to: Route: 次にナビゲーションされる対象の ルートオブジェクト
  // from: Route: ナビゲーションされる前の現在のルート
  // next: Function: フックを 解決 するためにこの関数を呼ぶ必要があります
  next()
})

// グローバル After フック
router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    if (to.params && to.params.id) {
      document.title = `${to.meta.title} # ${to.params.id}`
    } else {
      document.title = to.meta.title
    }
  }
})

export default router
