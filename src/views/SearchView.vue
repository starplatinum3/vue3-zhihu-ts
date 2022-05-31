<template >

    历史搜索
    <div class="history" v-show="searchSongs.length == 0">
        <div class="historyLeft">历史</div>
        <div class="historyRight">
            <div
                    @click="historySearch(item)"
                    class="keywordItem"
                    v-for="(item, i) in keywordList"
                    :key="i"
            >
                {{ item }}
            </div>
        </div>
    </div>


</template>
<!--vue 3 ts -->
<!--<script lang>-->
<!--    export default {-->
<!--        data() {-->
<!--            return {};-->
<!--        },-->
<!--    };-->
<!--</script>-->


<script lang="ts">
    // private keywordSubordinate = "";
    //
    // @Watch("keywordSubordinate")
    //
    // onkeywordSubordinateChanged(newVal: string, oldVal: string) {
    //
    //     if (!newVal || newVal === "") {   //当输入框为空时
    //
    //         this.querySubordinateList();
    //
    //     }
    //
    // }
    //
    // private querySubordinateList() {
    //
    // }


    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'HelloWorld',
        props: {
            msg: String,
        },
        setup() {
            let keywordList=[3,3424,1,2,4,4]
            let searchSongs=[3,3424,1,2,4,4]

            return {
                searchKeyword: "",
                searchSongs:searchSongs,
                keywordList: keywordList,
            };
        }
    });
</script>


