
import axios from "axios"

const request = axios.create({
    // baseURL: 'https://zhuanlan.zhihu.com',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
const cache = {}
// 自定义请求拦截器
request.interceptors.request.use(cfg => {
    
    let cacheKey = cfg.url
    console.log('sss', cache)
    console.log('ww', cache[cacheKey])
    cache[cacheKey] && cache[cacheKey]()
    cfg.cancelToken = new axios.CancelToken(function executor(c){
        cache[cacheKey] = c
    })
    return cfg
}, err => Promise.reject(err))

// 自定义响应拦截器
request.interceptors.response.use(res => {
    if(res.status === 200) {
        return Promise.resolve(res.data)
    }

    return Promise.reject(res)
}, err => Promise.reject(err))

export default request