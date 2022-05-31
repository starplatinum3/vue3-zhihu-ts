<template>
    <!--  <div class="about">-->
    <!--    <h1>This is an about page</h1>-->
    <!--  </div>-->
    <!--  <div></div>-->
    <!--  <header></header>-->
    <!--  class="top-bar-wrapper"-->
    <van-sticky>
        <!--    flex-row-->
        <div class=" top-bar">
            <!--            style="background:#ff523c;"-->
            <!--      class="QR-code-wapper"-->
            <div>
<!--                回退-->
                <!--            <img class="QR-code" src="@/assets/miku.jpg">-->
                <svg t="1648706295557" class="icon top-icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="4923" width="128" height="128">
                    <path d="M596.377143 1023.767273a40.727273 40.727273 0 0 1-29.090909-11.869091L104.857143 546.443636A40.494545 40.494545 0 0 1 104.857143 488.727273L579.155325 12.101818a40.820364 40.820364 0 0 1 57.949091 57.483637L191.431688 517.585455l433.803637 436.363636a40.727273 40.727273 0 0 1-28.858182 69.818182z"
                          p-id="4924"></path>
                </svg>

            </div>
            <span>消息</span>

<!--            <span class="plus">+</span>-->
<!--            chart grid-item-book-->
<!--            <i class="icon iconfont icon-jia"></i>-->
<!--            <i class="icon iconfont icon-jia"></i>-->
            <i class="icon iconfont icon-jia1"></i>

        </div>
    </van-sticky>

    <div class="mul-row-content create-box">
        <!--            <div class="chart"></div>-->
        <!--            <div class="chart"></div>-->
        <!--            <div class="chart"></div>-->
        <!--            <div class="chart"></div>-->
        <!--            <div class="chart"></div>-->
        <!--            <div class="chart"></div>-->
        <!--            <div v-for="i in 8" class="chart" :key="i">-->
        <!--            https://acc15t4bm5.feishu.cn/docs/doccnunkprCV2dRpleaGfAVyAyc-->
        <!--            style="color:red;"-->
        <!--            <div></div>-->
        <div class="chart">
            <i class="chart grid-item-book icon iconfont icon-yaoqing"></i>
            <div>邀请回答</div>
        </div>
        <div class="chart">
            <i class="chart grid-item-book icon iconfont icon-xihuan"></i>
            <div>赞同与喜欢</div>
        </div>

        <div class="chart">
            <i class="chart grid-item-book icon iconfont icon-yanjing"></i>
            <div>关注</div>
        </div>
        <div class="chart">
            <i class="chart grid-item-book icon iconfont icon-pinglun"></i>
            <div>评论与转发</div>
        </div>

    </div>
    <span class="top-margin"></span>
    <MsgBriefInfo class="MsgBriefInfo"></MsgBriefInfo>
    <MsgBriefInfo class="MsgBriefInfo"></MsgBriefInfo>
    <MsgBriefInfo class="MsgBriefInfo"></MsgBriefInfo>
    <MsgBriefInfo class="MsgBriefInfo"></MsgBriefInfo>
    <MsgBriefInfo class="MsgBriefInfo"></MsgBriefInfo>

    <MsgBriefInfo v-for="i in 8" class="MsgBriefInfo" :key="i"></MsgBriefInfo>
</template>

<script lang="ts">
    import MsgBriefInfo from "@/components/MsgBriefInfo.vue"
    import {reactive, toRefs} from 'vue'

    import {ref} from 'vue';
    import {defineComponent} from 'vue';


    export default defineComponent({
      name: 'HomeView',
      components: {
        MsgBriefInfo,
      },

      setup() {

        return {

        };
      },
    });


</script>

<style scoped lang="css">

    .plus{
        /*position: absolute;*/
        /*top: 0;*/
        /*display: inline;*/
        display: inline-block;
        vertical-align: top;
        margin-top: 0;
        /*width: 20px;*/
        /*height: 20px;*/
        /*font-size: 20px;*/
        font-size: 30px;
    }
    .top-margin{
        height: 20px;
    }
    .MsgBriefInfo{
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .grid-item-book-text {
        /*margin-top: 10px;*/
        margin-top: 5px;
    }

    .grid-item-book {
        margin-top: 20px;
        /*width: 40px;*/
        /*height: 40px;*/
        width: 70px;
        height: 70px;
        /*font-size: 20px;*/
        font-size: 30px;

    }

    .chart {
        display: inline-block;
        /*width: 30%;*/
        /*width: 20%;*/
        width: 25%;
        height: 40%;
        margin: 0 auto;
        /*border: 1px solid #000;*/
    }

    .create-box {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        margin-top: 0.75rem;
        /*padding: 0.81rem 1.13rem 0.63rem;*/
        /*padding: 0.81rem 1.13rem 0.01rem;*/
        padding-top: 0.81rem;
        padding-bottom: 0.01rem;
        /*background-color: rgb(196, 196, 196);*/
        background-color: white;
        border-radius: 0.38rem;
    }


    .mul-row-content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        /*height: 100%;*/
        /*height: 300px;*/
        /*height: 200px;*/
    }


    .top-icon {

        /*width: 30px;*/
        /*height: 30px;*/
        width: 20px;
        height: 20px;
    }

    .top-bar {
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 10px;
        background: white;
        display: flex;
        justify-content: space-between;
    }
</style>
