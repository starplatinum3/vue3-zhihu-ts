<template>
<div class="flex-col page">
    <div class="flex-col">
        <div class="flex-row equal-division">
            <div class="equal-division-item justify-center carefully-chosen">
                <div class="left-section"></div>
                <div class="right-section-carefully-chosen">日报精选</div>
            </div>
            <div class="equal-division-item justify-center section_2">
                <div class="left-section"></div>
                <div class="right-section">进站必看</div>
            </div>
        </div>
        <div class="flex-col group_1">
            <div class="flex-col items-start section_3">
<!--                国务院表示要足量发放-->
                <div class="new-icon"></div>
                国务院表示要足量发放
            </div>
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
            <HotItem></HotItem>
        </div>
    </div>

    <div class="section_9"></div>
</div>

</template>

<script>
    import HotItem from "@/components/HotItem.vue"
    // import HotItem from "@/components/Me.vue"
    export default {
        name:"hot-list",
        components: {
            HotItem,
        },
        data() {
            return { listVHC6CKGW: [null, null, null] };
        },
    };
</script>

<style>
    .equal-division-item {
        flex: 1 1 9.94rem;
        padding: 0.31rem 1.63rem 0.5rem;
        background-color: rgb(196, 196, 196);
        height: 1.81rem;
    }
    .left-section {
        background-color: rgb(187, 46, 46);
        width: 1.06rem;
        height: 1rem;
    }
    .right-section {
        margin-left: 0.69rem;
        background-color: rgb(105, 27, 27);
        width: 4.25rem;
        height: 0.94rem;
    }
    .carefully-chosen{
        /*这样写是可以拿到的*/
        /*background: url("@/assets/air.jpg");*/
        background:deepskyblue;
    }
    .right-section-carefully-chosen {
        margin-left: 0.69rem;
        color: #4d46ff;
        background-color: rgb(105, 27, 27);
        width: 4.25rem;
        height: 0.94rem;
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
        padding: 0 0.44rem 0.44rem;
        background-color: rgb(213, 204, 204);
    }
    .new-icon {
        margin-left: 0.31rem;
        background-color: rgb(141, 29, 193);
        width: 1.69rem;
        height: 0.75rem;
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
</style>
