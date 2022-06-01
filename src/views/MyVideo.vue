<template>
    <div class="my-video my-video-body" :style="VideoItemHeightStyle">
        <video

                class="video" :src="VideoItem.Video.videoPath"
                :poster="VideoItem.Video.videoCover"
                webkit-playsinline
                playsinline
                x5-video-player-type="h5"
                preload="none"
                @click="playHandler($event)"
                @loadeddata="watchHandler"
                ref="video"></video>
        <div class="side-bar">
            <div class="avatar sidebar-icon">
                <img :src="`${baseURL}${VideoItem.Video.userAvatar}`" alt="" width="40" height="40"
                     @click="chooseUser">
                <!-- <div class="follow">+</div> -->
            </div>
            <div class="like iconfont icon-heart-fill sidebar-icon" :class="{ 'red-heart': like }"
                 @click="toggleLike(VideoItem.Video.videoId)">
                <span class="likenum">{{likeNum}}</span>
            </div>
            <div class="comment iconfont icon-message sidebar-icon"
                 @click.stop="showCommentList(VideoItem.Video.videoId, VideoItem.WSLCNum.commentNum)">
                <span class="commentnum">{{VideoItem.WSLCNum.commentNum}}</span>
            </div>
            <div class="share iconfont icon-share sidebar-icon">
                <span class="sharenum">{{VideoItem.WSLCNum.shareNum}}</span>
            </div>
            <!--            <svg t="1649587471268" class="icon iconfont sidebar-icon" viewBox="0 0 1024 1024" version="1.1"-->
            <svg t="1649587471268" class="icon iconfont maximize-btn" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2238" width="128" height="128">
                <path class="sidebar-icon-path"
                      d="M482.3 513.3L196 799.6c-0.5-2.4-0.8-4.9-0.8-7.5V560.4h-42.7v231.7c0 44.2 35.9 80.1 80.1 80.1h231.7v-42.7H232.6c-1.9 0-3.8-0.1-5.7-0.4l285.5-285.5-30.1-30.3zM795.4 154.1H563.6v42.7h231.7c1.3 0 2.5 0.1 3.8 0.2L514.3 481.9l30.2 30.2L831.6 225c0.8 3 1.2 6 1.2 9.2V466h42.7V234.2c0-44.1-36-80.1-80.1-80.1z"
                      p-id="2239"></path>
            </svg>
            <!--        <div></div>-->

        </div>


<!--        <div class="text-wrap">-->
<!--            <div class="name">@{{VideoItem.Video.userNickname}}</div>-->
<!--            <div class="desc">{{VideoItem.Video.videoDesc}}</div>-->

<!--        </div>-->
        <div class="btn-line">
            <div class="btn-line-inner">
<!--                avatar sidebar-icon-->
            <div class=" bottom-avatar">
                <img :src="`${baseURL}${VideoItem.Video.userAvatar}`" alt="" width="40" height="40"
                     @click="chooseUser">
                <!-- <div class="follow">+</div> -->
            </div>
                
                <div class="name">主持人</div>
                <svg t="1649600224861" class="icon add-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4752" width="128" height="128"><path d="M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z" p-id="4753"></path></svg>
            <AgreeBtn class="btn-agree"></AgreeBtn>
            </div>
        </div>

        <div class="input-bar" v-show="!isHome"
             @click.stop="showCommentList(VideoItem.Video.videoId, VideoItem.WSLCNum.commentNum)">
            <input class="input" placeholder="  有爱评论，说点儿好听的~" type="text">
            <span class="iconfont icon-at"></span>
            <span class="iconfont icon-check"></span>
        </div>
    </div>
</template>

