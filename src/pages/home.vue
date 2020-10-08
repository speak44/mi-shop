<template>
  <div>
    home页面
    <nav-footer></nav-footer>
    <router-view></router-view>
    <nav-header></nav-header>
  </div>
</template>
<script>
import NavFooter from '../components/NavFooter'
import NavHeader from'../components/NavHeader'
export default {
  name:'home',
  components:{
    NavFooter,
    NavHeader
  }
}
</script>
