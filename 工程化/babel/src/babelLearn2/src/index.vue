<template>
    <div class="name">
        {{name}}
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
        font-size: 18px;
    }
</style>

<style lang="less">
    .sub_name {
        color: aqua;
        border: 1px solid violet;
        .text {
            font-weight: 500;
        }
    }
</style>