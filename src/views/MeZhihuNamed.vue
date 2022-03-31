<template>

    <van-sticky >
        <div class="flex-row top-bar">
        <div class="QR-code-wapper" style="background:#ff523c;">
            <img class="QR-code" src="@/assets/miku.jpg">
        </div>
        <van-search type="primary"></van-search>
            <div>
                <img class="QR-code" src="@/assets/miku.jpg">
            </div>
            <div>
                <img class="QR-code" src="@/assets/miku.jpg">
            </div>
        </div>
    </van-sticky>
    <div class="flex-col page">
        <div class="flex-row me-info-box">
            <div class="flex-col items-start group">
                <!--                <img-->
                <!--                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480226731932904499.png"-->
                <!--                        class="image"-->
                <!--                />-->
                <img
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480289040620794970.png"
                        class="avatar_img"
                />
            </div>
            <div class="flex-col group_1">
                <div class="nickname-me">求你了</div>
                <div class="salt-cnt">10000的研制</div>
            </div>
            <div class="to-me-home">个人主页</div>
        </div>
        <div class="flex-row create-box">


            <div class="create-part">
                <div>222</div>
                <div>创作</div>
                <div>14个草稿</div>
            </div>
            <div class="create-part">
                <div>222</div>
                <div>创作</div>
                <div>14个草稿</div>
            </div>
            <div class="create-part">
                <div>222</div>
                <div>创作</div>
                <div>14个草稿</div>
            </div>
            <div class="create-part">
                <div>222</div>
                <div>创作</div>
                <div>14个草稿</div>
            </div>

            <!--            <div class="section_1"></div>-->
        </div>
        <div class="justify-between buy-it-box">
            <div class="flex-col group_2">
                <div class="buy-name">盐选会员三周年</div>
                <div class="buy-discount">年卡立减￥140元</div>
            </div>
            <div class="buy-btn">立即购买</div>
        </div>
        <!--        items-start-->
        <!--        justify-between-->
        <!--        <div class="grid-container">-->
        <!--            <div class="grid-item">1</div>-->
        <!--            <div class="grid-item">2</div>-->
        <!--            <div class="grid-item">3</div>-->
        <!--            <div class="grid-item">4</div>-->
        <!--            <div class="grid-item">5</div>-->
        <!--            <div class="grid-item">6</div>-->
        <!--            <div class="grid-item">7</div>-->
        <!--            <div class="grid-item">8</div>-->
        <!--            <div class="grid-item">9</div>-->
        <!--        </div>-->
<!--        flex-row-->

        <div class="mul-row-content create-box" >
<!--            <div class="chart"></div>-->
<!--            <div class="chart"></div>-->
<!--            <div class="chart"></div>-->
<!--            <div class="chart"></div>-->
<!--            <div class="chart"></div>-->
<!--            <div class="chart"></div>-->
            <div v-for="i in 8" class="chart" :key="i">
<!--                {{i}}-->
<!--                <div>啊啊</div>-->
                <img class="grid-item-book" src="@/assets/miku.jpg">
                <div>啊啊</div>
            </div>
        </div>

<!--        <div class="flex-col create-box">-->


<!--            <div class="flex-row line1">-->
<!--            <div class="create-part">-->
<!--                <div>222</div>-->
<!--                <div>创作</div>-->
<!--                <div>14个草稿</div>-->
<!--            </div>-->
<!--            <div class="create-part">-->
<!--                <div>222</div>-->
<!--                <div>创作</div>-->
<!--                <div>14个草稿</div>-->
<!--            </div>-->
<!--            <div class="create-part">-->
<!--                <div>222</div>-->
<!--                <div>创作</div>-->
<!--                <div>14个草稿</div>-->
<!--            </div>-->
<!--            <div class="create-part">-->
<!--                <div>222</div>-->
<!--                <div>创作</div>-->
<!--                <div>14个草稿</div>-->
<!--            </div>-->
<!--            </div>-->

<!--            <div class="flex-row">-->
<!--                <div class="create-part">-->
<!--                    <div>222</div>-->
<!--                    <div>创作</div>-->
<!--                    <div>14个草稿</div>-->
<!--                </div>-->
<!--                <div class="create-part">-->
<!--                    <div>222</div>-->
<!--                    <div>创作</div>-->
<!--                    <div>14个草稿</div>-->
<!--                </div>-->
<!--                <div class="create-part">-->
<!--                    <div>222</div>-->
<!--                    <div>创作</div>-->
<!--                    <div>14个草稿</div>-->
<!--                </div>-->
<!--                <div class="create-part">-->
<!--                    <div>222</div>-->
<!--                    <div>创作</div>-->
<!--                    <div>14个草稿</div>-->
<!--                </div>-->
<!--            </div>-->

<!--            &lt;!&ndash;            <div class="section_1"></div>&ndash;&gt;-->
<!--        </div>-->

<!--        <div class="flex-col  book-box grid-container">-->
<!--&lt;!&ndash;            <div class="book-box-inside">&ndash;&gt;-->
<!--                <div class="flex-row line1">-->
<!--                    <div class="book-item"></div>-->
<!--                    <div class="book-item"></div>-->
<!--                    <div class="book-item"></div>-->
<!--                    <div class="book-item"></div>-->
<!--                </div>-->

