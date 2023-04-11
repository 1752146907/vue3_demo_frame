import axios from 'axios';
import qs from 'query-string';

 
/**
 * 以下是几个例子 
 */
export interface baseInfoModel {
  releaseType: number|string;
  page: number|string;
  limit: number|string;
}
export function getList(params: baseInfoModel) {
  return axios.get('/api/authorization/contentList', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}

export function passportLogout(params: any) {
  // return axios.post('/api/passport/logout', params);

  return axios.post('/api/passport/logout', qs.stringify(params), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
} 

/**
 * 列表数据导出
 * @param params 传入下载地址的参数
 * @param targetUrl 下载的地址url
 */
export function exportDataDownload(params: object, targetUrl: string) {
  const m = document.createElement('a');
  m.href = targetUrl + '?' + qs.stringify(params);
  // eslint-disable-next-line no-irregular-whitespace
  // m.target = params.target ? params.target : '_self';
  // m.target = "_blank";
  document.body.appendChild(m);
  m.click();
  m.remove();
  // location.href = targetUrl;
}