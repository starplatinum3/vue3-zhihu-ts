<template>
<div class="flex-col page">
    <div class="flex-col">
        <!-- flex-row  -->
        <div class="equal-division two-item">
            <div class="equal-division-item justify-center carefully-chosen">
                <div class="left-section ">
                    <i class="chart grid-item-book icon iconfont icon-ribao"></i>
                </div>

                <div class="right-section-carefully-chosen">日报精选</div>
            </div>
            <!-- section_2 -->
            <div class="equal-division-item justify-center in-must-watch ">
                <div class="left-section">
                    <i class="chart grid-item-book icon iconfont icon-thumbup"></i>
                </div>
                <div class="right-section">进站必看</div>
            </div>
        </div>
        <div class="flex-col group-list">
<!--            <div class="flex-col items-start section_3">-->
            <div class="flex-row items-start hot-point-line">
<!--                国务院表示要足量发放-->

                <div class="new-icon">
                    新
<!--                <div class="new-circle">-->
<!--                    新-->
<!--                </div>-->
                </div>
                <div class=" hot-point-line-text">
                国务院表示要足量发放
                </div>
            </div>
            <!-- <hr> -->
            <!-- <div class="line"></div> -->
<!--            <div class="top-10">-->
<!--                <ul>-->
<!--                    <li><a>测试用-青岛XX公司01</a></li>-->
<!--                    <li><a>测试用-青岛XX公司02</a></li>-->
<!--                    <li><a>测试用-青岛XX公司03</a></li>-->
<!--                    <li><a>测试用-青岛XX公司04</a></li>-->
<!--                    <li><a>测试用-青岛XX公司05</a></li>-->
<!--                    <li><a>测试用-青岛XX公司06</a></li>-->
<!--                    <li><a>测试用-青岛XX公司07</a></li>-->
<!--                    <li><a>测试用-青岛XX公司08</a></li>-->
<!--                    <li><a>测试用-青岛XX公司09</a></li>-->
<!--                    <li><a>测试用-青岛XX公司10</a></li>-->
<!--                </ul>-->
<!--                <div id="rank-more">-->
<!--                    <span class="span-h7"><a href="#">查看更多</a></span>-->
<!--                </div>-->



<!--            </div>-->
<!--            ————————————————-->
<!--            版权声明：本文为CSDN博主「千世丶希」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。-->
<!--            原文链接：https://blog.csdn.net/qq_37135944/article/details/84323542-->

<!--            <div class="flex-col section_5">-->
<!--                <div class="flex-row group_2">-->
<!--                    <div class="section_6"></div>-->
<!--                    <div class="section_7"></div>-->
<!--                    <img-->
<!--                            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480204516219340275.png"-->
<!--                            class="image"-->
<!--                    />-->
<!--                </div>-->
<!--                <div class="section_8"></div>-->
<!--            </div>-->
            <!-- <HotItem :hotItem="{}"></HotItem> -->
             <!-- <HotItem :key="hotItem.id" v-for="hotItem in hotList"  :hotItem="hotItem"></HotItem> -->
              <HotItem :key="hotItem.id" v-for="hotItem in hotList"  :hotItem="hotItem"></HotItem>
             <!-- <HotItem :hotItem="hotItem"></HotItem>
            <HotItem></HotItem>
            <HotItem></HotItem>
            <HotItem></HotItem>
            <HotItem></HotItem>
            <HotItem></HotItem>
            <HotItem></HotItem>
            <HotItem></HotItem> -->

        </div>
    </div>

<!--    <div class="section_9"></div>-->
</div>

</template>

