import 'isomorphic-fetch'
import qs from 'qs'
import * as types from 'constants/action-type'

export function httpReponseCheck(res) {
	if(res.status !== 200) {
		throw new Error('Bad response from server')
	}
}

export function nodeReponseCheck(json, callback) {
	if(json.code === 302) {
		window.location.href = json && json.data;
	} else if (json.code === 403) {
        json.data = 'forbidden'
        return json && json.data
    } else if (json.code !== 200) {
		throw new Error(json && json.message)
	} else {
		callback && callback()
		return json && json.data
	}
}

/**
 * common action http request
 * @param config 请求参数
 */
export function actionFetch(config) {
    let url = config.url
    let fetchConfig = {
        method: config.httpType || 'GET',
        credentials: 'same-origin'
    }

    if(window.global && window.global.isDebugger && config.param) {
        config.param.actionType = config.actionType
    }
    if(config.httpType === 'POST' || config.httpType === 'PUT' || config.httpType === 'PATCH') {
        fetchConfig.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if(config.param) {
            fetchConfig.body = JSON.stringify(config.param)
        }
    } else if(config.param) {
        url = config.url + '?' + qs.stringify(config.param, {
            arrayFormat: 'brackets'
        })
    }

	return dispatch => {
        return fetch(url, fetchConfig)
        .then(res => {
            httpReponseCheck(res)
            return res.json()
        })
        .then(json => {
            nodeReponseCheck(json)
            dispatch({
               type: config.actionType,
               data: (json && json.data) || []
            })
            config.callback && config.callback(json.data)
        })
        .catch((errors) => {
            dispatch({
                type: types.FETCH_ERROR
            })
            config.error && config.error(errors)
        })
    }
}

/**
 * common http request
 * @param config 发送请求的参数
 * @param httpType 发送请求的http类型
 */
export function httpFetch(config = {
    url: '',
    param: null,
    callback: null
}, httpType = 'GET') {
    let url = config.url
    let fetchConfig = {
        method: httpType,
        credentials: 'same-origin'
    }
    if(httpType === 'GET') {
        if(config.param) {
            url = config.url + '?' + qs.stringify(config.param, {
                arrayFormat: 'brackets'
            })
        }
    } else if(httpType === 'POST' || httpType === 'PUT') {
        fetchConfig.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if(config.param) {
            fetchConfig.body = JSON.stringify(config.param)
        }
    }

    fetch(url, fetchConfig)
    .then(res => {
        httpReponseCheck(res)
        return res.json()
    })
    .then(json => {
        nodeReponseCheck(json, function() {
            config.callback && config.callback(json.data, json.code)
        })
    })
}
