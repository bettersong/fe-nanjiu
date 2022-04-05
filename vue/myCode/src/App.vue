<template>
  <div id="app">
    <img class="my_img" alt="Vue logo" src="./assets/my.jpg">
    <Songyao />
  </div>
</template>

<script>
import Songyao from './components/Songyao'
export default {
  name: 'app',
  components: {
    Songyao
  },
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.my_img{
  width: (200/@rem);
  height: (200/@rem);
  border-radius: 50%;
}
</style>
