import Vue from 'vue'
import Router from 'vue-router'
import Voucher from '@/components/Voucher'
import Payment from '@/components/Payment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Voucher',
      component: Voucher
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    }
  ]
})
