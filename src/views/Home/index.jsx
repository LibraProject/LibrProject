/**
 * 登录 注册 
 */
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import Register from './register'
import Login from './login'
import RouterView from '../../routes'
class Home extends Component {
  state = {
    flag: 'L'
  }
  render() {
    let {routes} = this.props
    console.log(this.props)
    return <div >
      <h1>home</h1>
      <Register />
      <Login />
      <NavLink to="/allGrades">adasdasdsad</NavLink>
      {/* <RouterView routes={routes}></RouterView> */}
    </div>
  }
}

export default Home;
