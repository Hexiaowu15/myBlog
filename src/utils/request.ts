import axios from "axios"
import { useLoginDialogStore } from '@/stores/modules/loginDialog'
import {getToken,removeToken,key} from "@/utils/token"  
const request = axios.create({
  baseURL: '/api', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})


// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = getToken()
  // console.log(token);
  if (token) {
    config.headers.set(key, token)
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  // console.log(response);
  return response.data;
}, function (error) {
  const loginDialogStore = useLoginDialogStore()
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // console.log(error);
  if (error.response.status === 401) {
    // 未登录，跳转登录页面
    loginDialogStore.show()
    removeToken()
  }
  return Promise.reject(error.response.data);
});

export default request