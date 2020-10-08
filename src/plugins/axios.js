"use strict";

import Vue from 'vue';
import axios from "axios";
import env from '../../env'
// 代理的方式
// axios.defaults.baseURL = '/api';
// 根据环境变量 获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 超时时间
// axios.defaults.timeout = 3000; // 3秒

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
console.log('env.baseURL:',env.baseURL);

let config = {
  baseURL: env.baseURL,
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);
// 请求拦截
_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  }
  // ,function(error) {
  //   // Do something with request error
  //   // return Promise.reject(error);
  //   return false
  // }
);

// Add a response interceptor
// 返回错误内容的拦截
_axios.interceptors.response.use(
  function(response) {
    let res = response.data;
    if(res.status === 0){ // 成功
      return res.data
    }else if(res.data === 10){ // 为登陆
      window.location.href= '/#/login'
    }else{
      alert(res.msg)
    }
  }
  // ,function(error) {
  //   // Do something with response error
  //   // return Promise.reject(error);
  //   return false
  // }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)
console.log('...');

export default Plugin;
