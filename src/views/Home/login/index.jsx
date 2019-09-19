/**
 *   注册
 */

 import React, { Component } from 'react'
 
 class Login extends Component {
     render() {
         return (
             <div className="login">
                 <div className="loginAccount">
                    <input type="text" placeholder="请输入账号"/>
                 </div>
                 <div className="loginPassword">
                    <input type="password" placeholder="请输入密码"/>
                 </div>
                
             </div>
         )
     }
 }
 export default Login
 