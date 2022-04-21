<template>
  <div class="next_tick">
      <div ref="title" class="title">{{name}}</div>
      <div class="verse">{{verse}}</div>
  </div>
</template>

<script>
export default {
    name: 'nextTick',
    data() {
        return {
            name: '前端南玖',
            verse: '如若东山能再起，大鹏展翅上九霄',
            count:0
        }
    },
    watch: {
        name(nv) {
            console.log(nv)
        }
    },
    mounted() {
        this.name = 'front end'
        this.verse = '世间万物都是空，功名利禄似如风'
        Promise.resolve().then(() => {
            this.name = 'study ...'
        })
        setTimeout(() => {
            this.verse = '半身风雨半身寒，一杯浊酒敬流年'
        })
        // console.log('sync',this.$refs.title.innerText)
        // Promise.resolve().then(() => {
        //     console.log('微任务',this.$refs.title.innerText)
        // })
        // setTimeout(() => {
        //     console.log('宏任务',this.$refs.title.innerText)
        // }, 0)
        // this.$nextTick(() => {
        //     console.log('nextTick',this.$refs.title.innerText)
        // })
    },
    updated() {
        this.count++
        console.log('update:',this.count)
    }

}
</script>
<style lang="less">
.verse{
    font-size: (20/@rem);
}
</style>
