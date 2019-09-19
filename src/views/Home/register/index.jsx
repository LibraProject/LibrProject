import React, { Component } from 'react'

 class Register extends Component {
    render() {
        return (
            <div className="register"> 
                <input type="text" placeholder="请输入用户名"/>
                <input type="text" placeholder="请输入密码"/>
                
                <li>
                    <button>注册</button>
                </li>
             </div>
        )
    }
}

export default Register
