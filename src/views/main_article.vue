<template>
    <div class="flex-col main-content">
        <div class="flex-col section">
            <div class="flex-col">
                <div class="justify-between top-bar-main-article">
                    <!--          <div class="btn-back">&lt;</div>-->
                    <svg @click="doBack" t="1648706295557" class="icon btn-back" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="4923" width="128" height="128">
                        <path d="M596.377143 1023.767273a40.727273 40.727273 0 0 1-29.090909-11.869091L104.857143 546.443636A40.494545 40.494545 0 0 1 104.857143 488.727273L579.155325 12.101818a40.820364 40.820364 0 0 1 57.949091 57.483637L191.431688 517.585455l433.803637 436.363636a40.727273 40.727273 0 0 1-28.858182 69.818182z"
                              p-id="4924"></path>
                    </svg>
                    <div class="flex-row">
                        <div class="btn-invitation">邀请</div>
                        <div class="btn-write-ans">写回答</div>
                        <!--            <div class="btn-span"></div>-->
                        <svg t="1648706398038" class="icon btn-span" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="9827" width="128" height="128">
                            <path d="M440 112m72 0l0 0q72 0 72 72l0 0q0 72-72 72l0 0q-72 0-72-72l0 0q0-72 72-72Z"
                                  p-id="9828"></path>
                            <path d="M440 440m72 0l0 0q72 0 72 72l0 0q0 72-72 72l0 0q-72 0-72-72l0 0q0-72 72-72Z"
                                  p-id="9829"></path>
                            <path d="M440 768m72 0l0 0q72 0 72 72l0 0q0 72-72 72l0 0q-72 0-72-72l0 0q0-72 72-72Z"
                                  p-id="9830"></path>
                        </svg>
                    </div>
                </div>
                <h2 class="box-title">划水</h2>
                <div class="line-info">知乎-12个回答</div>
                <!--          <hr>-->
                <div class="split-line"></div>
                <!--          <HR align=center width="300" color="#987cb9" SIZE=1></HR>-->
            </div>
            <div class="flex-col group_3">
                <div class="justify-between group_4">
                    <div class="flex-row">
                        <div class="avatar-img">
                            <img class="avatar-img" src="@/assets/miku.jpg" alt="miku"/>
                        </div>
                        <div class="flex-col group_6">
                            <div class="flex-row group_7">
                                <!--                <div class="line-name">小葫芦</div>-->
                                <h4 class="line-name">小葫芦</h4>
                                <!--                <div class="medal-img"></div>-->
                                <svg t="1648706218519" class="icon medal-img" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" p-id="4622" width="128" height="128">
                                    <path d="M729.6 837.688889H375.466667c-15.644444 0-28.444444-12.8-28.444445-28.444445V466.488889c0-15.644444 12.8-28.444444 28.444445-28.444445 75.377778 0 143.644444-44.088889 174.933333-113.777777l7.111111-17.066667c9.955556-21.333333 27.022222-38.4 49.777778-46.933333 22.755556-8.533333 46.933333-8.533333 68.266667 1.422222 45.511111 19.911111 65.422222 72.533333 45.511111 118.044444l-25.6 58.311111h130.844444c24.177778 0 45.511111 11.377778 58.311111 31.288889 12.8 18.488889 15.644444 42.666667 7.111111 64l-69.688889 240.355556c0 1.422222 0 2.844444-1.422222 2.844444-15.644444 36.977778-51.2 61.155556-91.022222 61.155556z m-325.688889-56.888889h325.688889c17.066667 0 31.288889-9.955556 38.4-24.177778l69.688889-240.355555c0-1.422222 0-2.844444 1.422222-2.844445 2.844444-5.688889 0-9.955556-1.422222-11.377778-1.422222-2.844444-4.266667-5.688889-9.955556-5.688888H651.377778c-9.955556 0-18.488889-4.266667-24.177778-12.8-5.688889-8.533333-5.688889-18.488889-2.844444-27.022223l42.666666-98.133333c7.111111-15.644444 0-35.555556-17.066666-42.666667-8.533333-2.844444-17.066667-4.266667-24.177778 0-8.533333 2.844444-14.222222 8.533333-18.488889 17.066667l-7.111111 17.066667c-35.555556 81.066667-112.355556 136.533333-197.688889 146.488889v284.444444z m391.111111-15.644444z"
                                          fill="#3FA6AD" p-id="4623"></path>
                                    <path d="M275.911111 837.688889h-85.333333c-15.644444 0-28.444444-12.8-28.444445-28.444445V466.488889c0-15.644444 12.8-28.444444 28.444445-28.444445h85.333333c15.644444 0 28.444444 12.8 28.444445 28.444445v342.755555c0 15.644444-12.8 28.444444-28.444445 28.444445z m-56.888889-56.888889h28.444445V494.933333h-28.444445v285.866667z"
                                          fill="#DC4569" p-id="4624"></path>
                                </svg>
                            </div>
                            <div class="signature-text">业余写手</div>
                        </div>
                    </div>
                    <!--          <div class="btn-watch">关注</div>-->
                    <van-button class="btn-watch" round type="primary">+关注</van-button>
                </div>
                <div class="agree-descrip">124人赞同了回答</div>
            </div>
        </div>
        <div class="main-content-box">作者：匿名用户
            链接：https://www.zhihu.com/question/464491404/answer/2069522993
            来源：知乎
            著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

            2021年10月18日更新从8月21日失业，到10月11日正式入职，中间也隔了小两个月了。大大小小的公司也面了不少，对我这种几乎是0经验的，很多公司只能开到6-7k。有一家卖牛排的电商公司，招用户运营，实际是销售岗，试用期三个月，月薪5k，大小周，每周至少加班两天，转正之后4.5k+1k绩效+提成，实际到手能有多少我也不清楚。之前面过一家上市公司子公司的数据运营岗，双休，不经常加班，hr说应届生可以给5.5-6k，绩效是按季度打分，大部分都是20%-25%，年终大部分都是2个月，综合算下来也有7-8k的样子，五险按最低交，公积金薪资的80%交。现在入职的这家，说白了就是大厂外包，今年新成立的部门，薪资是底薪加绩效，绩效是按排名来，前80%都可以保证1，后20%是1以下，五险按底薪交，如果绩效能拿到1的系数的话，每个月到手7k多，8k不到的样子，具体怎么样还不知道，双休，加班全靠自愿，工作氛围还可以，身边都是外包同事，主管是正编，也没有什么被瞧不起的感觉，大家都是干活的。唯二的缺点一个是工作点在滨江，现在通勤时间单程1.5h，还有就是外包身份，感觉会对简历有影响。说实话，目前这份工作已经是我能力范围内能找到的最优解。希望能够待长一点。生活成本也少了很多，本身公司也有食堂，中午有20的餐补，和工资一起发，相当于一笔额外收入，晚餐也是20，但是是在工牌里，一般会花15左右吃一顿饭，剩下的钱买点牛奶面包当第二天的早饭。如果晚上加班的话会有10块的餐补，一般也是拿点牛奶和面包了。超过9点以后打车回家不要钱。如果每天吃饭不超支的话，一天的花销就中午吃饭20+来回交通14.4，相比之前真的节省很多了。还有一件很幸运的事情，我9月社保断缴了，但是8月到账了，10月刚入职公司就帮我交了社保，紧接着就交了人才补贴的材料，赶在14号之前申请了，本来不抱希望了，就是想先申请试试，被驳回了那就只能等到明年三月份了。没想到的是13号刚交齐材料，下午五点多的样子，钱已经到账了。简直太开心了！还有之前被裁员和同事一起去申请了仲裁，最近也有了结果，可能会有半个月的补偿，但会不会发还是个未知数，祈祷公司账上还有钱，把赔偿发了。原回答不谈工作时间，只谈工资，都是耍流氓。我21年7月毕业，4月就去了一家公司实习，实习工资4k一个月，如果当月没有买衣服化妆品这些，完全够用的。7月直接签劳动合同，试用期到12月底，不过试用期工资不打折，当时谈的工资就是7k，底薪绩效7:3，还有400餐补，五险一金按最低交，单休。前几天刚刚到手上个月工资，超出预期，8.2k。工资条发下来发现，还有400餐补没发，五险一金没扣，预计下个月补上，这个月就算到手8k。但是我们这个绩效不稳定，这个月可能完成很好，下个月拿0.5点绩效也是有可能的。所以已经做好了下个月到手5k的准备了。说回够不够用，我觉得是够用的。目前是和男朋友一起住，比较偏，所以房租不算贵，1300，主卧。离地铁站走路10分钟的样子，有一辆小电驴，男朋友骑小电驴15分钟就可以到公司，所以每天早上我们都是一起出门，他载我到地铁站，然后他去上班，我去坐地铁。每天交通花费10块，打算社保到账之后去办一张市民卡，坐地铁可以打92折，这样每天坐地铁可以省一块钱。这部分算300。吃饭就外卖/出去吃，点外卖的话会控制在15左右，出去吃控制在20，偶尔跟同事一起吃会超支，花30左右。晚饭大部分时间都不吃，因为每天到家八点了也吃不下东西，偶尔一顿泡面也可以解决。忽略了自己的自制力，总想着每天下班回来自己做饭，实际上每天回来之后啥也不想干，就想躺着。早餐偶尔是提前一天去盒马买的面包，包子，烧卖，第二天蒸一蒸就能吃，很快。每天花在吃上的钱控制在50以内，大部分时候是30以内。平时购物就去盒马，办了一张会员卡，每周去2-3次，每次尽量控制在50以内。这部分花销算1500。购物基本是网购，化妆品需求不大，感觉现在年轻，皮肤状态恢复得快，用无印良品也能cover，后面开始尝试买试用装入正装，但是也不会一下子就入手大牌护肤品，一步步来。偶尔消费欲爆棚想买衣服，包包，都是平价的，100左右的。每个月这方面花费500。偶尔会有一些意想不到的支出，比如电脑坏了，修一下得100-200，还有科三补考，至少花500，折算下来每个月得预留出200，以备不时之需。总的算下来花销在3000左右，如果加上房租，至少3500，每个月稳定到手7k完全够用的，按我这个用法每个月还可以攒3000。希望之后10月调薪底薪可以涨一些，然后跳去一家大一点的公司申请杭州人才补贴。补充一下，目前公司总部在北京，所以不在杭州纳税，社保是第三方代缴，所以应该是没办法申请杭州人才补贴了，准备下个月社保到账之后下先申请一下，申请不了的话就只能跳槽了。再补充一下租房，最开始是在蛋壳租的，签的一年的合同，月付，押金是一个月房租，当时租金加上服务费一个月1500左右，位置在老余杭，离余杭万达3公里多。去年12月蛋壳暴雷，刚好也到年底合同到期了，所以损失得不多，就一个月押金，还有保洁费和煤气费。后面房东直接来把锁换了，跟我们直签，押金500，租金1300，物业费他们交，水电我们平摊。只能说碰到一个好房东，平时家里有什么东西坏了，能自己上手就自己上手了，之前房间灯不亮了，联系了房东，他让我们自己在淘宝上买，买完截图发给他，他把钱打给我们。我们挑了一圈，发现现在灯都好贵，挑了一个200多的，本来以为房东会嫌贵，结果他直接把钱转给我们了。纯属运气好。—————————分割线——————————反正没人看，加在最后。8月21日被裁员，无赔偿，现在就是在家躺尸状态。这个月到手预计4.5k，下个月15号发，幸好还有一点点存款，可以撑到那个时候。希望可以在国庆节前找到工作，这样就可以好好过个国庆节了。还是要存钱，不然遇到这种变故，一毕业就失业，好的衣服鞋子包包救不了你，但钱可以。
        </div>
        <div class="justify-between agree-line">
            <div class="flex-row">
                <!--        <div class="agree-btn">赞同</div>-->
                <van-button class="agree-btn" round type="primary">赞同</van-button>
                <van-button class="disagree-btn" round type="primary">反对</van-button>
                <!--        <div class="disagree-btn"></div>-->
            </div>
            <div class="flex-row">

                <svg t="1648705932610" class="icon like-btn view" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2059" width="128" height="128">
                    <path d="M667.786667 117.333333C832.864 117.333333 938.666667 249.706667 938.666667 427.861333c0 138.250667-125.098667 290.506667-371.573334 461.589334a96.768 96.768 0 0 1-110.186666 0C210.432 718.368 85.333333 566.112 85.333333 427.861333 85.333333 249.706667 191.136 117.333333 356.213333 117.333333c59.616 0 100.053333 20.832 155.786667 68.096C567.744 138.176 608.170667 117.333333 667.786667 117.333333z m0 63.146667c-41.44 0-70.261333 15.189333-116.96 55.04-2.165333 1.845333-14.4 12.373333-17.941334 15.381333a32.32 32.32 0 0 1-41.770666 0c-3.541333-3.018667-15.776-13.536-17.941334-15.381333-46.698667-39.850667-75.52-55.04-116.96-55.04C230.186667 180.48 149.333333 281.258667 149.333333 426.698667 149.333333 537.6 262.858667 675.242667 493.632 834.826667a32.352 32.352 0 0 0 36.736 0C761.141333 675.253333 874.666667 537.6 874.666667 426.698667c0-145.44-80.853333-246.218667-206.88-246.218667z"
                          p-id="2060"></path>
                </svg>
                <svg t="1648706083241" class="icon like-btn" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2883" width="128" height="128">
                    <path d="M943.2 412.4c-4.2-12.8-14.7-22.5-27.8-25.7l-241.6-58.3-130.2-211.8c-7.1-11.5-19.6-18.5-33-18.5-13.5 0-26 7-33 18.5L347.5 328.4l-241.6 58.3c-13.1 3.2-23.6 12.9-27.8 25.7-4.2 12.8-1.4 26.9 7.4 37.1l161.2 189.2-19.2 247.8c-1 13.4 5 26.4 15.9 34.3 6.7 4.9 14.7 7.4 22.8 7.4 5 0 10-1 14.8-2.9l229.7-94.9 229.8 94.9c4.8 2 9.8 2.9 14.8 2.9 8.1 0 16-2.5 22.8-7.4 10.9-7.9 16.9-20.9 15.9-34.3l-19.2-247.8L936 449.5c8.5-10.2 11.3-24.3 7.2-37.1zM734.7 625.8l20.5 263.8-244.6-101-244.5 101 20.5-263.8-171.7-201.4 257.2-62L510.6 137l138.5 225.4 257.2 62-171.6 201.4z"
                          p-id="2884"></path>
                </svg>
                <!--          <div class="like-btn view">-->
                <!--      </div>-->
                <!--        <div class="like-btn"></div>-->
                <!--          评论-->
                <svg t="1648706131796" @click="onCmtClicked" class="icon like-btn" viewBox="0 0 1058 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="3784" width="128" height="128">
                    <path d="M330.744242 885.372121l194.779798-129.861818 16.665859-11.106263h383.844848c36.486465 0 66.19798-29.659798 66.19798-66.146262v-529.19596c0-36.434747-29.711515-66.107475-66.19798-66.107475H132.305455c-36.486465 0-66.146263 29.659798-66.146263 66.107475v529.19596c0 36.486465 29.659798 66.146263 66.146263 66.146262h198.438787v140.968081m-66.146262 123.578182V810.550303H132.305455c-73.024646 0-132.305455-59.216162-132.305455-132.292525v-529.19596C0 76.024242 59.267879 16.808081 132.305455 16.808081h793.742222c73.076364 0 132.357172 59.216162 132.357171 132.240808v529.195959c0 73.076364-59.267879 132.292525-132.357171 132.292526h-363.830303L264.59798 1008.950303z m0 0"
                          p-id="3785"></path>
                </svg>
                <!--        <div class="like-btn"></div>-->
            </div>
        </div>

        <!--        v-show="showingCmt"-->
        <!--        <CustomPopup>-->
        <!--            <JuejinComment  v-slot:PoperContent class="cmt" ></JuejinComment>-->
        <!--        </CustomPopup>-->

        <!-- 弹出层 -->
        <!-- vue 弹出层 可以滑动 -->
        <div :class="{'CustomPopup':showCustomPopup}" @click="maskClick"></div>
        <!-- \@click.stop="messageTitleClick(num)" -->
