<template>
    <div class="songyao">
        <h1 class="name_rem">{{ username + 'rem' }}</h1>
        <!-- <h1 class="name_vw">{{ username + 'vw' }}</h1>
        <h1 class="name_px">{{ username + 'px' }}</h1> -->
    <p>
      了解脚手架及脚手架指令请移步个人博客<br>
      check out the
      <a href="http://47.100.126.169/zmengBlog" target="_blank" rel="noopener">逐梦博客</a>.
    </p>
    <p>微信公众号：<span class="wx_name">前端南玖</span></p>
    </div>
</template>

<script>
export default {
    name: 'songyao',
    data() {
        return {
            username: 'songyao-cli(vue 模板)'
        }
    },
    mounted() {
        console.log(`%c ${this.username} `, 'color: #fff; background-image: repeating-radial-gradient(circle at 30% 60%,#99CCCC 20px, #7171B7 20px, #7171B7 20px, #CCCC99 40px, #CCCC99 60px, #4F9C9C 30px, #4F9C9C 40px, #99CCCC 80px, #99CCCC 50px); font-size: 16px;border-radius:15px 0;padding:5px;');
        console.log('脚手架使用教程请看个人博客：47.100.126.169/zmengBlog')
    }
}
</script>

<style lang="less">
.songyao{
    p{
        // font-size: (16/@rem);
        font-size: 16*@vw;
    }
    .name_rem{
        font-size: (24/@rem);
    }
    .name_vw{
        font-size: 24*@vw;
    }
    .name_px{
        font-size: 24px;
    }
   .wx_name{
    color:brown;
    }
}

</style>