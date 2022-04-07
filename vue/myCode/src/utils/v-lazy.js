


export default {
   install(Vue) {
       // 默认图片
       let defaultSrc = require('../../../../src/js/2022/4/images/default.gif')
       // 懒加载
       const lazyLoad = (el, binding) => {
            el.src = defaultSrc  // 给图片添加一个默认图
            const observer = new IntersectionObserver((entries, observe) => {
                entries.forEach(item => {
                    let target = item.target
                    if(item.isIntersecting) {
                            target.src = binding.value
                            // 取消观察
                            observe.unobserve(item.target)
                        
                    }
                })
            })
            observer.observe(el)
       }

       Vue.directive('lazy', {
           inserted: lazyLoad,
           updated: lazyLoad
       })
   }
  
}