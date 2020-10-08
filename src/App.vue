<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//  import storage from './storage/index'
export default {
  name: 'App',
  components: {
  },
  mounted(){ 
    console.log(this.axios);
    // console.log(storage.getItem('user'));
    // storage.setItem('zhangsan',{a:1,b:2})
    // storage.setItem('wangwu',{a:1,b:2},'user')
    // storage.clear('zhangsan')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
