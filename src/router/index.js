import Vue from 'vue'
import Router from 'vue-router'
import item from '@/pages/item/item.vue'
import home from '@/pages/home/home.vue'
import score from '@/pages/score/score.vue'
import App from '../App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../pages/home/home.vue')), 'home')
      }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('../pages/item/item.vue')), 'item')
      }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('../pages/score/score.vue')), 'score')
      }]
    }
  ]
})
