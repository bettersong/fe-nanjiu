<template>
    <div class="title" @click="tabFun">webpack + vue -- {{ name }}</div>
    <img src="../../assets/1.png" class="top_bg" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
// import { add } from 'utils/index.js';
const name = ref('前端南玖')
const img = require('assets/1.png')

onMounted(() => {
    // utils.log()
    // add(10, 1)
    // add(1, 10)
    getInfo()
})

const tabFun = () => {
    // import('utils/index.js').then(fn => {
    //     console.log('--', fn)
    // })
    const res = add(10, 1)
    console.log(res, '--')
}

const getInfo = async () => {
    try {
        const res = await axios.get('/api/getInfo')
        console.log(res)
    } catch(err) {
        console.log(err)
    }
}
</script>

<style>
.title {
    backdrop-filter: blur(2px);
    font-size: 16px;
    font-weight: bold;
    color: salmon;
}
.top_bg {
    width: 100%;
    height: auto;
}
.sub_title {
    font-size:  14px;
    font-weight: 700;
}
</style>