<!--        @click.prevent="messageTitleClick(num)"-->
        <div class="CustomPopupContent " :class="{'CustomPopupContentShow':showCustomPopup}">
            <!--            <slot name="PoperContent"></slot>-->
            <JuejinComment @click.stop="messageTitleClick(num)" class="cmt"></JuejinComment>
        </div>

    </div>
</template>

<script lang="ts">
    // onCmtClicked
    // export default {
    //   data() {
    //     return {};
    //   },
    // };
    import {reactive, toRefs} from 'vue'

    import {ref} from 'vue';
    import {defineComponent} from 'vue';
    import JuejinComment from "@/components/JuejinComment.vue"
    import CustomPopup from "../components/CustomPopup.vue"
    import EventUtil from "@/utils/EventUtil";
    import { useRoute, useRouter } from "vue-router"
    export default defineComponent({
        name: 'HomeView',
        components: {
            JuejinComment,
            // CustomPopup
        },

        setup() {

            const state = reactive({
                msg: 'Hello Vue World!',
                showCustomPopup: false,
            })


            const onCmtClicked = (e:Event) => {
                console.log("e")
                console.log(e)
                // EventUtil.noScroll(e)
                    //禁止下层页面滑动
      // this.noScroll()
                console.log("onCmtClicked")
                // if (showingCmt.value) {
                //     showingCmt.value = false
                // } else {
                //     showingCmt.value = true
                // }
                showCustom()
            }


            const router = useRouter()


            const doBack = () => {
                console.log("doBack")
                // router.push("/MainArticle")
                router.go(-1);
            }


            // vue3 弹出评论
            const showCustom = () => {
                // this.showCustomPopup = true;
                state.showCustomPopup = true;
            }
            const maskClick = () => {
                // this.showCustomPopup = false;
                state.showCustomPopup = false;
            }
             const   messageTitleClick=(num:number)=> { // 点击了具体某条消息
      console.log("点击了消息", num);
    }

            // showingCmt
            // vue3 ts 变量
            let showingCmt = ref(false);
            return {
                ...toRefs(state),
                onCmtClicked,
                showingCmt,
                showCustom,
                maskClick,
                messageTitleClick,
                doBack
            };
        },
    });
