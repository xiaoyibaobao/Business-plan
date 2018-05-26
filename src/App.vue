<template>
  <div id="app">
    <!-- 头部挂载 -->
    <m-header></m-header>
    <!-- <nav>
            <ul>
                <router-link tag="div" to="/Developers"><li>赛事介绍</li></router-link>
                <router-link to="/Developers"><li>参赛作品标准</li></router-link>
                <router-link to="/Developers"><li>明星开发者</li></router-link>
            </ul>
        </nav> -->
    <m-content></m-content>
    <m-footer></m-footer>
    <router-view/>
  </div>
</template>

<script>
import MHeader from "../src/components/m-header/m-header";
import MFooter from "../src/components/m-footer/m-footer";
import MContent from '../src/components/view/content'
export default {
    name: "App",
    name: "page-navbar",

    data() {
        return {
            selected: "1",
        }
    },  
    components: {
        MHeader,
        MFooter,
        MContent
    }
};
</script>

<style lang="scss" scoped>
.is-selected {
    color: hotpink !important;
    border-bottom: 3px solid transparent !important;
}
#app{
  padding-bottom: 60px;
}
nav {
    width: 100%;
    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        li {
            width: 33.33%;
            line-height: 3;
            text-align: center;
            font-size: 14px;
            color: #666;
        }
    }
}
  .router-link-active {
    color: #49A4F7;
    border-bottom: 2px solid #49A4F7;
  }
</style>
