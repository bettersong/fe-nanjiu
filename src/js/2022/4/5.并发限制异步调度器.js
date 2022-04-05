

/**
 *  并发限制
 */


class Schedule {
    constructor() {
        this.waitList = [] // 异步任务等待队列
        this.execList = [] // 异步任务执行队列
        this.maxNum = 2  //最大并发数量
    }

    // 添加异步任务
    add(callback) {
        // 先判断异步任务执行队列长度
        if(this.execList.length < this.maxNum) {
            //如果执行队列数量小于最大并发数量，则将该队列放入异步执行队列
            this.execList.push(callback)
            // 并执行该任务
            this.run(callback)
        }else {
            // 否则将该任务放入等待队列
            this.waitList.push(callback)
        }
    }

    // 执行异步任务
    run(callback) {
        const len = this.execList.length
        let index = len - 1 //获取当前正在执行的异步任务的索引
        // 执行该异步任务
        callback().then(() => {
            // 执行完将该任务移出执行队列
            this.execList.splice(index, 1)
            // 再判断等待队列是否还有异步任务
            if(this.waitList.length > 0) {
                this.run(this.waitList.shift())
            }
        })
    }
}

const timeout = time => new Promise((resolve, reject) => {
    setTimeout(resolve, time)
})

const schedule = new Schedule()
function addTask(time, index) {
    schedule.add(
        ()=>timeout(time).then(()=>console.log(index, +new Date()))
    )
}
addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)

// 2,3,1,4
/**
 * 先任务1进执行队列，任务1开始执行，接着任务2进执行队列，任务2开始执行
 * 接着任务3进等待队列，任务4进等待队列。时间到了500ms，打印出2，任务2移出执行队列
 * 任务3进执行队列，此时时间到了（500+300）800ms，打印出3，任务3移出执行队列
 * 任务4进执行队列，此时时间到了1000ms，打印出1，任务1移出执行队列
 * 等待队列没有任务了，此时时间到了（800+400）1200ms，打印出4
 */
