/**
 *   登录
 */

import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div className="login">
                <li>
                    <input type="text" placeholder="请输入用户名" />
                </li>
                <li>
                    <input type="text" placeholder="请输入密码" />
                </li>
                <p>
                    <input type="checkbox" id="" />
                    <span>两周内自动登录</span>
                </p>
                <li>
                    <button>登录</button>
                </li>
            </div>
        )
    }
}
export default Login
