<template>
    <div class="tabs">
        <div :class="{tab: true, active: currentTab==item.id}" v-for="(item, index) in tabs" :key="index" @click="tabFun(item.id)">
            {{ item.name }}
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const tabs = ref([{id: 1, name: '首页'}, {id: 2, name: '关于'}])
const currentTab = ref(1)

const tabFun = (id) => {
    currentTab.value = id
}
</script>

<style lang="scss" scoped>
.tabs {
    display: flex;
    align-items: center;
    .tab {
        font-size: 20px;
        font-weight: 400;
        color: #191919;
    }
    .tab.active {
        color: #ff0000;
    }
}
</style>