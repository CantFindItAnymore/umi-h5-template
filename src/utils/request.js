/*
 * @Author: ranjun
 * @Date: 2020-08-11 17:57:26
 * @Last Modified by: ranjun
 * @Last Modified time: 2020-09-15 18:06:59
 */
import { fetch } from 'dva'
import config from './fetch.config.js'
import { Toast } from 'antd-mobile'

function parseJSON(response) {
	return response.json()
}

function checkStatus(response) {
	console.log(response)
	if (response.status >= 200 && response.status < 300) {
		return response
	} else if (response.status === 404) {
		// 拦截处理
		_showErr('页面不存在')
	} else if (response.status === 401 || response.status === 403) {
		// 拦截处理
		_showErr(response.statusText)
	} else {
		_showErr(response.statusText)
		const error = new Error(response.statusText)
		error.response = response
		throw error
	}
}

function _showErr(err) {
	Toast.fail(err || '未知错误')
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
	return fetch(config.baseUrl + url, options)
		.then(checkStatus)
		.then(parseJSON)
		.then(data => ({ data }))
		.catch(err => ({ err }))
}
