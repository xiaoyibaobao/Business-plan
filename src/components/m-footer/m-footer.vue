<template>
    <div class="m-footer">
        <mt-tabbar v-model="selected">
            <mt-tab-item id="赛事">
                <img slot="icon" src="../../common/images/icon-cup.png"> 赛事
            </mt-tab-item>
            <mt-tab-item id="作品">
                <img slot="icon" src="../../common/images/icon-apps.png"> 作品
            </mt-tab-item>
            <mt-tab-item id="话题">
                <img slot="icon" src="../../common/images/icon-topic.png"> 话题
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected:'赛事'
        };
    },
    watch: {
    selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        console.log(val)
        
    }
}
};
</script>
<style lang="scss" scoped>
.mint-tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>

