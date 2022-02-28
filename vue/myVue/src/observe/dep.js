var uid = 0
export default class Dep {
    constructor() {
        this.id = uid++
        this.subs = [] // subscribes订阅者，存储订阅者，这里放的是Watcher的实例
    }

    //收集观察者
    addSub(watcher) {
        this.subs.push(watcher)
    }
    // 添加依赖
    depend() {
        // 自己指定的全局位置，全局唯一,实例化Watcher时会赋值Dep.target = Watcher实例
        if(Dep.target) {
            this.addSub(Dep.target)
        }
    }
    //通知观察者去更新
    notify() {
        console.log('通知观察者更新～')
        const subs = this.subs.slice() // 复制一份
        subs.forEach(w=>w.update())
    }
}