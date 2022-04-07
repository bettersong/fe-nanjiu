<template>
  <div id="app">
    <!-- <img class="my_img" alt="Vue logo" src="./assets/my.jpg"> -->
    <!-- <Songyao /> -->
    <div class="title">实现v-lazy</div>
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
