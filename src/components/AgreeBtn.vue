<template>
<!--    component-->
    <div class="oval-button ">
        <div class="button-left ">

            <div class="left-text">
                <svg t="1649599246174" class="icon agree-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3940" width="128" height="128"><path d="M573.056 272l308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z" p-id="3941"></path></svg>

                赞同 100</div>
        </div>
<!--        css 竖线-->
<!--        <hr/>-->
<!--        <vr></vr>-->
        <div class="ver-line"></div>
        <div class="button-right">
            <svg t="1649599158055" class="icon disagree-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3157" width="128" height="128"><path d="M787.2 380.8c-9.6-9.6-22.4-12.8-35.2-12.8l-480 3.2c-12.8 0-25.6 3.2-35.2 12.8-19.2 19.2-19.2 48 0 67.2l240 240c0 0 0 0 0 0 0 0 0 0 0 0 3.2 3.2 9.6 6.4 12.8 9.6 0 0 3.2 3.2 3.2 3.2 16 6.4 38.4 3.2 51.2-9.6l240-243.2C806.4 428.8 803.2 400 787.2 380.8z" p-id="3158"></path></svg>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
    };
</script>

<style scoped lang="css">
    /*.button-left{*/
    /*    margin-left: 20px;*/
    /*}*/
    .agree-icon{
        /*width: 40px;*/
        /*height: 40px;*/

        width: 30px;
        height: 30px;
        /*background: #d0d0d0;*/
        fill: #d0d0d0;
    }

    .disagree-icon{
        width: 40px;
        height: 40px;
        /*background: #d0d0d0;*/
        fill: #d0d0d0;
    }
    .button-left{
        margin-left: 30px;
        /*margin-left: 20px;*/
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .left-text{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ver-line{
        /*margin-left: 2px;*/
        margin-left: 10px;
        width: 1px;
        /*height: 2.6rem;*/
        /*height: 2.3rem;*/
        height: 2rem;
        background: #d0d0d0;
        /*height: ;*/
        /*padding-left: 2.5rem;*/
        /*margin-left: 2.5rem;*/
        /*margin-left: 3.5rem;*/
        line-height:1.15rem;
        /*display: inline-block;*/
        display: flex;
        /*align-items: center;*/
        justify-content: center;
        margin-top: 0.2rem;
    }
    .oval-button{
        justify-content: center;
        display: flex;

        /*width: 300px;*/
        /*width: 500px;*/
        /*width: 800px;*/
        /*width: 300px;*/
        /*width: 0.2rem;*/

        /*height: 200px;*/
        /*height: 100px;*/
        /*height: 0.5px;*/
        /*width: 1rem;*/
        /*height: 0.5rem;*/

        /*width: 2rem;*/
        /*height: 1rem;*/

        /*width: 6rem;*/
        /*width: 8rem;*/
        width: 10rem;
        /*height: 3rem;*/
        height: 2.6rem;
        border-radius: 1.3rem;
        /* border-radius: 20%; */
        background: #717670;
        /*border-radius: 100px;*/
        /*border-radius: 50px;*/


        /*https://www.cnblogs.com/actiondream/p/6536841.html*/
        /*border-left: 1px solid #B7D0E4;*/
        /*border-left: 1px solid #76e493;*/
        /*border-right: 1px solid #76e493;*/
        /*display: inline-block;*/
        /*margin-left: -1px;*/
        /*padding: 0px 0px 0px 3px;*/
        padding-right: 20px;
    }
    /*.button-left{*/
    /*    !*margin-left: 20px;*!*/
    /*    margin-left: 50px;*/

    /*}*/
    .top-section {
        background-color: rgb(190, 43, 43);
        height: 0.94rem;
    }
    .component {
        padding: 0.56rem 0.94rem 0.69rem 1.44rem;
        background-color: rgb(196, 196, 196);
        border-radius: 0.19rem;
    }
    .group {
        width: 7.13rem;
    }
    .section_1 {
        align-self: center;
        background-color: rgb(195, 42, 42);
        width: 3rem;
        height: 1.44rem;
    }
    .view_1 {
        margin-top: 0.69rem;
    }
</style>
