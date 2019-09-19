/**
 * 登录 注册 
 */
import React,{Component} from 'react';
import Register from './register'
import Login from './login'
class  Home extends Component {
    render(){
        return  <div >
          <h1>home</h1>
          <Register/>
          <Login/>
        
      </div>
    }
}

export default Home;
