

function lazyLoad() {
    // 第一种方法判断图片是否进入了可视区
    // 先获取当前可视区的高度
    let viewHeight = document.documentElement.clientHeight
    console.log(viewHeight)
    // 获取当前页面所有图片
    let imgs = document.querySelectorAll('.img_box')

    imgs.forEach(item => {
        if(!item.getAttribute('src')) return
        let rect = item.getBoundingClientRect()
        console.log(rect)
        //判断元素是否在可视区
        if(rect.bottom >= 0 && rect.top < viewHeight && item.dataset.src) {
            // 当前元素距离底部距离大于等于0并且距离顶部距离小于当前可视区高度，则说明元素在可视区
            item.src = item.dataset.src
            item.removeAttribute('data-src')
        }
    })
}
lazyLoad()
window.addEventListener('scroll',lazyLoad)

function lazyLoadWithObserver() {
    // 推荐使用IntersectionObserver
    let options = {

    }
    let observer = new IntersectionObserver((entries, observe) => {
        entries.forEach(item => {
            // 获取当前正在观察的元素
            console.log(item)
            let target = item.target
            if(item.isIntersecting && target.dataset.src) {
                    target.src = target.dataset.src
                    // 删除data-src属性
                    target.removeAttribute('data-src')
                    // 取消观察
                    observe.unobserve(item.target)
                
            }
        })
    })

    let imgs = document.querySelectorAll('.img_box')

    imgs.forEach(item => {
        observer.observe(item)
    })
}

// lazyLoadWithObserver()
