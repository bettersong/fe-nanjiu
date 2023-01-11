<template lang="">
    <div>
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

<style lang="">
    
</style>