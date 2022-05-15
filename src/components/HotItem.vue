<template>
    <div class="flex-col main-box">
        <div class="flex-row group-hot-list">
            <div class="number">1</div>
            <div class="content-hot-list line-limit-length">接下来说如何改变大小？
                直接在.icon里面添加一个样式font-size就行了
                改变svg的颜色？
                svg是通过path里面的fill来改变颜色的，如果这个图标本身是没有颜色的，那么在.icon这个类里面把fill:red,就行了，但是如果这个图标原本就是有颜色的，那么这么改就起不到作用了，就要改iconfont.js里面的path，它是一个个对应下来的，只要改了fill里面的颜色，那么图标的颜色就对应的改了

                ————————————————
                版权声明：本文为CSDN博主「cjq4218」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
                原文链接：https://blog.csdn.net/qq_36641107/article/details/79433016</div>
            <img
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480204516219340275.png"
                    class="image"
            />
        </div>
        <div class="flex-row">
        <div class="hot-num">111万热度</div>
        <div class="tag-box">品牌湛轩</div>
        </div>
    </div>
</template>

<script></script>

<style>

    .line-limit-length {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        /*-webkit-line-clamp: 3;*/
        -webkit-box-orient: vertical;
        /*————————————————*/
        /*        版权声明：本文为CSDN博主「qq_39920109前端小菜鸟」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。*/
        /*原文链接：https://blog.csdn.net/qq_39920109/article/details/90257752*/

        /*-webkit-line-clamp: 3;*/
        /*-webkit-box-orient: vertical;*/
        /*overflow: hidden;*/
        /*text-overflow: ellipsis;*/
        /*white-space: nowrap;*/
    /*//文本不换行，这样超出一行的部分被截取，显示...*/

    }
    .equal-division-item {
        flex: 1 1 9.94rem;
        padding: 0.31rem 1.63rem 0.5rem;
        background-color: rgb(196, 196, 196);
        height: 1.81rem;
    }
    /*.left-section {*/
    /*    background-color: rgb(187, 46, 46);*/
    /*    width: 1.06rem;*/
    /*    height: 1rem;*/
    /*}*/
    /*.right-section {*/
    /*    margin-left: 0.69rem;*/
    /*    !*background-color: rgb(105, 27, 27);*!*/
    /*    width: 4.25rem;*/
    /*    height: 0.94rem;*/
    /*}*/
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
        margin-right: 1rem;
    }
    .group_1 {
        margin-top: 0.38rem;
    }
    .section_2 {
        margin-left: 0.75rem;
    }
    .section_3 {
        margin-right: 1rem;
        padding: 0.19rem 0;
        background-color: rgb(196, 196, 196);
    }
    .section_5 {
        margin-right: 1rem;
        margin-top: 0.19rem;
        /*padding: 0 0.44rem 0.44rem;*/
        padding: 0 0.44rem 0.02rem;
        background-color: rgb(213, 204, 204);
    }
    .main-box {
        /*margin-right: 1rem;*/
        margin-top: 0.19rem;
        /*padding: 0 0.44rem 0.44rem;*/
        padding: 0 0.44rem 0.02rem;
        /*background-color: rgb(213, 204, 204);*/
    }
    .new-icon {
        margin-left: 0.31rem;
        background-color: rgb(141, 29, 193);
        width: 1.69rem;
        height: 0.75rem;
    }
    .group-hot-list {
        padding: 0.69rem 0 0.63rem;
    }
    .section_8 {
        margin-left: 1.25rem;
        background-color: rgb(196, 196, 196);
        width: 5.69rem;
        height: 1rem;
    }
    .tag-box{
        /*border-radius: 20%;*/
        /*border-radius: 10px;*/
        border-radius: 3px;
        color: #999999;
        font-size: 50%;
        margin-left: 1.25rem;
        /*background-color: rgb(196, 196, 196);*/
        width: 5.69rem;
        height: 1rem;
    }
    .hot-num {
        color: #999999;
        font-size: 50%;
        margin-left: 1.25rem;
        /*background-color: rgb(196, 196, 196);*/
        width: 5.69rem;
        height: 1rem;
    }
    /*.number:before{*/
    /*    counter-increment: section;*/
    /*    content: counter(section);*/
    /*    display: inline-block;*/
    /*    padding: 0 12px;*/
    /*    margin-right: 10px;*/
    /*    height: 18px;*/
    /*    line-height: 18px;*/
    /*    background: #b8c2cc;*/
    /*    color: #fff;*/
    /*    border-radius: 3px;*/
    /*    font-size: 9px*/
    /*}*/
    .number{
        counter-increment: section;
        content: counter(section);
        display: inline-block;
        padding: 0 12px;
        /*margin-right: 10px;*/
        margin-right: 5px;
        height: 18px;
        line-height: 18px;
        /*background: #b8c2cc;*/
        background: red;
        color: #fff;
        border-radius: 3px;
        font-size: 9px

        /*background-color: rgb(196, 196, 196);*/
        /*width: 0.75rem;*/
        /*height: 0.88rem;*/
    }
    .section_6 {
        background-color: rgb(196, 196, 196);
        width: 0.75rem;
        height: 0.88rem;
    }
    .content-hot-list {
        /*margin-left: 0.5rem;*/
        /*align-items: f*/
        text-align: left;
        flex: 1 1 auto;
        /*background-color: rgb(196, 196, 196);*/
        width: 12.5rem;
        height: 5.06rem;
    }
    /*.content:before{*/
    /*    counter-increment: section;*/
    /*    content: counter(section);*/
    /*    display: inline-block;*/
    /*    padding: 0 12px;*/
    /*    margin-right: 10px;*/
    /*    height: 18px;*/
    /*    line-height: 18px;*/
    /*    background: #b8c2cc;*/
    /*    color: #fff;*/
    /*    border-radius: 3px;*/
    /*    font-size: 9px*/
    /*}*/


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
</style>
