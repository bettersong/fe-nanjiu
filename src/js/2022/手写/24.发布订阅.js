
class EventEmitter {
    constructor() {
        this.events = {}
    }

    // 订阅事件
    on(event, callback) {
        if(!this.events[event]) {
            this.events[event] = []
        }
        // 将事件对应的回调放入该事件的事件队列中
        this.events[event].push(callback)
        return this
    }

    //发布事件
    emit(event, args) {
        const callbackList = this.events[event]
        if(callbackList.length) {
            callbackList.forEach(cb => cb.apply(this, args))
        }
        return this
    }

    // 删除订阅
    off(event, callback) {
        // event没传，则删除所有订阅的事件
    if (typeof event === 'undefined') {
        delete this.events
      } else if (typeof event === 'string') {
        // 删除指定事件的回调 
        if (typeof callback === 'function') {
          this.events[ event ] = this.events[ event ].filter((cb) => cb !== callback)
        } else {
          // 删除整个事件
          delete this.events[ event ]
        }
      }
  
      return this
    }
    // 只进行一次的事件订阅
    once (event, callback, context) {
        const proxyCallback = (...args) => {
        callback.apply(context, args)
        // 回调函数执行完成之后就删除事件订阅
        this.off(event, proxyCallback)
        }

        this.on(event, proxyCallback, context)
    }
}

// 写完测一把
const bus = new EventEmitter()

// 先订阅一个事件
bus.on('add', () => {
    console.log('nanjiu')
})
// 发布事件
bus.emit('add') // nanjiu