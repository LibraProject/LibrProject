/**
 * 登录 注册 
 */
import React, { Component } from 'react';
import { Redirect,Route,Switch,NavLink } from 'react-router-dom'
import Login from './login'
import Register from './register'
import '../../css/index.css'

class Home extends Component {
  render() {
    return (<div >
      <header>重点学生周考成绩录入管理系统</header>
      <main>
        <div>
          <h3>网站工程</h3>
          <ul>
            <NavLink to="/home/login">登录</NavLink>
            <NavLink to="/home/register">注册</NavLink>
          </ul>
          <Switch>
            <Route path="/home/login" component={Login} />
            <Route path="/home/register" component={Register} />
            <Redirect from="/home" to="/home/login" />
          </Switch>
        </div>
      </main>
    </div>);
  }
}

export default Home;
