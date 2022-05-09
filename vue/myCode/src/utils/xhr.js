
export default function request({
    url,
    method = 'get',
    data = null,
} = {}) {
    return new Promise((resolve, reject) => {
        if(!url) {
            return reject(new Error('request url is missing'))
        }
        if(data && method.toLowerCase() === 'get') {
            url += `${qs(data)}`
        }
        // 新建xhr对象
        const xhr = new XMLHttpRequest()

        // 创建http请求
        xhr.open(method, url, true)
        //监听请求状态
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status >= 200 && xhr.status <300 || xhr.status === 304) {
                    resolve(JSON.parse(xhr.response))
                }
            }
        }
        xhr.onerror = function(error) {
            reject('请求失败' + error)
        }
        // 发送请求
        xhr.send(method.toLowerCase() === 'get' ? null : JSON.stringify(data))
        
        let cacheKey = url
        if(request.cache[cacheKey]) {
            return xhr.abort() // 缓存中存在的说明该请求执行过，终止请求
        }
        request.cache[cacheKey] = xhr 
    })
}

request.cache = {} // 缓存请求xhr实例


function qs(data) {
    if(data && typeof data === 'object') {
        const res = []

        Object.keys(data).forEach(k => {
            res.push(`${k}=${JSON.stringify(data[k])}`)
        })
        return res.join('&')
    }

    return data
}