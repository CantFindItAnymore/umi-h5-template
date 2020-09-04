/*
 * @Author: ranjun
 * @Date: 2020-08-11 17:57:26
 * @Last Modified by: ranjun
 * @Last Modified time: 2020-09-02 09:59:38
 */
import {fetch} from 'dva';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else if (response.status === 404) {
    // 拦截处理
    _showErr('页面不存在')
  } else if (response.status === 401 || response.status === 403) {
    // 拦截处理
    _showErr()
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function _showErr(err) {
  Toast.fail(err || '未登录', 2000)
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
