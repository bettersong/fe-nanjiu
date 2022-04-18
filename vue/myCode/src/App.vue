<template>
  <div id="app">
    <next/> 
    <!-- <img class="my_img" alt="Vue logo" src="./assets/my.jpg"> -->
    <!-- <Songyao /> -->
    <!-- <div class="title" ref="title">实现v-lazy </div>
    <div>{{t1}}</div>
    <div>{{name}}</div>
    <div>{{hobby}}</div> -->
    <!-- <img-list /> -->
  </div>
</template>

<script>
// import Songyao from './components/Songyao'
// import imgList from "./components/imgList.vue"
import next from "./components/nextTick.vue"
export default {
  name: 'app',
  components: {
    // Songyao
    // imgList
    next
  },
  data() {
    return {
      t1:0,
      name:'南玖',
      hobby: 'front'
    }
  },
  computed: {
    t3() {
      return this.t1 + this.t2
    }
  },
  updated() {
    console.log('updated')
  },
  mounted() {
    // this.t1 = 100
    // this.hobby = 'front end'
    // setTimeout(() => {
    //   this.name = '前端南玖'
    // })
    // Promise.resolve().then(()=>{
    //   this.name = '哈哈哈'
    // })
    
    // const title = this.$refs.title

    // title.ontouchstart = function() {
    //   this.t1 = +new Date()
    //   console.log('touchstart')
    // }
    // title.onclick = function () {
    //   this.t2 = +new Date()
    //   console.log('click')
    //   console.log(this.t2-this.t1)
    // }
  }
}
</script>

<style lang="less">
#app{
  text-align: center;
}
.title{
  font-size: (24/@rem);
}
.my_img{
  width: (200/@rem);
  height: (200/@rem);
  border-radius: 50%;
}
</style>
