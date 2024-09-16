import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/pages/MainPage'
import PyasinoPage from '@/pages/PyasinoPage'
import ExpeditionPage from '@/pages/ExpeditionPage'
import NorilskDivisionPage from '@/pages/NorilskDivisionPage'
import TransbaikalDivisionPage from '@/pages/TransbaikalDivisionPage'
import KolaDivisionPage from '@/pages/KolaDivisionPage'
import WhiteBearsPage from '@/pages/WhiteBearsPage'
import TreasuresPage from '@/pages/TreasuresPage'
import IndicatorPage from '@/pages/IndicatorPage'
import BigExpeditionPage from '@/pages/BigExpeditionPage'
import ArtPage from '@/pages/ArtPage'


Vue.use(VueRouter)

const routes = [
    {
        name: 'main',
        component: MainPage,
        path: '/'
    },
    {
        name: 'pyasino',
        component: PyasinoPage,
        path: '/pyasino'
    },
    {
        name: 'expedition',
        component: ExpeditionPage,
        path: '/expedition'
    },
    {
        name: 'big-expedition',
        component: BigExpeditionPage,
        path: '/big-expedition'
    },
    {
        name: 'norilsk-division',
        component: NorilskDivisionPage,
        path: '/norilsk-division'
    },
    {
        name: 'transbaikal-division',
        component: TransbaikalDivisionPage,
        path: '/transbaikal-division'
    },
    {
        name: 'kola-division',
        component: KolaDivisionPage,
        path: '/kola-division'
    },
    {
        name: 'treasures-biodiversity',
        component: TreasuresPage,
        path: '/treasures-of-biodiversity'
    },
    {
        name: 'white-bears',
        component: WhiteBearsPage,
        path: '/white-bears'
    }
    ,
    {
        name: 'indicator',
        component: IndicatorPage,
        path: '/indicator'
    },
    {
        name: 'art-on-the-expedition',
        component: ArtPage,
        path: '/art-on-the-expedition'
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router