<style scoped lang="less">

    .history {
        display: flex;
        margin-top: 1.2rem;
    .historyLeft {
        width: 1.2rem;
        height: 0.6rem;
        font-weight: 900;
        margin: 0.2rem 0rem;
        line-height: 0.6rem;
    }
    .historyRight {
        color: #666;
        display: flex;
        flex-wrap: wrap;
        flex: 1;
    .keywordItem {
        background-color: #eee;
        height: 0.6rem;
        padding: 0 0.2rem;
        border-radius: 0.4rem;
        line-height: 0.6rem;
        /*居中*/
        margin: 0.2rem 0.1rem;
    }
    }
    }

    .whole {
        /*background:   #F4F4F4;*/
        /*background-color:   #F4F4F4;*/
        background-color: #F6F6F6;
    }
    .play-cnt{
        /*font: bold;*/
        font-weight:bold;
    }
    .today-play{
        /*height: ;*/
        margin-top: 10px;
        width: 50%;
        /*background: #48ff52;*/
    }
    .today-agree{
        margin-top: 10px;
        width: 50%;
        /*background: #48ff52;*/
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

    .draft{

        color: #B9B9B9;
    }
    .grid-item-book-text{
        /*margin-top: 10px;*/
        margin-top: 5px;
    }
    .grid-item-book{
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
        /*background-color: rgb(255, 255, 255);*/
        background-color: #F6F6F6;
        width: 100%;
        overflow-y: auto;
        height: 100%;
    }

    .me-info-box {
        /*padding-top:1.38rem ;*/
        /*padding-top:1.38rem ;*/
        /*上右下左*/
        /*padding: 1.38rem 1rem 0.81rem 1.56rem;*/
        /*padding: 1.08rem 1rem 0.81rem 1.06rem;*/
        /*background-color: rgb(196, 196, 196);*/
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 1rem;
        background-color: white;
    }

    .create-box {
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

    .buy-it-box {
       /*bak #FCEAD6;*/
        margin-top: 0.81rem;
        padding: 0.31rem 1rem 0.5rem 1.13rem;
        /*background-color: rgb(196, 196, 196);*/
        background-color:  #FCEAD6;
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
        /*margin-top: 0.31rem;*/
        margin-top: 0.61rem;
        padding: 0 1rem 0.63rem 1.13rem;
        /*background-color: rgb(196, 196, 196);*/
        background-color: white;
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

    /*右箭头*/
    .right-arrow {
        display :inline-block;
        position: relative;
        width: 28px;
        height: 28px;
        margin-right: 20px;
    }
    .right-arrow::after {
        display: inline-block;
        content: " ";
        height: 13px;
        width: 13px;
        border-width: 3px 3px 0 0;
        border-color: #0177ff;
        border-style: solid;
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: absolute;
        top: 50%;
        left: 150px;
    }


    .to-me-home {
        /*margin-left: 1.06rem;*/
        /*margin-left: 2.06rem;*/
        margin-left: 4.06rem;
        /*background-color: rgb(207, 50, 50);*/
        /*width: 4.63rem;*/
        /*height: 1.88rem;*/
    }

    .create-part {
        /*font-size: 60%;*/
        /*font-size: 0%;*/
        /*background-color: rgb(52, 79, 175);*/
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

    /*https://blog.csdn.net/sinat_33255495/article/details/108616539*/
    .buy-btn {
        /*border-radius: 50%;*/
        /*border-radius: 20%;*/
        /*border-radius: 30%;*/
        background: linear-gradient(161.46deg,#fde2c2 16.41%,#c19164);
        align-self: center;
        /*background-color: rgb(195, 42, 42);*/
        /*width: 4.88rem;*/
        width: 5.38rem;
        height: 2.25rem;
        align-content: center;
        /*垂直 居中*/
        /*transform:translateY(-50%);*/
        vertical-align: middle;
        line-height:2.25rem;
        /*好使*/
        border-radius:  1.12rem;
    }

    .book-item {
        margin-left: 1.25rem;
        /*background-color: rgb(184, 26, 26);*/
        width: 3.5rem;
        height: 3.5rem;
    }

    .group_3 {
        padding: 0.56rem 0 0.31rem;
    }

    .content-items-box {
        margin-top: 10px;
        margin-left: 0.25rem;
        /*background-color: rgb(170, 24, 24);*/
        height: 5rem;
    }

    .today-statis {
        /*border: #999999 1px solid;*/
        border: #e2e2e2 1px solid;
        justify-content: space-between;
        margin-left: 0.44rem;
        margin-top: 0.31rem;
        padding: 0.063rem 0 0.75rem;
        /*background-color: rgb(184, 31, 31);*/
        border-radius: 0.31rem;
    }

    .image {
        margin-left: 0.19rem;
        width: 3rem;
        height: 2.75rem;
    }

    .avatar_img {
        border-radius: 50%;
        width: 3.88rem;
        height: 3.75rem;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
    }

    .watch-cnt{
        font-weight: bold;
    }

    .nickname-me {
        /*margin-top: 0.2rem;*/
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
        text-align: left;
        /*background-color: rgb(211, 34, 34);*/
        height: 1.75rem;
    }

    .salt-cnt {
        /*margin-left: 0.44rem;*/
        text-align: left;
        margin-top: 0.63rem;
        /*background-color: rgb(162, 161, 168);*/
        /*width: 6.38rem;*/
        height: 1.19rem;
    }

    .buy-name {
      /*color:   #EBD2A9;*/
      color: #78501D;
        /*background-color: rgb(190, 43, 43);*/
        height: 1.5rem;
    }

    .buy-discount {
        /*margin: 0.63rem 0.38rem 0 0.31rem;*/
        /*background-color: rgb(190, 43, 43);*/
        color: #BD9A62;
        height: 1.69rem;
    }

    .section_2 {
        background-color: rgb(137, 118, 118);
        width: 0.063rem;
        height: 0.88rem;
    }

    .create-level {
        /*background-color: rgb(214, 41, 41);*/
        width: 4.31rem;
        height: 1.38rem;
        /*border: #999999;*/
        /*height: ;*/
        font-weight:bold;

    }

    .level-cnt {
        /*margin-left: 0.94rem;*/
        /*background-color: rgb(212, 40, 40);*/
        color: #3D7BC6;
        /*width: 3.56rem;*/
        /*height: 1.38rem;*/
        margin-top: 2px;
    }

    .QR-code-wapper{

        /*width: 30px;*/
        /*height: 30px;*/
        width: 20px;
        height: 20px;
    }
    .top-bar-wrapper{
        background-color: white;
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
        /*background-color: rgb(182, 41, 41);*/
        /*width: 3.31rem;*/
        /*height: 1.31rem;*/
    }

    .go-into-arrow {
        margin-left: 0.69rem;
        margin-top: 0.13rem;
        /*background-color: rgb(168, 28, 28);*/
        /*width: 2.13rem;*/
        /*height: 1.19rem;*/
    }
</style>
