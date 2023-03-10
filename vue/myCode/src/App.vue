<template>
  <div id="app">
    <!-- <next/>  -->
    <!-- <openApp /> -->
    <!-- <waterfall2 /> -->
    <!-- <div class="btn" @click="getDataByAxios">发起请求</div> -->
    <!-- <div class="open_app"></div> -->
    <!-- <img class="my_img" alt="Vue logo" src="./assets/my.jpg"> -->
    <!-- <Songyao /> -->
    <!-- <div class="title" ref="title">实现v-lazy </div>
    <div>{{t1}}</div>
    <div>{{name}}</div>
    <div>{{hobby}}</div> -->
    <!-- <img-list /> -->
    <cssModule />
  </div>
</template>

<script>
// import Songyao from './components/Songyao'
// import imgList from "./components/imgList.vue"
// import next from "./components/nextTick.vue"
// import openApp from "./components/openApp.vue"
// import waterfall2 from "./components/waterfall.vue"
import cssModule from "./components/cssModule.vue"
// import xhr from "./utils/xhr"
import axios from "./utils/axios"
import abortableFetch from "./utils/fetch"
export default {
  name: 'app',
  components: {
    // Songyao
    // imgList
    // next,
    // waterfall2,
    // openApp
    cssModule
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
    console.log('updated', axios)
  },
  mounted() {
    // console.log('mounted', axios)
    this.fetchData()
      // this.getData()
      // this.getData()
  },
  methods: {
    // async getData() {
    //   const res = await xhr({
    //     url: '/api/columns/zhihuadmin',
    //     method: 'get'
    //   })
    //   console.log(res)
    // },
    async getDataByAxios() {
      const res = await axios.get('/api/columns/zhihuadmin')
      res
      console.log('axios')
    },
    async fetchData() {

      const {request, cancelRes} =  abortableFetch('/api/columns/zhihuadmin')

      // console.log(ready,'ss')
      request
        .then(res => console.log(res))
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('请求已被终止');
          }
        });

      // 手动取消请求
      cancelRes();
      
    }
  }
}
</script>

<style lang="less">
#app{
  text-align: center;
}
.title, .btn{
  font-size: (24/@rem);
}
.btn{
  background: skyblue;
  color: #fff;
}
.my_img{
  width: (200/@rem);
  height: (200/@rem);
  border-radius: 50%;
}
</style>
