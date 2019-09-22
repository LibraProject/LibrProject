import axios from 'axios'

const instance = axios.create({
    baseURL: '/api',
    timeout: 2000
});

// 请求拦截器
instance.interceptors.request.use((config) =>{
    return config;
  }, (error)=> {
  
    return Promise.reject(error);
  }
);
// 响应拦截器
instance.interceptors.response.use( response =>{
    if(response.status !== 200 ){
      if(response.status == 201){
        return response.data;
      }
    }
    return response.data;
  },  (error) =>{
    try {
      console.log("欢迎光临！");
  }
  catch(err) {
      console.log(err)
  }
    
    return Promise.reject(error);
  }
);

export default instance;