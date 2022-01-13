import {createRouter, createWebHashHistory} from 'vue-router';

const routes= [
    {
        path: '/',
        component : ()=> import('@/views/Home')
    },
    {
        path: '/list',
        component : ()=> import('@/views/CurrencyList')
    }
]


const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;