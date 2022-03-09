
function queryData(key) {
    let url = window.location.href,obj = {}
    let str = url.split('?')[1] // 先拿到问号后面的所有参数
    let arr = str.split('&') // 分割参数
    for(let i=0; i< arr.length; i++) {
        let kv = arr[i].split('=')
        obj[kv[0]] = decodeURIComponent(kv[1])
    }
    console.log(url,obj)
    // {a: '1', b: '2', c: '3', name: '南玖'}
    return obj[key]
    
}
//http://127.0.0.1:5500/src/js/2022/%E6%89%8B%E5%86%99/index.html?a=1&b=2&c=3&name=%E5%8D%97%E7%8E%96
console.log(queryData('name')) // 南玖