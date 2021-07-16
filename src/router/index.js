import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PokeCharizard from '../views/PokeCharizard.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/PokeCharizard',
        name: 'PokeCharizard',
        component: PokeCharizard
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router