<template>
    <tab />
    <div :class="{ title: true, active: flag }" @click="tabFun">webpack + vue -- {{ name }}--</div>
    <img src="../../assets/1.png" class="top_bg" />
    <input type="text" v-model="tel" class="tel_input" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { add, say } from 'utils/index.js';
import tab from '../components/tab.vue'
const name = ref('前端南玖')
const flag = ref(false)
const tel = ref('')
onMounted(() => {
    console.log(1112)
    // utils.log()
    // add(10, 1)
    // add(1, 10)
    // getInfo()
})

const tabFun = () => {
    // import('utils/index.js').then(fn => {
    //     console.log('--', fn)
    // })
    flag.value = !flag.value
    const res = add(10, 1)

    console.log(res, '--')
    say()
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
/* body{
    background: brown;
} */
.title {
    backdrop-filter: blur(2px);
    font-size: 18px;
    font-weight: bold;
    color: salmon;
}
.active {
    color: green;
}
.top_bg {
    width: 100%;
    height: auto;
}
.sub_title {
    font-size:  14px;
    font-weight: 700;
}
.tel_input {
    color: #191919;
}
</style>