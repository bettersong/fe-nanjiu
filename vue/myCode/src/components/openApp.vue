<template>
  <div class="open_app">
      <div class="open_app_title">前端南玖唤端测试Demo</div>
      <div class="open_btn" @click="open1">打开知乎</div>
  </div>
</template>

<script>
let timer
export default {
    name: 'openApp',
    methods: {

        openByUniversal () {
            // window.location.href = 'https://mjump.zhuanzhuan.com/zhuanzhuan/index.html'
            window.location.href = 'https://oia.zhihu.com/questions/64966868'
            // oia.zhihu.com
        },
        watchVisibility() {
            window.addEventListener('visibilitychange', () => {
                // 监听页面visibility
                if(document.hidden) {
                    // 如果页面隐藏了，则表示唤起成功，这时候需要清除下载定时器
                    clearTimeout(timer)
                }
            })
        },
        open() {
            timer = setTimeout(() => {
                window.location.href = 'http://apps.apple.com/cn/app/id387682726'
            }, 3000)
            window.location.href = 'TencentWeibo://'
        },
        open1() {
            // TencentWeibo
            // window.location.href = 'weixin://dl/profile'
            window.location.href = 'zhihu://'
            // const iframe = document.createElement('iframe')
            // iframe.style.display = 'none'
            // iframe.src = 'zhihu://'
            // document.body.appendChild(iframe)
        }
    }
}
</script>

<style lang="less">
.open_app_title {
    font-size: (20/@rem);
}
.open_btn{
    margin-top:(20/@rem);
    padding:(10/@rem) 0;
    border-radius: (8/@rem);
    background: salmon;
    color: #fff;
    font-size: (16/@rem);
}
</style>