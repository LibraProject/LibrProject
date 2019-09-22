import React, { useState } from 'react'
import throttle from '@/utils/throttle'
import { enroll } from '@/services/example'
const Register = props => {
    const [username, setUser] = useState()
    const [password, setPsd] = useState()
    const [tel, setTel] = useState()
    const [flagUser, setFlagUser] = useState(false)
    const [flagPwd, setFlagPwd] = useState(false)
    const [flagTel, setFlagTel] = useState(false)

    const userChange = (e) => {
        setUser(e.target.value)
        setFlagUser(false)
    }
    const pwdChange = (e) => {
        setPsd(e.target.value)
        setFlagPwd(false)
    }
    const telChange = (e) => {
        setTel(e.target.value)
        setFlagTel(false)
    }

    const register = () => {
        if (username === undefined) {
            setFlagUser(true)
        }
        if (password === undefined) {
            setFlagPwd(true)
        }
        if (tel === undefined) {
            setFlagTel(true)
        }
        // 函数防抖处理
        throttle(enrollUse,Object.assign({username, password, tel}))
    }
    const enrollUse = async  (obj)=>{
        const data = await enroll(obj)
        if(data.code===1){
            alert(data.msg)
            props.history.push('/home/login')
        }else{
            alert(data.msg)
        }
    }
   
    return (
        <div className="register">
            <li>
                <input type="text" placeholder="请输入用户名" onChange={userChange} />
                <p style={{ display: flagUser ? 'block' : 'none' }}>请输入用户名!</p>
            </li>
            <li>
                <input type="text" placeholder="请输入密码" onChange={pwdChange} />
                <p style={{ display: flagPwd ? 'block' : 'none' }}>请输入密码!</p>
            </li>
            <li>
                <input type="text" placeholder="请输入电话" onChange={telChange} />
                <p style={{ display: flagTel ? 'block' : 'none' }}>请输入电话!</p>
            </li>
            <li>
                <button onClick={register}>注册</button>
            </li>
        </div>
    )
}

export default Register
