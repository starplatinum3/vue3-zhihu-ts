<template>
<div class="home-bg">

<!--    <van-tabs v-model:active="active">-->
<!--        <van-tab title="标签 1">内容 1</van-tab>-->
<!--        <van-tab title="标签 2">内容 2</van-tab>-->
<!--        <van-tab title="标签 3">内容 3</van-tab>-->
<!--        <van-tab title="标签 4">内容 4</van-tab>-->
<!--    </van-tabs>-->


    <div class="item-box">
        <van-search v-model="value" placeholder="请输入搜索关键词"/>

        <HotBox></HotBox>
        <!--    <div class="hot-box"></div>-->
        <div class="watch-upgrade">
            <div class="watch-tip">您关注的[游戏]话题有更新</div>
            <van-button round plain class="look-btn" type="primary">去看看</van-button>
            <div class="cross-btn">x</div>
        </div>
    </div>

    <div v-for="i in 8"  @click="articleClicked" :key="i">
        <div class="item-box one-card">
<!--            里面添加@click没有 用处-->
            <ZhihuCard @click="articleClicked" class="one-card"></ZhihuCard>
        </div>
    </div>
<!--    <div class="item-box one-card">-->
<!--        <ZhihuCard class="one-card"></ZhihuCard>-->
<!--    </div>-->

<!-- <div class="item-box one-card">-->
<!--        <ZhihuCard class="one-card"></ZhihuCard>-->
<!--    </div>-->

<!--    <div class="item-box one-card">-->
<!--        <ZhihuCard class="one-card"></ZhihuCard>-->
<!--    </div>-->
<!--    <div class="item-box one-card">-->
<!--        <ZhihuCard class="one-card"></ZhihuCard>-->
<!--    </div>-->
    <!--    https://youzan.github.io/vant/#/zh-CN/tabbar-->

    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>


    <!--    <div class="screen">-->

    <!--        <div class="content">-->
    <!--            <h2>题目</h2>-->
    <!--            <div class="mid-box">-->
    <!--                <div class="mid-left">-->
    <!--                    <div class="row nickname-row">-->
    <!--                        &lt;!&ndash;          为什么这个不显示&ndash;&gt;-->
    <!--                        &lt;!&ndash;          flex row 里的图片不显示&ndash;&gt;-->
    <!--                        <img class="avatar-img" src="@/assets/miku.jpg" alt="miku"/>-->
    <!--                        &lt;!&ndash;             <div class="avatar">头像&ndash;&gt;-->
    <!--                        &lt;!&ndash;                 &lt;!&ndash; <img src="src/assets/miku.jpg"/> &ndash;&gt;&ndash;&gt;-->
    <!--                        &lt;!&ndash;                 &lt;!&ndash; src 不行 &ndash;&gt;&ndash;&gt;-->
    <!--                        &lt;!&ndash;                  <img class="avatar-img" src="@/assets/miku.jpg"/>&ndash;&gt;-->
    <!--                        &lt;!&ndash;             </div>&ndash;&gt;-->
    <!--                        <span class="nickname">昵称</span>-->
    <!--                        <span class="personal-signature">昵称</span>-->
    <!--                    </div>-->
    <!--                    &lt;!&ndash;            <img class="avatar-img" src="@/assets/miku.jpg" alt="miku"/>&ndash;&gt;-->


    <!--                    <div class="content-article">内容</div>-->

    <!--                </div>-->
    <!--                <div class="mid-right">-->
    <!--                    <img  class="mid-right-img" src="@/assets/miku.jpg" alt="miku"/>-->
    <!--                </div>-->
    <!--            </div>-->

    <!--            <div class="brows-cnt">浏览</div>-->

    <!--        </div>-->

    <!--    </div>-->
    </div>
</template>
<!--setup-->
<!--ts 不行啊-->
<script lang="ts">
    import {ref} from 'vue';

    import {defineComponent} from 'vue';

    import ZhihuCard from "@/components/zhihu-card/index.vue"
    import HotBox from "@/components/hot-box/index.vue"
    // import { useRouter } from "vue-router";
    import { useRoute, useRouter } from "vue-router"

    export default defineComponent({
        name: 'HomeView',
        components: {
            ZhihuCard,
            HotBox
        },

        setup() {
            const router = useRouter()
            const active = ref(0);
            const value = ref('');

            console.log("setup")
            const  articleClicked=()=>{
                console.log("articleClicked")
                router.push("/MainArticle")
            }
            return {
                value,
                active,
                articleClicked
            };
        },
    });


    // 作者：DylanlZhao
    // 链接：https://juejin.cn/post/7001897686567747598
    //     来源：稀土掘金
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
</script>

<!--其他地方定义的 css 不引入的话 应该不行的吧-->
<!-- <style type="text/css" scoped>-->
<style lang="less" scoped>

    .item-box {
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        margin-top: 5px;
        /*padding-bottom: 10px;*/
    }

    .look-btn {
        // float: right;
        margin-left: 50px;
        font-size: 70%;
        width: 68px;
        height: 24px;
    }

    .watch-upgrade {
        padding-bottom: 10px;
        background: rgb(255, 255, 255);
        display: flex;
        flex-direction: row;
    }

    .watch-tip {
        // background: #4d46ff;
        width: 228px;
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

.home-bg{
    /*background: rgba(86, 84, 84, 0.647);*/
    background: #F4F4F4;
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
    .one-card{
        // 这里改颜色没用
        background: rgb(255, 255, 255);
    //    margin-left: 10px;
    //    margin-right: 10px;
    //     margin-left: 20px;
    //    margin-right: 20px;
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
        // padding-left: 10px;
        padding-left: 30px;
        padding-right: 10px;
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
    .cross-btn{
        margin: 0 auto;
        height: 20px;
         line-height:20px;
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

    /*.hot-box{*/

    /*}*/
</style>
