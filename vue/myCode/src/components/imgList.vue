<template>
    <div class="img_list">
        <img v-lazy="item.img" v-for="item in imgList" :key="item.id" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgList: Object.freeze([
                {id:1, img:require("../../../../src/js/2022/4/images/1.png")},
                {id:2, img:require("../../../../src/js/2022/4/images/2.jpg")},
                {id:3, img:require("../../../../src/js/2022/4/images/3.jpg")},
                {id:4, img:require("../../../../src/js/2022/4/images/4.jpg")},
                {id:5, img:require("../../../../src/js/2022/4/images/5.jpg")},
                {id:6, img:require("../../../../src/js/2022/4/images/6.png")},
                {id:7, img:require("../../../../src/js/2022/4/images/7.png")},
                {id:8, img:require("../../../../src/js/2022/4/images/8.jpeg")},
                {id:9, img:require("../../../../src/js/2022/4/images/9.png")},
                {id:10, img:require("../../../../src/js/2022/4/images/10.jpg")},
                {id:11, img:require("../../../../src/js/2022/4/images/11.jpeg")},
                {id:12, img:require("../../../../src/js/2022/4/images/12.jpg")},
                {id:13, img:require("../../../../src/js/2022/4/images/13.jpeg")},
                {id:14, img:require("../../../../src/js/2022/4/images/14.jpeg")},
                {id:15, img:require("../../../../src/js/2022/4/images/15.jpeg")},

            ])
        }
    },
    mounted() {
        const src = require("../../../../src/js/2022/4/images/15.jpeg")
        const img = new Image()

        // img.src = require("../../../../src/js/2022/4/images/15.jpeg")

        img.onload = function(e) {
            console.log('111', e)
        }

        img.src = src
        img.src = src

        setTimeout(()=> {
            img.src = src
        },1000)
        // img.onload = function(e) {
        //     console.log('222', e)
        // }
    }
}
</script>

<style lang="less">
.img_list{
    img{
        width: (300/@rem);
        height: (160/@rem);
    }
}
</style>