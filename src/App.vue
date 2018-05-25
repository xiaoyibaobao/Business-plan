<template>
  <div id="app">
    <!-- 头部挂载 -->
    <m-header></m-header>
    <router-view/>
  </div>
</template>

<script>
import MHeader from '../src/components/m-header/m-header';
export default {
  name: 'App',
  components:{
    MHeader
  }
}
</script>

<style>

</style>
