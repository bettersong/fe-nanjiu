<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <div v-if="flag">{{ msg }}</div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "App",
  components: {
    HelloWorld: defineAsyncComponent(() =>
      import("./components/HelloWorld.vue")
    ),
  },
  data() {
    return {
      msg: "0",
    };
  },
  computed: {
    flag() {
      return Number(this.msg);
    },
  },
  setup() {
    console.log(111);
  },
};
</script>

<style lang="less"></style>
