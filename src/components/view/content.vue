<template>
    <div class="content">
        <nav>
            <ul>
                <li>赛事介绍</li>
                <li>参赛作品标准</li>
                <li>明星开发者</li>
            </ul>
        </nav>
        <div class="nav_list">
            <ul>
                <li>
                    <div class="left">
                        <img src="../../common/images/404.png" alt="">
                    </div>
                    <div class="right">
                        <h6 class="name">邓小一</h6>
                        <h6 class="company">小西网络科技</h6>
                        <h6 class="content">床前明月光疑是地上霜举头望明月低头思故乡来自于李白的</h6>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <img src="../../common/images/404.png" alt="">
                    </div>
                    <div class="right">
                        <h6 class="name">邓小一</h6>
                        <h6 class="company">小西网络科技</h6>
                        <h6 class="content">床前明月光疑是地上霜举头望明月低头思故乡来自于李白的</h6>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <img src="../../common/images/404.png" alt="">
                    </div>
                    <div class="right">
                        <h6 class="name">邓小一</h6>
                        <h6 class="company">小西网络科技</h6>
                        <h6 class="content">床前明月光疑是地上霜举头望明月低头思故乡来自于李白的</h6>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <img src="../../common/images/404.png" alt="">
                    </div>
                    <div class="right">
                        <h6 class="name">邓小一</h6>
                        <h6 class="company">小西网络科技</h6>
                        <h6 class="content">床前明月光疑是地上霜举头望明月低头思故乡来自于李白的</h6>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <img src="../../common/images/404.png" alt="">
                    </div>
                    <div class="right">
                        <h6 class="name">邓小一</h6>
                        <h6 class="company">小西网络科技</h6>
                        <h6 class="content">床前明月光疑是地上霜举头望明月低头思故乡来自于李白的</h6>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <img src="../../common/images/404.png" alt="">
                    </div>
                    <div class="right">
                        <h6 class="name">邓小一</h6>
                        <h6 class="company">小西网络科技</h6>
                        <h6 class="content">床前明月光疑是地上霜举头望明月低头思故乡来自于李白的</h6>
                    </div>
                </li>
            </ul>
        </div>
        <div class="nav_list" style="display:block;">
            <video id="myvideo" :src="videoSrc" :poster="videoImg" :muted="muteStatus" :autoplay="playStatus" height="414" width="720">
                your browser does not support the video tag
            </video>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            _dom:"",
            videoSrc:'http://www.ad.com/video/04.mp4',
            videoImg:'http://static.fdc.com.cn/avatar/usercenter/5996999fa093c04d4b4dbaf1_162.jpg',
            playStatus:'',
            muteStatus:'',
            isMute:true,
            isPlay:false
        };
    },
      methods:{
        playClick(){
            this.isPlay = !this.isPlay;
            this.playStatus= 'autoplay';
        },
        closeSoundClick(){
            this.isMute = !this.isMute;
            if(this.isMute){
                this.muteStatus = '';
            }else{
                this.muteStatus = 'muted';
            }
        }
      }
};
</script>

<style lang="scss" scoped>
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
.nav_list {
    width: 100vw;
    display: none;
    text-align: center;
    // background-color: rgba(250, 180, 150, 1);
    ul {
        overflow: hidden;
        background-color: rgba(255, 255, 255, 1);
        width: 80%;
        margin: 0 auto;
        li {
            border-radius: 5px;
            width: 100%;
            display: block;
            overflow: hidden;
            .left {
                width: 30%;
                float: left;
                img {
                    width: 100%;
                }
            }
            .right {
                float: right;
                width: 65%;
                text-align: left;
                .name {
                    line-height: 1.5;
                    font-size: 20px;
                    color: black;
                }
                .company {
                    font-size: 16px;
                    color: #666;
                }
                .content {
                    line-height: 1.5;
                    font-size: 16px;
                    color: black;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            }
        }
    }
}
video{
    width: 100vw;
    height: auto;
}
</style>

