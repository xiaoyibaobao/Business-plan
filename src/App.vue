<template>
  <div id="app">
    <!-- 头部挂载 -->
    <m-header></m-header>
    <mt-navbar v-model="selected">
  <mt-tab-item id="1">赛事介绍</mt-tab-item>
  <mt-tab-item id="2">参赛作品标准</mt-tab-item>
  <mt-tab-item id="3">明星开发者</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
    <m-footer></m-footer>
    <router-view/>
  </div>
</template>

<script>
import MHeader from '../src/components/m-header/m-header';
import MFooter from '../src/components/m-footer/m-footer'
export default {
  name: 'App',
   name: 'page-navbar',  
  
  data() {  
    return {  
      selected: '1'  
    };  
  }  ,
  components:{
    MHeader,
    MFooter
  }
}
</script>

<style lang="scss" scoped>
.is-selected{
  color: hotpink !important;
  border-bottom: 3px solid transparent !important;
}
</style>
