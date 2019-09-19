import {lazy} from 'react'
const routes = [
    {
        path:"/",redirect:'/home',
    },{
        path:"/home",component:lazy(()=>import('../views/Home'))
    },{
        path:"/studentView",component:lazy(()=>import('../views/studentView'))
    },{
        path:"/allGrades",component:lazy(()=>import('../views/allGrades'))
    },{
        path:"/deanView",component:lazy(()=>import('../views/deanView'))
    }
]

export default routes