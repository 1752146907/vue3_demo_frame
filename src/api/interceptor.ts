import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios'; 
 
 
export interface HttpResponse<T = unknown> {
  status: number;
  msg: string;
  code: number;
  success: boolean
  data: T;
}
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => { 
    config.headers = {
      'Authorization': localStorage.getItem('token') || '',
      'Content-Type': config?.headers['Content-Type'] || 'application/x-www-form-urlencoded'
    }
    config.headers = config.headers || {}; // add this line to remove the warning
    return config;
  },
  (error) => {
    // do something
    return Promise.reject(error);
  }
);
// add response interceptors
axios.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    const res = response.data;
    // 接口返回业务处理
    if (!res.success) { 
      if (res.msg == 'login') { 
        alert('没登录，跳转登陆页 ')
      }

      return Promise.reject(new Error(res.msg || 'Error'));
    }
    return res;
  },
  (error) => {
    if (!window.navigator.onLine) {
      // '当前网络不可用，请检查网络设置'
    }
    return Promise.reject(error);
  }
);
