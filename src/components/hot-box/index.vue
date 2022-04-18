<template>

    <div class="hot-box">

        <div class="content">
            <!-- <div class="hot-name">知乎热榜</div> -->
            <img width="50px" height="50px" src="@/assets/zhihurebang.jpg">
            <div class="hot-content">
                微信朋友圈可以农场
                <div class="how-num">424万热度</div>
            </div>
            <!--        https://cloud.tencent.com/developer/ask/80815-->
            <!--        <div class="hot-pic">-->
            <!--            <img>-->
            <img class="hot-pic" src="@/assets/miku.jpg" alt="miku"/>
<!--                    </div>-->
        </div>
    </div>
</template>

<script>

    export default {
        components: {},
        name: "GithubHome",
    };
</script>

<!--其他地方定义的 css 不引入的话 应该不行的吧-->
<!-- <style type="text/css" scoped>-->
<style lang="less" scoped>
    /*less import */
    @import "@/assets/style.less";


    .how-num {
        color: #999999;
        background: #4d46ff;
        float: right;
        width: 59px;
        height: 19px;
        position: absolute;
        bottom: 4px;
        right: 4px;
        font-size: 50%;
    }

    .hot-pic {
        width: 55px;
        border-radius: 25%;
        margin-left: 30px;
    }

    .hot-content {
        height: 53px;
        position: relative;
        background: #ff523c;
        width: 206px;
    }

    .white {
        color: white;
    }

    .center {
        text-align: center;
    }

    .get-issue-btn-row {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .btn-margin {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    /* .get-issue-btn-row{
        margin-top: 10px;
        margin-bottom: 10px;
    } */
    .time {
        display: flex;
        flex-direction: row;
        font-size: 50%;
        margin-top: 10px;
    }

    .created_at {
        margin-right: 10px;
        margin-left: 5px;
    }

    .updated_at {
        margin-right: 10px;
        margin-left: 5px;
    }

    /*有头绪了 貌似是这里有padding*/
    .row {
        background: red;
        display: flex;
        flex-direction: row;
        /* flex-direction: row; */
    }

    .row * {
        padding: 0;
    }

    .elliptical-background {
        width: 200px;
        height: 200px;
        line-height: 200px;
        text-align: center;
        font-size: 20px;
        border: 1px red solid;
        border-radius: 50px;
        background-color: bisque;
    }

    .open-bg {
        /* width: 200px;
        height: 200px; */
        /* width: 100px;
        height: 50px; */
        width: 80px;
        height: 30px;
        /* line-height: 200px; */
        /* line-height: 100px; */
        /* line-height: 50px; */
        line-height: 30px;
        text-align: center;
        /* font-size: 20px; */
        font-size: 5px;
        border: 1px greenyellow solid;
        border-radius: 50px;
        background-color: rgb(213, 255, 196);
    }

    .username {
        /* 加粗 */
        font-weight: bold;
        margin-right: 5px;
    }

    // @avatar_size:50px;
    // @avatar_size:70px;
    // @avatar_size:24px;
    // @avatar_size:24*2px;
    @avatar_size: 24px;
    /*    @avatar_img_size: 20px;*/
    @avatar_img_size: 30px;
    /*不是尺寸的原因*/
    .avatar {
        background: yellow;
        // width: 30px;
        // height: 30px;
        width: @avatar_size;
        height: @avatar_size;
        border-radius: 50%;
    }

    @screen_width: 414px;
    .nickname {
        background: purple;
        //  width: 300px;
        //  width: 183*2px;
        //  height: 22*2px;
        /*width: 183px;*/
        width: 123px;
        height: 22px;
        margin-left: 30px;
    }

    .screen {
        background: green;
        width: @screen_width;
    }

    .content {
        display: flex;
        flex-direction: row;

        width: @content_width;

        // padding-left: 10px;
        /*padding-left: 30px;*/
        /*padding-right: 10px;*/
    }

    .avatar-img {
        border-radius: 50%;
        /*margin-left: 30px;*/
        width: @avatar_img_size;
        height: @avatar_img_size;
    }

    .nickname-row {
        height: 30px;
    }

    .personal-signature {
        color: #999999;

        width: 111px;
    }

    .content-article {
        /*width: 349px;*/
        height: 72px;
        background: #000dba;
    }

    .brows-cnt {
        color: #999999;
        font-size: 80%;
        background: #ff9854;
    }

    .mid-box {
        width: 375px;
        height: 102px;
        display: flex;
        /*flex-direction: column;*/
        flex-direction: row;
    }

    .mid-right {
        display: flex;
        align-content: center;
        align-items: center;
        /*width: 73px;*/
        /*height: 73px;*/
        width: 102px;
        height: 102px;
        justify-content: center;
    }

    .mid-right-img {
        width: 73px;
        height: 73px;
    }

    .mid-left {
        width: 274px;
    }

    .hot-box {

        width: 100%;
        background: #4d46ff;
        justify-content: center;
        align-items: center;
        height: 72px;
        display: flex;
        flex-direction: row;
    }

    .hot-name {
        /*widows: ;*/
        background: #ff9854;
        width: 68px;
        height: 55px;
    }
</style>
