
export default function abortableFetch(url, initData){
    const abortController = new AbortController()
    const signal = abortController.signal
    
    return {
      // 这里需要将 signal 与请求进行关联，关联之后才能通过 abortController.abort 方法取消请求
      request: fetch(url, {...initData, signal}).then(response => response.json()),
      // 用于在外层手动取消请求
      cancelRes: () => abortController.abort(),
    }
  }
