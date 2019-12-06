import axios from 'axios'

export function request(config) {

  //创建axios实例
  const instance = axios.create({
    baseURL:'http://106.54.54.237:8000/api/v1',
    timeout:5000,
    method:'GET'
  })

  //请求拦截
  instance.interceptors.request.use(config => {
    return config;
  },error => {
    return Promise.reject(error);
  });
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data;
  },error => {
    return Promise.reject(error);
  })


  //发送网络请求
  return instance(config);
}

