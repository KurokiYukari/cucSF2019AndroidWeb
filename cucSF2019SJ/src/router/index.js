import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import DailyRanking from '@/components/DailyRanking'
import UserProfiles from '@/components/UserProfiles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/DailyRanking',
      name: 'DailyRanking',
      component: DailyRanking
    },
    {
      path: '/UserProfiles',
      name: 'UserProfiles',
      component: UserProfiles
    }
  ]
})
