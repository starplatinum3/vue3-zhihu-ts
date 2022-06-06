<template>
    <div class="text-container">
        <transition class="inner-container2 line-limit-length" name="slide" mode="out-in">
            <p class="text2" :key="text.id">{{text.val}}</p>
        </transition>
    </div>

</template>

<script>

    export default {
        name: 'searchIndex',
        computed: {
            text() {
                // console.log("this.number")
                // console.log(this.number)
                let val=this.arr[this.number]
                // console.log("val")
                // console.log(val)
                return {

                    id: this.number,
                    val: val
                }
            }
        },

        data() {
            return {
                arr: ['端午安康', '北京已经转入动态清零阶段',
                    'NBA 总决赛','河南大学回应一学生在宿舍打 120 求救'],
                number:0,

            };
        },
        components: {},
        mounted() {

            console.log("startMove")
            this.startMove()
        },

        methods: {
            startMove() {
                // let totalDuration = 1000
                let totalDuration = 2000
                // let totalDuration = 12000
                // let totalDuration = 400
                let timer = setTimeout(() => {
                    // if (this.number === 5) {
                    if (this.number === this.arr.length) {
                        this.number = 0;
                    } else {
                        this.number += 1;
                    }
                    this.startMove();
                }, totalDuration)
            },


        }
    }
</script>

<style lang="less" scoped>

    .line-limit-length{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        /*//文本不换行，这样超出一行的部分被截取，显示...*/
    }

    .text2{
        /*margin-left: 10px;*/
        margin-left: 40px;
        margin-top: 0;
        margin-bottom: 0;
    }
    .text-container{
        /*height: 5px;*/
    }

    .inner-container2{
        /*height: 100px;*/
        /*height: 20px;*/
        /*height: 10px;*/
    }
    .slide-enter-active, .slide-leave-active {
        transition: all 0.5s linear;
    }

    .slide-leave-to {
        transform: translateY(-20px);
    }

    .slide-enter {
        transform: translateY(20px);
    }

</style>
