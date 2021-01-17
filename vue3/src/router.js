import Calendar from '@/pages/Calendar'
import DcHeroes from '@/pages/DcHeroes'
import Calculator from '@/pages/Calculator'
import Home from '@/pages/Home'
import Markdown from '@/pages/Markdown'
import ReuseableModal from '@/pages/ReuseableModal'
import Slider from '@/pages/Slider'
import Chat from '@/pages/Chats'
import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index'
import UserCrud from '@/pages/UserCrud'
import Tensorflow from '@/pages/Tensorflow'


const routes = [
  { path: '/', component: Home },
  { path: '/dc-heroes', component: DcHeroes },
  { path: '/calendar', component: Calendar },
  { path: '/markdown', component: Markdown },
  { path: '/slider', component: Slider },
  { path: '/calculator', component: Calculator,meta : {middleware : 'auth'}, },
  { path: '/reuseable-modal', component: ReuseableModal },
  {
    path: '/chat',
    component: Chat,
    meta : {middleware : 'auth'},
    /*beforeEnter: (_, __, next) => {
      if (!store.state.isLoggedIn) {
        next('/')
      } else {
        next()
      }
    }*/
  },
  { path: '/user-crud',  component: UserCrud },
  { path: '/tensorflow', component: Tensorflow },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


router.beforeEach((to, _ , next) => {
  if(to.meta?.middleware){
    const middleware = require(`./middleware/${to.meta?.middleware}`)
    if(middleware){
      middleware.default(next,store);
    }else{
      next();
    }
  }else{
    next();
  }

})

export default router
