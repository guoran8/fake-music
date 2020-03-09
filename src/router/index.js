import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/views/recommend'
import Search from '@/views/search'
import Singer from '@/views/singer'
import Rank from '@/views/rank'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/recommend"
        },
        {
            path: '/recommend',
            component: Recommend
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/singer',
            component: Singer
        },
        {
            path: '/rank',
            component: Rank
        }
    ]
})