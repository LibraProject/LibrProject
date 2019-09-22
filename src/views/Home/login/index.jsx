/**
 *   登录
 */

import React, { Component } from 'react'
import {login} from '@/services/example'
import throttle from '@/utils/throttle'
class Login extends Component {
    state = {
        obj:{
            username:'',
            password:''
        }
    }

    //  登录请求
    userLogin = async (obj)=>{
        const data = await login(obj);
        if(data.code===1){alert(data.msg);
           this.props.history.replace('/studentView')
        }else{alert(data.msg)}
    }
    // 登录验证
    login = ()=>{
        let {obj} = this.state;
        for(let key in obj){if(obj[key]){throttle(this.userLogin,obj)}else{alert('请完善信息');return}}
    }

    // 受控组件
    setUser = (e)=>{let {obj} = this.state;let type = e.target.name;obj[type] = e.target.value;this.setState({obj})}

    render() {
        let {obj} = this.state
        return (
            <div className="login">
                <li>
                    <input type="text" name="username" value={obj.username} placeholder="请输入用户名" onChange={this.setUser} />
                </li>
                <li>
                    <input type="password" name="password" value={obj.password} placeholder="请输入密码" onChange={this.setUser} />
                </li>
                <p>
                    <input type="checkbox" id="" />
                    <span>两周内自动登录</span>
                </p>
                <li>
                    <button onClick={this.login}>登录</button>
                </li>
            </div>
        )
    }
}
export default Login
