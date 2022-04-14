<template>
  <div id="app">
    <!-- <img class="my_img" alt="Vue logo" src="./assets/my.jpg"> -->
    <!-- <Songyao /> -->
    <div class="title" ref="title">实现v-lazy </div>
    <div>{{t3}}</div>
    <img-list />
  </div>
</template>

<script>
// import Songyao from './components/Songyao'
import imgList from "./components/imgList.vue"
export default {
  name: 'app',
  components: {
    // Songyao
    imgList
  },
  data() {
    return {
      t1:0,
      t2:0,
    }
  },
  computed: {
    t3() {
      return this.t1 + this.t2
    }
  },
  mounted() {
    const title = this.$refs.title

    title.ontouchstart = function() {
      this.t1 = +new Date()
      console.log('touchstart')
    }
    title.onclick = function () {
      this.t2 = +new Date()
      console.log('click')
      console.log(this.t2-this.t1)
    }
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
