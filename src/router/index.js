import Vue from 'vue'
import Router from 'vue-router'
import Voucher from '@/components/Voucher'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Voucher',
      component: Voucher
    }
  ]
})