<script>
    import HotItem from "@/components/HotItem.vue"
    import ObjUtil from "@/utils/ObjUtil"
    // import HotItem from "@/components/Me.vue"
    export default {
        name:"hot-list",
        components: {
            HotItem,
        },
        data() {
            let hotList=[]
            let hotItem= {
                    id:1,
             
               content: `接下来说如何改变大小？
                直接在.icon里面添加一个样式font-size就行了
                改变svg的颜色？
                svg是通过path里面的fill来改变颜色的，如果这个图标本身是没有颜色的，那么在.icon这个类里面把fill:red,就行了，但是如果这个图标原本就是有颜色的，那么这么改就起不到作用了，就要改iconfont.js里面的path，它是一个个对应下来的，只要改了fill里面的颜色，那么图标的颜色就对应的改了

                ————————————————
                版权声明：本文为CSDN博主「cjq4218」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
                原文链接：https://blog.csdn.net/qq_36641107/article/details/79433016`,
      number: 1,
      hot_num: "111万",
      tag: "品牌湛轩",
      img:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480204516219340275.png"
            }
            // ObjUtil
            for(let i=0;i<6;i++){
                let  hotItemClone={}
            //   let  hotItemClone= ObjUtil.copy(hotItem,hotItemClone)
              hotItemClone= ObjUtil.copy(hotItem,hotItemClone)
            //   let hotItemClone=  hotItem.clone()
              hotItemClone.id=i
                hotList.push(hotItemClone)
            }
            return { listVHC6CKGW: [null, null, null],
            hotItem:{
                
            },
            hotList:hotList
             };
        },
    };
</script>

<style scoped>

