
function ajax({
    url,
    method = 'get',
    data = null,
} = {}) {
    return new Promise((resolve, reject) => {
        if(!url) {
            return reject(new Error('request url is missing'))
        }
        if(method.toLowerCase() === 'get') {
            url += `${qs(data)}`
        }
        // 新建xhr对象
        const xhr = new XMLHttpRequest()
        // 创建http请求
        xhr.open(method, url, false)
        //监听请求状态
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status >= 200 && xhr.status <300 || xhr.status === 304) {
                    resolve(xhr.response)
                }
            }
        }
        xhr.onerror = function(error) {
            reject('请求失败')
        }
        // 发送请求
        xhr.send(method.toLowerCase() === 'get' ? null : JSON.stringify(data))
    })
}

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