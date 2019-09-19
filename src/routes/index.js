import React,{Suspense}from 'react'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './RouterViews'
import routes from './RouterSetings'
function Routers(){
    return <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
        <RouterView routes={routes}/>
    </Suspense>
       
    </BrowserRouter>
}
export default Routers