.hot-point-line-text{
    /* margin-top: 1px; */
     margin-top: 2px;
}
.hot-point-line{
    margin-top: 1px;
    margin-bottom: 1px;
}
    .new-circle{
        border-radius: 50%;
        border: 2px;
        border-color: yellow;
        width: 20px;
        height: 20px;
    }
    /*<!-- div 大小设定 -->*/
    .top-10 {
        float: left;
        width: 340px;

        margin-top: 106px;
        margin-left: 118px;
        background: #fff;
        border: 1px solid #FFF;
        box-shadow: #d0d0d0 1px 1px 10px 0px;
    }

    .top-10 ul {
        counter-reset: section;
    }

    .top-10 li {
        float: left;
        width: 260px;
        border-bottom: 1px solid #b8c2cc;
        line-height: 46px;
        height: 46px;
        overflow: hidden;
        color: #525C66;
        font-size: 14px;

    }

    .top-10 li:before {
        counter-increment: section;
        content: counter(section);
        display: inline-block;
        padding: 0 12px;
        margin-right: 10px;
        height: 18px;
        line-height: 18px;
        background: #b8c2cc;
        color: #fff;
        border-radius: 3px;
        font-size: 9px
    }
    /*<!-- 排名前三名颜色控制 -->*/
    .top-10 li:nth-child(1):before {
        background: #0164b4
    }

    .top-10 li:nth-child(2):before {
        background: #0164b4
    }

    .top-10 li:nth-child(3):before {
        background: #0164b4
    }
    /*————————————————*/
    /*版权声明：本文为CSDN博主「千世丶希」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。*/
    /*                                   原文链接：https://blog.csdn.net/qq_37135944/article/details/84323542*/

    .equal-division-item {
        /* flex: 1 1 9.94rem; */
        /*padding-top: 1rem;*/
        /*padding-top: 0.5rem;*/
        padding-top: 0.8rem;
        /* padding-left: 1rem; */
        /* padding-left: 20px; */
        /*padding: 0.31rem 1.63rem 0.5rem;*/
        /*background-color: rgb(196, 196, 196);*/
        background-color: #C7F5EA;
        /*height: 1.81rem;*/
        height: 2.81rem;
        /* width: 200px; */
         width: 150px;
    }
    .left-section {
        margin-top: 2px;
        /* margin-top: 4px; */
        /*background-color: rgb(187, 46, 46);*/
        width: 1.06rem;
        height: 1rem;
    }
    .right-section {
        margin-left: 0.69rem;
        color: #3F7F6E;
        /*background-color: rgb(105, 27, 27);*/
        width: 4.25rem;
        height: 0.94rem;
    }
    .carefully-chosen{
        /*这样写是可以拿到的*/
        /*background: url("@/assets/air.jpg");*/
        /*background:deepskyblue;*/
        background-color:  #D4F2FC;
    }
    .right-section-carefully-chosen {
        vertical-align: top;
        color: #3662A1;
        /* margin-left: 0.69rem; */
         /* margin-left: 20px; */
          margin-left: 10px; 
        /*color: #4d46ff;*/
        /*color: #D4F2FC;*/
        /*background-color: rgb(105, 27, 27);*/
        /*background-color:  #D4F2FC;*/
        width: 4.25rem;
        /* height: 0.94rem; */
        /* height: 300px; */
        /* height: 40px; */
           height: 20px;
    }

    .page {
        padding: 1.5rem 0.88rem 26.94rem;
        background-color: rgb(255, 255, 255);
        width: 100%;
        overflow-y: auto;
        height: 100%;
    }
    .section_9 {
        margin: 4.44rem 1rem 0 0.69rem;
        background-color: rgb(196, 196, 196);
        height: 6.56rem;
    }
    .equal-division {
        /* 这里删除没有用处吗 他的 margin 还是有啊 */
        /* margin-right: 1rem; */
    }
    .group-list {
        margin-top: 0.38rem;
    }
    .in-must-watch{
          /* margin-left: 300px; */
           /* margin-left: 100px; */
             /* justify-content: stretch;   */
             /* margin-left: 20px; */
              /* margin-left: 30px; */
                /* margin-left: 40px; */
                    /* margin-left: 60px; */
                       /* margin-left: 80px; */
                         /* margin-left: 70px; */
                            /* margin-left: 65px; */
                               /* margin-left: 50px; */
                                 margin-left: 20px;
    }
    .section_2 {
        margin-left: 0.75rem;
    }
    .hot-point-line {
        margin-right: 1rem;
        padding: 0.19rem 0;
        /*background-color: rgb(196, 196, 196);*/
    }
    .section_5 {
        margin-right: 1rem;
        margin-top: 0.19rem;
        padding: 0 0.44rem 0.44rem;
        background-color: rgb(213, 204, 204);
    }
    .new-icon {
        margin-right: 10px;
        margin-left: 0.31rem;
        /*background-color: rgb(141, 29, 193);*/
        width: 1.69rem;
        height: 1.69rem;
        /*height: 0.75rem;*/
        background: #ff9854;
        border-radius: 50%;
        /*border: 2px yellow;*/
        /*没有solid 就不显示*/
        /*https://www.php.cn/css-tutorial-473649.html*/
        /*border: 10px yellow solid;*/
        border: 1px yellow solid;
        font-size: 60%;
        align-items: center;
        /*line-height: 0.84rem;*/
        line-height: 1.69rem;
    }
    .group_2 {
        padding: 0.69rem 0 0.63rem;
    }
    .section_8 {
        margin-left: 1.25rem;
        background-color: rgb(196, 196, 196);
        width: 5.69rem;
        height: 1rem;
    }
    .section_6 {
        background-color: rgb(196, 196, 196);
        width: 0.75rem;
        height: 0.88rem;
    }
    .section_7 {
        margin-left: 0.5rem;
        flex: 1 1 auto;
        background-color: rgb(196, 196, 196);
        width: 12.5rem;
        height: 5.06rem;
    }
    .image {
        margin-left: 1.06rem;
        margin-right: 0.56rem;
        align-self: center;
        border-radius: 0.25rem;
        width: 4.44rem;
        height: 4.19rem;
    }

    .two-item{
        display: flex;
        /* flex-direction: be; */
          justify-content: space-between;
           /* justify-content:  space-around; */
           /* justify-content: space-evenly; */
           /* justify-content: stretch;   */

    }
</style>
