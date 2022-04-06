<template>
    <div>
        <!-- 弹出层 -->
        <div class="CustomPopup-click-box" :class="{'CustomPopup':showCustomPopup}" @click="maskClick"></div>
        <div class="CustomPopupContent " :class="{'CustomPopupContentShow':showCustomPopup}">
            <slot name="PoperContent"></slot>
<!--            <HelloWorld></HelloWorld>-->
<!--            <slot name="icon"></slot>-->
<!--            这里是个占位符-->
        </div>
        <div class="bottom"  @click="showCustom"></div>
    </div>
</template>

<script>
    // https://blog.csdn.net/caoyh_demo/article/details/116274957
    // 因为可以复用的 所以 slot
    import HelloWorld from "@/components/HelloWorld.vue"
    export default {
        data() {
            return {
                showCustomPopup: false,
            };
        },
        components:{
            HelloWorld
        },
        methods: {
            showCustom() {
                this.showCustomPopup = true;
            },
            maskClick() {
                console.log("maskClick")
                this.showCustomPopup = false;
                console.log( "this.showCustomPopup")
                console.log( this.showCustomPopup)
            }
        }
    }
</script>

<style scoped>
    .bottom{
        background: #a930ff;
        width: 300px;
        height: 300px;
    }
    .CustomPopup-click-box{
        width: 300px;
        height: 300px;
        background: #ff6f2b;
    }
    .CustomPopup {
        height: 100%;
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
    }

    .CustomPopupContent {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        transition: all 0.3s ease;
        transform: translateY(100%);
        z-index: 3000;
        background: #90ff76;
        height: 200px;
    }

    .CustomPopupContentShow {
        transform: translateY(0);
    }
</style>

