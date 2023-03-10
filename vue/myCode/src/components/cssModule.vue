<template>
    <div class="module_box">
        <div class="title">
            css
        </div>
        <nextTick />
    </div>
    
</template>

<script>
import nextTick from './nextTick.vue';
export default {
    data() {
        return {}
    },
    components: {
        nextTick
    }
}
</script>

<style lang="less" module>
:global(.title){
    font-size: 24px;
    color: salmon;
}
</style>