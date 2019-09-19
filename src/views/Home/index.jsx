/**
 * 登录 注册 
 */
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import RouterView from "../../routes/RouterViews";
import '../../css/min.css'
class Home extends Component {
  state = {
    flag: "L"
  }
  render() {
    return <div className="wrap">
      <header>重点学生日周考成绩录入管理系统</header>
      <h2>网站工程</h2>
      <div className="pos">
        <div className="posTab"><NavLink to="/home/login" activeClassName="Navactive">登录</NavLink><NavLink to="/home/register" activeClassName="Navactive">注册</NavLink></div>
        <RouterView routes={this.props.routes}/>
      </div>
    </div>
  }
}

export default Home;
