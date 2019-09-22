import request from '../utils/request';

// 登录接口
export async function login(obj) {
  return request.post('/emstu/teacher/login',obj);
}

// 注册接口
export async function enroll(obj) {
  console.log(obj,'------')
  return request.post('/emstu/teacher/register',obj);
}

