<template>
    <div class="name">
        {{name}}
        <span v-on:click="fn">哈哈哈</span>
        <img src="" alt="" v-on:click="fn" />
        <template v-if="!name">
            <div>
               啦啦啦 
            </div>
        </template>
        <template v-else>
            <div>
                哇哇哇
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '前端南玖'
        }
    },
    methods: {
        fn() {
            console.log('fn')
        }
    },
    created() {
        console.log('created', this.name)
    },
    mounted() {
        console.log('mounted', this.name)
    }
}
</script>

<style lang="less">
    .name {
        color:salmon;
        font-size: 24rem;
    }
</style>

<style lang="less" module>
    .sub_name {
        color: aqua;
        border: 1rem solid violet;
        .text {
            font-weight: 500;
        }
    }
</style>