<!--                <div class="flex-row line2">-->
<!--                    <div class="book-item"></div>-->
<!--                    <div class="book-item"></div>-->
<!--                    <div class="book-item"></div>-->
<!--                    <div class="book-item"></div>-->
<!--                </div>-->
<!--                &lt;!&ndash;            <div class="grid-item">1</div>&ndash;&gt;-->
<!--                &lt;!&ndash;            <div class="grid-item">2</div>&ndash;&gt;-->
<!--                &lt;!&ndash;            <div class="grid-item">3</div>&ndash;&gt;-->
<!--                &lt;!&ndash;            <div class="grid-item">4</div>&ndash;&gt;-->
<!--                &lt;!&ndash;            <div class="grid-item">5</div>&ndash;&gt;-->
<!--                &lt;!&ndash;            <div class="grid-item">6</div>&ndash;&gt;-->
<!--                &lt;!&ndash;            <div class="grid-item">7</div>&ndash;&gt;-->
<!--                &lt;!&ndash;            <div class="grid-item">8</div>&ndash;&gt;-->
<!--                &lt;!&ndash;            <div class="grid-item">9</div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--        </div>-->
        <div class="flex-col create-level-box">
            <div class="justify-between group_3">
                <div class="flex-row">
                    <div class="create-level">创作中心</div>
                    <div class="level-cnt">LV4</div>
                </div>
                <div class="flex-row">
                    <div class="go-into">进入</div>
                    <div class="go-into-arrow"> > </div>
                </div>
            </div>
            <div class="content-items-box create-center-box">

                <div class="create-part">
                    <div>222</div>
                    <div>创作</div>
                    <div>14个草稿</div>
                </div>
                <div class="create-part">
                    <div>222</div>
                    <div>创作</div>
                    <div>14个草稿</div>
                </div>
                <div class="create-part">
                    <div>222</div>
                    <div>创作</div>
                    <div>14个草稿</div>
                </div>
                <div class="create-part">
                    <div>222</div>
                    <div>创作</div>
                    <div>14个草稿</div>
                </div>

            </div>
<!--            <div class="flex-col items-center today-statis">-->
            <div class="flex-row items-center today-statis">
                <div class="flex-col today-play">
                    <div>222</div>
                    <div>今日播放</div>
                </div>

<!--                <div class="section_2"></div>-->
                <div class="flex-col today-agree">
                    <div>222</div>
                    <div>今日播放</div>
                </div>
            </div>
        </div>
    </div>
    <!--        </div>-->
</template>

<script>
    export default {
        data() {
            return {};
        },
    };
</script>

