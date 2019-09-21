import React,{Suspense}from 'react'
import {HashRouter} from 'react-router-dom'
import RouterView from './RouterViews'
import routes from './RouterSetings'
function Routers(){
    return <HashRouter>
    <Suspense fallback={<div>loading...</div>}>
        <RouterView routes={routes}/>
    </Suspense>
       
    </HashRouter>
}
export default Routers