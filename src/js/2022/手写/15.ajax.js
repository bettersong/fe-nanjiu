/**
 * 
 */

function ajax(url, method, data=null) {
    const xhr = XMLHttpRequest() // 咱们这里就不管IE低版本了
    // open()方法，它接受3个参数：要发送的请求的类型，请求的url和是否异步发送请求的布尔值。
    xhr.open(method, url ,false) // 开启一个请求，当前还未发送

    xhr.onreadyStatechange = function() {
        if(xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                alert(xhr.responseText);
            } else {
                console.log("Request was unsuccessful: " + xhr.status);
            }
        }
    }
    if(method === 'post') {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    xhr.send(data) // get请求，data应为null，参数拼接在URL上


}