<script>
    // import { baseURL } from 'common/js/config'
    import {mapGetters} from 'vuex'
    import AgreeBtn from "@/components/AgreeBtn.vue"

    export default {
        components: {
            AgreeBtn,
        },
        // props: {
        //   VideoItem: {
        //     type: Object,
        //     required: true
        //   }
        // },
        created() {
            // if (this.isLogged) {
            //   this.$axios.get(`/api/user/${this.loginInfo.userId}/isLiked/${this.VideoItem.Video.videoId}`).then(res => {
            //     this.like = res.data.data
            //   })
            // }
        },
        mounted() {
            // https://blog.csdn.net/BradyCC/article/details/106434961
            // 监听视频播放
            this.$refs.video.addEventListener("play", () => {
                console.log("video is playing");
            });
            // 监听视频暂停
            this.$refs.video.addEventListener("pause", () => {
                console.log("video is stop");
            });
// ————————————————
// 版权声明：本文为CSDN博主「BradyCC」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/BradyCC/article/details/106434961
        },
        data() {
            let baseURL = ""
            // let  VideoItem.Video.videoPath
            let VideoItem = {
                Video: {
                    // videoPath: require("@/assets/blackBro.flv"),
                    // videoPath: require("@/assets/youhou.mp4"),
                    videoPath: "http://starplatinumora.top/images/video/top10%E7%9C%81%E7%8E%B0%E6%9C%89%E7%A1%AE%E8%AF%8A%E7%97%85%E4%BE%8B%E5%AF%B9%E6%AF%94.mp4",
                    // videoPath:"@/assets/blackBro.flv",
                    // userAvatar:"../assets/miku.jpg"
                    // userAvatar:"@/assets/miku.jpg"
                    // userAvatar:"src/assets/miku.jpg"
                    userAvatar: require("@/assets/miku.jpg"),
                    userNickname: "java",
                    videoDesc: "videoDesc",
                    videoCover: "http://starplatinumora.top/images/1541000669139474.jpg",
                    videoId: "1",
                },
                WSLCNum: {
                    likeNum: 1
                }
            }
            return {
                playing: false,
                baseURL,
                like: false,
                // likeNum: this.VideoItem.WSLCNum.likeNum
                likeNum: 1,
                VideoItem
            }
        },
        computed: {
            isHome() {
                return this.$route.name === 'home'
            },
            VideoItemHeightStyle() {
                let clientWidth = document.body.clientWidth
                // let clientHeight = document.body.clientHeight
                // let clientHeight = document.body.clientHeight-20
                // let clientHeight = document.body.clientHeight - 100
                // let minusNum=150
                let barHeight=140
                // let clientHeight = document.body.clientHeight - 200
                // let clientHeight = document.body.clientHeight - minusNum
                let clientHeight = document.body.clientHeight - barHeight
                return {
                    height: clientHeight + 'px',
                    width: clientWidth + 'px'
                }
            },
            ...mapGetters([
                'isLogged',
                'loginInfo'
            ])
        },
        methods: {
            playHandler(e) {
                // if(playing){
                //
                // }
                console.log(e)

                let video = e.target
                // this.$emit('playVideo', e)
                if (video.paused) {
                    // e.target.play()
                    video.play()
                } else {
                    video.pause()
                }
            },
            watchHandler() {
                this.$axios.get(`/api/user/${this.loginInfo.userId}/watch/${this.VideoItem.Video.videoId}`).then(res => {
                    console.log("res")
                    console.log(res)
                })
            },
            showCommentList(videoId, commentNum) {
                this.$emit('showCommentList', videoId, commentNum)
            },
            toggleLike(videoId) {
                if (this.isLogged) {
                    this.$axios.get(`/api/user/${this.loginInfo.userId}/triggerLike/${this.VideoItem.Video.videoId}`).then(res => {
                        if (res.data.data.includes('取消')) {
                            this.like = false
                            this.likeNum--
                        } else {
                            this.like = true
                            this.likeNum++
                        }
                        this.$socket.emit('sendTriggerLike', {
                            fromUserId: this.loginInfo.userId,
                            toUserId: this.VideoItem.Video.userId
                        })
                    })
                }
            },
            chooseUser() {
                this.$router.push(`/profile/${this.VideoItem.Video.userId}`)
            }
        }
    }
</script>