</script>

<style scoped lang="css">

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
        /*background: #90ff76;*/
        background: white;
        /*height: 400px;*/
        /*height: 100%;*/
        /*height: 80%;*/
        /*height: 90%;*/
        /*height: 95%;*/
        height: 92%;
    }

    .CustomPopupContentShow {
        transform: translateY(0);
    }

    /*.line-limit-length {*/

    /*    overflow: hidden;*/

    /*    text-overflow: ellipsis;*/

    /*    white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...*/

    /*}*/

    .cmt {
        position: absolute;
    }

    .split-line {
        /*background: #ff6f2b;*/
        height: 1px;
        /*height: 20px;*/
        /*background: #b9beb8;*/
        background: #d0d0d0;
    }

    .main-content-box {
        text-align: left;
    }

    .like-btn {
        margin-left: 0.5rem;
        /*background-color: rgb(196, 196, 196);*/
        width: 2.25rem;
        height: 1.94rem;
    }

    .main-content {
        /*background-color: rgb(196, 196, 196);*/
        width: 100%;
        overflow-y: auto;
        height: 100%;
    }

    .section {
        padding: 0.38rem 0.19rem 0.94rem 0.63rem;
        background-color: rgb(255, 255, 255);
    }

    .agree-line {
        background: #90ff76;
        /*margin-top: 24.81rem;*/
        /*margin-top: 5rem;*/
        /*padding: 6.81rem 0.44rem 0.38rem 0.5rem;*/
        /*padding:0.3rem 0.44rem 0.38rem 0.5rem;*/
        background-color: rgb(255, 255, 255);
        margin-bottom: 3rem;
        margin-top: 2rem;
    }

    .group_3 {
        margin-top: 1.5rem;
        padding: 0 0.13rem;
    }

    .top-bar-main-article {
        /*padding-bottom: 0.88rem;*/
    }

    .box-title {
        margin-bottom: 0.3rem;
        text-align: left;
        /*background-color: rgb(196, 196, 196);*/
        width: 19.44rem;
        /*height: 3.19rem;*/
        height: 2.19rem;
    }

    .line-info {
        text-align: left;
        color: rgb(196, 196, 196);
        /*margin-top: 0.88rem;*/
        /*background-color: rgb(196, 196, 196);*/
        width: 14rem;
        height: 2.06rem;
    }

    .group_4 {
        padding-bottom: 0.38rem;
    }

    .agree-descrip {
        /*background-color: rgb(196, 196, 196);*/
        /*width: 6.63rem;*/
        color: #999999;
        text-align: left;
        /*  width: 8.63rem;*/
        width: 10.63rem;
        height: 1.38rem;
    }

    .agree-btn {
        /*background-color: rgb(196, 196, 196);*/
        width: 4.31rem;
        height: 1.94rem;
        margin-right: 10px;
    }

    .disagree-btn {
        /*background-color: rgb(196, 196, 196);*/
        width: 2.13rem;
        height: 1.94rem;
    }

    .view {
        margin-left: 0;
    }

    .btn-back {
        /*background-color: rgb(196, 196, 196);*/
        width: 2.5rem;
        height: 1.69rem;
    }

    .btn-watch {
        margin-right: 0.31rem;
        /*background-color: rgb(196, 196, 196);*/
        width: 4.88rem;
        height: 2.31rem;
    }

    .btn-invitation {
        color: #2196F3;
        /*background-color: rgb(196, 196, 196);*/
        width: 3.25rem;
        height: 1.69rem;
    }

    .btn-write-ans {
        margin-left: 0.63rem;
        color: #2196F3;
        /*background-color: rgb(196, 196, 196);*/
        /*width: 2.88rem;*/
        width: 4.88rem;
        height: 1.69rem;
    }

    .btn-span {
        margin-left: 0.38rem;
        /*background-color: rgb(196, 196, 196);*/
        width: 1.56rem;
        height: 1.69rem;
    }

    .avatar-img {
        border-radius: 50%;
        /*margin-left: 30px;*/
        /*width: @avatar_img_size;*/
        /*height: @avatar_img_size;*/
        background-color: rgb(196, 196, 196);
        width: 2.63rem;
        height: 2.38rem;
    }

    .group_6 {
        margin-left: 0.44rem;
        width: 5.88rem;
    }

    .group_7 {
        padding-bottom: 0.13rem;
    }

    .signature-text {
        text-align: left;
        color: rgb(196, 196, 196);
        /*background-color: rgb(196, 196, 196);*/
        height: 1.31rem;
    }

    .line-name {
        /*margin-top: 0.2rem;*/
        margin-top: 0.1rem;
        margin-bottom: 0.13rem;
        /*background-color: rgb(196, 196, 196);*/
        width: 3rem;
        height: 1.19rem;
    }

    .medal-img {
        margin-left: 0.56rem;
        /*background-color: rgb(196, 196, 196);*/
        width: 1.69rem;
        height: 1.31rem;
    }
</style>
