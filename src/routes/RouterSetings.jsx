import { lazy } from 'react'
const routes = [
    {
        path: "/", redirect: '/home',
    }, {
        path: "/home", component: lazy(() => import('@/views/Home')),
        children: [
            {
                path: "/home", redirect: '/home/login',
            },
            {
                path: "/home/login", component: lazy(() => import('@/views/Home/login'))
            }, {
                path: "/home/register", component: lazy(() => import('@/views/Home/register'))
            }
        ]
    }, {
        path: "/studentView", component: lazy(() => import('@/views/studentView'))
    }, {
        path: "/allGrades", component: lazy(() => import('@/views/allGrades'))
    }, {
        path: "/deanView", component: lazy(() => import('@/views/deanView'))
    }
]

export default routes