<template>
    <div class="m-header">
        <div class="left">
            <h2 class="m_header_h2">第六届</h2>
            <h1 class="m_header_h1">移动应用创新大赛</h1>
            <div class="left_content">
                <div class="left_content_left">
                    <div class="exploit_num">
                        {{exploit_num}}
                    </div>
                    <h3>开发者数</h3>
                    <button>+加入</button>
                </div>
                <div class="left_content_right">
                    <div class="app_num">
                        {{app_num}}
                    </div>
                    <h3>APP数</h3>
                    <button>+发布</button>
                </div>
            </div>
        </div>
        <div class="user"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            exploit_num: "132",
            app_num: "4564"
        };
    }
};
</script>

<style lang="scss" scoped>
.m-header {
    width: 100vw;
    height: 27vh;
    box-sizing: border-box;
    padding-top: 8%;
    position: relative;
    background: url("../../common/images/banner.jpg") center top / 100% auto
        no-repeat;
    .left {
        margin-left: 5%;
        .m_header_h2 {
            color: #ffffff;
            font-size: 24px;
            font-weight: 700;
        }
        .m_header_h1 {
            margin-top: 2%;
            color: #ffffff;
            font-size: 30px;
            font-weight: 700;
        }
        .left_content {
            width: 50%;
            height: 100px;
            margin-top: 3%;
            .left_content_left {
                float: left;
                width: 45%;
                height: 20px;
                .exploit_num {
                    color: #ffffff;
                    font-size: 16px;
                }
                h3 {
                    color: #ffffff;
                    margin-top: 5%;
                    font-size: 12px;
                    font-weight: 200;
                }
                button {
                    margin-top: 10%;
                    width: 100%;
                    height: 4.5vh;
                    background: none;
                    color: #ffffff;
                    border-radius: 5px;
                    list-style-type: none;
                    border: 1px solid #ffffff;
                }
            }
            .left_content_right {
                float: right;
                width: 45%;
                height: 20px;
                .app_num {
                    color: #ffffff;
                    font-size: 16px;
                }
                h3 {
                    color: #ffffff;
                    margin-top: 5%;
                    font-size: 12px;
                    font-weight: 200;
                }
                button {
                    margin-top: 10%;
                    width: 100%;
                    height: 4.5vh;
                    background: none;
                    color: #ffffff;
                    border-radius: 5px;
                    list-style-type: none;
                    border: 1px solid #ffffff;
                }
            }
        }
    }
    .user{
        width: 25px;
        height: 30px;
        position: absolute;
        top: 10%;
        right: 5%;
        background: url('../../common/images/icon-user.png') center top /100% 100% no-repeat;
    }
}
</style>