<style scoped lang="css">

    .today-play{
        width: 50%;
        background: #48ff52;
    }
    .today-agree{
        width: 50%;
        background: #48ff52;
    }
    .create-center-box{
        display: flex;
        justify-content: space-between;
    }

    .mul-row-content{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        /*height: 100%;*/
        /*height: 300px;*/
        height: 200px;
    }

    .grid-item-book{
        margin-top: 20px;
        width: 40px;
        height: 40px;
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

    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        background-color: #2196F3;
        padding: 10px;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
    }

    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        /*font-size: 30px;*/
        font-size: 10px;
        text-align: center;
    }

    .line1 {
        /*width: 400px;*/
        /*width: 100%;*/
        /*width: 80%;*/
        width: 90%;
        /*display: flex;*/
        /*justify-content: space-between;*/

        display: flex;
        justify-content: space-between;
        /*margin-top: 0.75rem;*/
        /*padding: 0.81rem 1.13rem 0.63rem;*/
        /*padding: 0.3rem 1.13rem 0.3rem;*/
        /*padding: 0.3rem 0.13rem 0.3rem;*/
        padding: 0.3rem 0.05rem 0.3rem;
        /*padding: 0.05rem 0.05rem 0.05rem;*/
        background-color: rgb(196, 196, 196);
        border-radius: 0.38rem;
    }

    .line2 {
        /*width: 400px;*/
        /*width: 100%;*/
        /*width: 80%;*/
        width: 90%;
        /*display: flex;*/
        /*justify-content: space-between;*/

        display: flex;
        /*margin-top: 1rem;*/
        margin-top: 1.5rem;
        justify-content: space-between;
        /*margin-top: 0.75rem;*/
        /*padding: 0.81rem 1.13rem 0.63rem;*/
        /*padding: 0.3rem 1.13rem 0.3rem;*/
        /*padding: 0.3rem 0.13rem 0.3rem;*/
        /*padding: 0.3rem 0.05rem 0.3rem;*/
        /*padding: 0.5rem 0.05rem 0.3rem;*/
        padding: 0.8rem 0.05rem 0.3rem;
        /*padding: 1rem 0.05rem 0.3rem;*/
        /*padding: 1.5rem 0.05rem 0.3rem;*/
        /*padding: 0.05rem 0.05rem 0.05rem;*/
        background-color: rgb(196, 196, 196);
        border-radius: 0.38rem;
    }


    .page {
        padding: 1.25rem 0.63rem 3.88rem 0.88rem;
        background-color: rgb(255, 255, 255);
        width: 100%;
        overflow-y: auto;
        height: 100%;
    }

    .me-info-box {
        padding: 1.38rem 1rem 0.81rem 1.56rem;
        background-color: rgb(196, 196, 196);
    }

    .create-box {
        display: flex;
        justify-content: space-between;
        margin-top: 0.75rem;
        padding: 0.81rem 1.13rem 0.63rem;
        background-color: rgb(196, 196, 196);
        border-radius: 0.38rem;
    }

    .buy-it-box {
        margin-top: 0.81rem;
        padding: 0.31rem 1rem 0.5rem 1.13rem;
        background-color: rgb(196, 196, 196);
        border-radius: 0.19rem;
    }

    .book-box {
        /*display: flex;*/
        /*justify-content: space-between;*/
        /*flex-direction: row;*/
        margin-top: 0.31rem;
        /*padding: 0.38rem 0 3.81rem;*/
        /*padding: 0.38rem 0 0.38rem;*/
        padding: 0.38rem 0.5rem;
        /*padding: 0.58rem 0.5rem 3.81rem 0.5rem;*/
        background-color: rgb(196, 196, 196);
        border-radius: 0.25rem;
        /*padding: 2px;*/
    }

    .book-box-inside {

    }

    .create-level-box {
        margin-top: 0.31rem;
        padding: 0 1rem 0.63rem 1.13rem;
        background-color: rgb(196, 196, 196);
        border-radius: 0.25rem;
    }

    .group {
        padding-top: 1rem;
        width: 3.88rem;
        position: relative;
    }

    .group_1 {
        margin-left: 0.31rem;
        margin-top: 0.19rem;
        width: 8.56rem;
    }

    .to-me-home {
        margin-left: 1.06rem;
        background-color: rgb(207, 50, 50);
        width: 4.63rem;
        height: 1.88rem;
    }

    .create-part {
        font-size: 60%;
        background-color: rgb(52, 79, 175);
        width: 4.31rem;
        height: 3.13rem;
    }

    .section_1 {
        margin-left: 1.13rem;
        margin-top: 0.25rem;
        background-color: rgb(134, 123, 123);
        width: 0.063rem;
        height: 2.13rem;
    }

    .group_2 {
        width: 9.94rem;
    }

    .buy-btn {
        align-self: center;
        background-color: rgb(195, 42, 42);
        width: 4.88rem;
        height: 2.25rem;
    }

    .book-item {
        margin-left: 1.25rem;
        background-color: rgb(184, 26, 26);
        width: 3.5rem;
        height: 3.5rem;
    }

    .group_3 {
        padding: 0.56rem 0 0.31rem;
    }

    .content-items-box {
        margin-left: 0.25rem;
        background-color: rgb(170, 24, 24);
        height: 5rem;
    }

    .today-statis {
        justify-content: space-between;
        margin-left: 0.44rem;
        margin-top: 0.31rem;
        padding: 0.063rem 0 0.75rem;
        background-color: rgb(184, 31, 31);
        border-radius: 0.31rem;
    }

    .image {
        margin-left: 0.19rem;
        width: 3rem;
        height: 2.75rem;
    }

    .avatar_img {
        width: 3.88rem;
        height: 3.75rem;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
    }

    .nickname-me {
        background-color: rgb(211, 34, 34);
        height: 1.75rem;
    }

    .salt-cnt {
        margin-left: 0.44rem;
        margin-top: 0.63rem;
        background-color: rgb(162, 161, 168);
        width: 6.38rem;
        height: 1.19rem;
    }

    .buy-name {
        background-color: rgb(190, 43, 43);
        height: 1.5rem;
    }

    .buy-discount {
        margin: 0.63rem 0.38rem 0 0.31rem;
        background-color: rgb(190, 43, 43);
        height: 1.69rem;
    }

    .section_2 {
        background-color: rgb(137, 118, 118);
        width: 0.063rem;
        height: 0.88rem;
    }

    .create-level {
        background-color: rgb(214, 41, 41);
        width: 4.31rem;
        height: 1.38rem;
    }

    .level-cnt {
        margin-left: 0.94rem;
        background-color: rgb(212, 40, 40);
        width: 3.56rem;
        height: 1.38rem;
    }

    .QR-code-wapper{

        width: 30px;
        height: 30px;
    }

    .top-bar{
        background: #ffffff;
        /*padding: 1.38rem 1rem 0.81rem 1.56rem;*/
        /*padding: 1.38rem 1rem 0.81rem 0.02rem;*/
        margin-left: 10px;
        margin-right: 10px;
        /*width: 400px;*/
        align-items: center;
        justify-content: space-between;
    }
    .QR-code{
        width: 30px;
        height: 30px;
    }

    .go-into {
        background-color: rgb(182, 41, 41);
        width: 3.31rem;
        height: 1.31rem;
    }

    .go-into-arrow {
        margin-left: 0.69rem;
        margin-top: 0.13rem;
        background-color: rgb(168, 28, 28);
        width: 2.13rem;
        height: 1.19rem;
    }
</style>