<style scoped lang='stylus'>
    @import '~@/common/stylus/variable'
    .btn-agree
        /*margin-left  100px*/
        // margin-left  70px
        margin-left  40px
        /*margin-left  30px*/
        /*right 30px*/
        /*margin-right 30px*/
        /*float right*/
    .add-icon
        width 20px
        height  20px
        fill blue
    .bottom-avatar
    /*    border-radius 50%*/
        border-radius  50%
        // margin-right 30px
        margin-right 10px
        img
            border-radius  50%
    .btn-line-inner
        display flex
        align-items center
        justify-content center
    .btn-line
        /*display flex*/
        //display
        bottom 20px
        left 20px
        position absolute
        align-items center
        justify-content center
        /*margin-bottom 30px*/
        // margin-bottom 60px
        // margin-bottom 20px
        margin-bottom 30px

    .maximize-btn
        width: 20px
        height: 20px
        fill: #e8e8e9;
        margin 0 auto

    .sidebar-icon
        width: 40px
        height: 40px
        /*background: #e8e8e9;*/
        /*color: #e8e8e9;*/
        stroke: red;
        fill: #e8e8e9;
        font-size 40px
        /*fill 才行*/
        /*width 40px*/
        /*height 40px*/
        /*font-size 40px*/
        color $color-text
        transition color .3s

    .sidebar-icon-path
        color: #e8e8e9;
        stroke: red;

    .my-video-body
        line-height: 1
        font-family: arial, 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', sans-serif, 'Droid Sans Fallback'
        user-select: none
        -webkit-tap-highlight-color: transparent
        background: $color-background
        color: $color-text
        width: 100%
        /*height 100%*/
        /*height 80%*/
        height 200px
        display: flex


    /*
    * Adds the given numbers together.
    body, html
        line-height: 1
        font-family: arial, 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', sans-serif, 'Droid Sans Fallback'
        user-select: none
        -webkit-tap-highlight-color: transparent
        background: $color-background
        color: $color-text
        width: 100%
        height 100%
        display: flex

    */

    .my-video
        position relative

        .input-bar
            border-top .5px solid $color-divide
            width 100%
            display flex
            height 44px
            position absolute
            bottom 0
            background rgba(26, 27, 32, 0)

            .input
                background rgba(26, 27, 32, 0)
                flex 1
                font-size $font-size-medium
                color $color-text
                padding-left 10px

                &:focus
                    outline none
                    border none

            .iconfont
                display flex
                justify-content center
                align-items center
                width 44px

        .video
            display block
            width 100%
            height 100%

        .text-wrap
            position absolute
            left 10px
            bottom 54px
            width 70%

            .name
                color $color-white
                margin-bottom 10px

            .desc
                font-size $font-size-medium
                color $color-text

        .side-bar
            position absolute
            right 10px
            /*bottom 74px*/
            /*bottom 100px*/
            /*bottom 200px*/
            bottom 170px
            display flex
            flex-direction column
            height 250px
            justify-content space-between

            .avatar
                position relative
                border-radius 50%
                background none
                border 1px solid $color-text

                img
                    border-radius 50%

                .follow
                    text-align center
                    position absolute
                    bottom 0
                    left 50%
                    transform translateX(-50%) translateY(50%)
                    width 16px
                    height 16px
                    font-size 16px
                    border-radius 50%
                    background rgb(252, 52, 93)

            .like
                position relative

                .likenum
                    font-size $font-size-small-s
                    position absolute
                    bottom -5px
                    left 50%
                    transform translateX(-50%) translateY(100%)
                    color $color-text

            .red-heart
                color rgb(248, 53, 95)

            .comment
                position relative

                .commentnum
                    font-size $font-size-small-s
                    position absolute
                    bottom -5px
                    left 50%
                    transform translateX(-50%) translateY(100%)
                    color $color-text

            .share
                position relative

                .sharenum
                    font-size $font-size-small-s
                    position absolute
                    bottom -5px
                    left 50%
                    transform translateX(-50%) translateY(100%)
                    color $color-text

        /* .side-bar > div
              width 40px
              height 40px
              font-size 40px
              color $color-text
              transition color .3s

         */

        .side-bar
            /*width 40px*/
            /*height 40px*/
            font-size 40px
            color $color-text
            transition color .3s

</style>
