<template >
  <div class="whole">
    <van-sticky class="top-bar-wrapper">
      <div class="flex-row top-bar">
        <!--            style="background:#ff523c;"-->
        <div class="QR-code-wapper">
          <!--            <img class="QR-code" src="@/assets/miku.jpg">-->
          <svg
            t="1648706295557"
            class="icon QR-code-wapper"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4923"
            width="128"
            height="128"
          >
            <path
              d="M596.377143 1023.767273a40.727273 40.727273 0 0 1-29.090909-11.869091L104.857143 546.443636A40.494545 40.494545 0 0 1 104.857143 488.727273L579.155325 12.101818a40.820364 40.820364 0 0 1 57.949091 57.483637L191.431688 517.585455l433.803637 436.363636a40.727273 40.727273 0 0 1-28.858182 69.818182z"
              p-id="4924"
            ></path>
          </svg>
        </div>
        <!--            @focus="onFocus"-->
        <van-search
          class="search"
          v-model="keywordSubordinate"
          @focus="$emit('onSearchFocus')"
          placeholder="请输入搜索关键词"
          @search="querySubordinateList"
          type="primary"
        ></van-search>
        <!--            <div>-->
        <!--                <img class="QR-code" src="@/assets/miku.jpg">-->
        <!--            </div>-->
        <!--            设置黑夜模式-->
        <svg
          t="1648720563323"
          @click="nightSet"
          class="icon QR-code"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="11746"
          width="128"
          height="128"
        >
          <path
            d="M439.04383639 224.33271976a289.43717504 289.43717504 0 0 0-89.06329676 39.44690807c-27.5075319 18.12412161-51.158867 39.64960558-70.96389486 64.57645191-19.79019562 24.92684633-35.31880082 53.25011237-46.62042137 84.97474006C221.10449032 445.05050411 215.45368042 478.01109252 215.45368042 512c0 40.16870887 7.81621301 78.48347702 23.45358166 115.04318192 15.64725682 36.67341315 36.77228986 68.19039996 63.2910532 94.76354538 26.53359488 26.56820206 58.11485196 47.57952611 94.69927585 63.23667111 36.59431134 15.65714501 75.00301286 23.48324474 115.16183354 23.48324475 33.97407594 0 66.85061917-5.56182137 98.62468557-16.89310498 31.76417894-11.32633953 60.10227581-26.77584294 85.01429133-46.65502781 24.87740834-19.77536407 46.43255539-43.46625042 64.57150781-70.96389488a290.15403174 290.15403174 0 0 0 39.43701989-88.98913905c-8.3056532 0.72180079-17.71378249 1.13213991-28.0958481 1.1321392-45.21637032 0-88.35138342-8.85936294-129.45942212-26.46932463-41.1327577-17.71872658-76.62459295-41.50848964-106.44089858-71.27535655C505.84007277 458.54719011 482.10963587 423.01086095 464.42057238 381.91765379 446.7562286 340.81455917 437.94135957 297.65977044 437.94135957 252.4483442c0-10.40184195 0.39550758-19.77536407 1.15685891-28.01674772l-0.049438-0.09887672zM512.02976157 141.21192041c8.32542811 0 16.51242896 0.31146168 24.6054972 0.92944167-16.4036648 35.32374419-24.60549719 72.09603405-24.60549719 110.30698212 0 35.12104668 6.84227598 68.69961578 20.58121076 100.83458258 13.70927096 32.03114601 32.15474243 59.63261126 55.35124448 82.80933769 23.16683898 23.17178306 50.76830423 41.60736635 82.82416923 55.30674985 32.02125855 13.69938351 65.654209 20.60098567 100.78514387 20.60098568 38.23072298 0 75.03267594-8.24138293 110.35147675-24.62032874 0.59326099 8.14250622 0.86517214 16.28006837 0.86517213 24.62032874 0 33.57856837-4.43956893 66.43533597-13.29893256 98.46648269-8.90880166 32.03114601-21.28817928 61.69419283-37.24195443 88.78149743-15.92411206 27.19112615-35.31880082 52.11797247-58.09013296 74.87941716-22.77627549 22.76144395-47.74267309 42.12152555-74.87447306 58.09013223-27.15157487 15.96366261-56.75529553 28.32326532-88.78644152 37.28644905A368.16784419 368.16784419 0 0 1 512.00009921 882.78807959a368.20739474 368.20739474 0 0 1-98.48625832-13.28904439c-32.03609009-8.95824037-61.6249792-21.31784236-88.79138561-37.28150569-27.12685589-15.96860669-52.08336529-35.32868827-74.89919206-58.09013223-22.7515565-22.76144395-42.13635709-47.68829101-58.05058169-74.87941715-15.96366261-27.0922487-28.34304097-56.75529553-37.2518426-88.78149744A367.9354836 367.9354836 0 0 1 141.21201889 512c0-33.57856837 4.4494571-66.43533597 13.30882004-98.46648269 8.90880166-32.03114601 21.28817928-61.69419283 37.25184259-88.78149744 15.91916798-27.19112615 35.29902519-52.11797247 58.0505817-74.87941715 22.81582676-22.86526476 47.77233617-42.22534634 74.89919206-58.09013223C351.89380578 175.81880789 381.4826949 163.36032846 413.51878498 154.50096479A368.20739474 368.20739474 0 0 1 512.00009921 141.21192041h0.02966236z"
            p-id="11747"
          ></path>
        </svg>
        <!--            <div>-->
        <!--                <img class="QR-code" src="@/assets/miku.jpg">-->
        <!--            </div>-->
        <!--            设置-->
        <svg
          t="1648720606027"
          class="icon QR-code"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="12561"
          width="128"
          height="128"
        >
          <path
            d="M944.48 552.458667l-182.357333 330.666666a73.792 73.792 0 0 1-64.565334 38.325334h-362.133333a73.792 73.792 0 0 1-64.565333-38.325334l-182.357334-330.666666a75.338667 75.338667 0 0 1 0-72.682667l182.357334-330.666667a73.792 73.792 0 0 1 64.565333-38.325333h362.133333a73.792 73.792 0 0 1 64.565334 38.325333l182.357333 330.666667a75.338667 75.338667 0 0 1 0 72.682667z m-55.989333-31.146667a10.773333 10.773333 0 0 0 0-10.378667l-182.037334-330.666666a10.517333 10.517333 0 0 0-9.205333-5.482667H335.733333a10.517333 10.517333 0 0 0-9.205333 5.482667l-182.037333 330.666666a10.773333 10.773333 0 0 0 0 10.378667l182.037333 330.666667a10.517333 10.517333 0 0 0 9.205333 5.472h361.514667a10.517333 10.517333 0 0 0 9.205333-5.472l182.037334-330.666667zM513.738667 682.666667c-94.261333 0-170.666667-76.405333-170.666667-170.666667s76.405333-170.666667 170.666667-170.666667c94.250667 0 170.666667 76.405333 170.666666 170.666667s-76.416 170.666667-170.666666 170.666667z m0-64c58.912 0 106.666667-47.754667 106.666666-106.666667s-47.754667-106.666667-106.666666-106.666667-106.666667 47.754667-106.666667 106.666667 47.754667 106.666667 106.666667 106.666667z"
            p-id="12562"
          ></path>
        </svg>

        <!--            提示-->
        <svg
          @click="toMsgPage"
          t="1648721784018"
          class="icon QR-code"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="13361"
          width="128"
          height="128"
        >
          <path
            d="M861 926.4H161.6c-21.5 0-41.9-10.4-54.5-27.9-12.6-17.5-16.1-40.1-9.3-60.6l3-6.9 74.5-139.8V456c0-185.3 150.7-336 336-336s336 150.7 336 336v235.2l77.5 146.7c6.8 20.4 3.3 43.1-9.2 60.5-12.6 17.6-33 28-54.6 28z m-661.7-89.6h624.1l-65.6-123.2V456c0-135.9-110.5-246.4-246.4-246.4S264.9 320.1 264.9 456v257.6l-65.6 123.2z"
            p-id="13362"
          ></path>
          <path
            d="M600.9 187.2H421.7V56.8c0-2.2 1.8-4 4-4h171.2c2.2 0 4 1.8 4 4v130.4z"
            p-id="13363"
          ></path>
        </svg>
      </div>
    </van-sticky>
    <div class="flex-col page">
      <div class="flex-row me-info-box">
        <div class="flex-col items-start group">
          <!--                <img-->
          <!--                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480226731932904499.png"-->
          <!--                        class="image"-->
          <!--                />-->
          <!--                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480289040620794970.png"-->
          <img src="@/assets/miku.jpg" class="avatar_img" />
        </div>
        <div class="flex-col person-box">
          <!-- <h2 class="nickname-me">求你了</h2> -->
          <h2 class="nickname-me">{{nickname_me}}</h2>
          <!-- <div class="salt-cnt">10000盐值</div> -->
           <div class="salt-cnt">{{salt_cnt}}盐值</div>
        </div>
        <div @click="toMeHome" class="to-me-home">
          个人主页 &gt;

          <!--                <span  class="right-arrow"></span>-->
        </div>
        <!--            <div class="right-arrow"></div>-->
      </div>
      <div class="flex-row create-box">
        <div class="create-part">
          <!-- <div class="watch-cnt">1</div> -->
          <div class="watch-cnt">{{create_cnt}}</div>
          <div>创作</div>
          <!--                <div>14个草稿</div>-->
        </div>
        <div class="create-part">
          <!-- <div class="watch-cnt">312</div> -->
            <div class="watch-cnt">{{watch_cnt}}</div>
            <!-- watch_cnt -->
          <div>关注</div>
          <!--                <div>14个草稿</div>-->
        </div>
        <div class="create-part">
          <!-- <div class="watch-cnt">222</div> -->
           <div class="watch-cnt">{{collection_cnt}}</div>
          <div>收藏</div>
          <!--                <div>14个草稿</div>-->
        </div>
        <div class="create-part">
          <!-- <div class="watch-cnt">222</div> -->
           <div class="watch-cnt">{{look_cnt}}</div>
          <div>最近浏览</div>
          <!--                <div>14个草稿</div>-->
        </div>

        <!--            <div class="section_1"></div>-->
      </div>
      <div class="justify-between buy-it-box">
        <div class="flex-col group_2">
          <div class="buy-name">盐选会员三周年</div>
          <div class="buy-discount">年卡立减￥140元</div>
        </div>
        <div class="buy-btn">立即购买</div>
        <!--            <van-button class="btn-watch buy-btn" round >立即购买</van-button>-->
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

      <div class="mul-row-content create-box">
        <!--            <div class="chart"></div>-->
        <!--            <div class="chart"></div>-->
        <!--            <div class="chart"></div>-->
        <!--            <div class="chart"></div>-->
        <!--            <div class="chart"></div>-->
        <!--            <div class="chart"></div>-->
        <!--            <div v-for="i in 8" class="chart" :key="i">-->
        <!--            https://acc15t4bm5.feishu.cn/docs/doccnunkprCV2dRpleaGfAVyAyc-->
        <!--            style="color:red;"-->
        <!--            <div></div>-->
        <div class="chart">
          <i class="chart grid-item-book icon iconfont icon-shujia"></i>
          <div>书架</div>
        </div>
        <div class="chart">
          <i class="chart grid-item-book icon iconfont icon-yigou"></i>
          <div>已购</div>
        </div>

        <div class="chart">
          <i class="chart grid-item-book icon iconfont icon-fufei"></i>
          <div>付费咨询</div>
        </div>
        <div class="chart">
          <i class="chart grid-item-book icon iconfont icon-huodong"></i>
          <div>活动广场</div>
        </div>
        <div class="chart">
          <i class="chart grid-item-book icon iconfont icon-qianbao"></i>
          <div>钱包</div>
        </div>
        <div class="chart">
          <i class="chart grid-item-book icon iconfont icon-shequ"></i>
          <div>社区共建</div>
        </div>
        <div class="chart">
          <i class="chart grid-item-book icon iconfont icon-fankui"></i>
          <div>反馈与帮助</div>
        </div>
        <div class="chart">
          <i class="chart grid-item-book icon iconfont icon-zhibo"></i>
          <div>直播</div>
        </div>

        <!--            <div class="chart">-->
        <!--            <i class="chart grid-item-book icon iconfont icon-qianbao"></i>-->
        <!--            <div>钱包</div>-->
        <!--            </div>-->

        <!--            <div v-for="(imgUrl,i) in toolImgs" class="chart" :key="i">-->
        <!--&lt;!&ndash;                {{i}}&ndash;&gt;-->
        <!--&lt;!&ndash;                <div>啊啊</div>&ndash;&gt;-->
        <!--&lt;!&ndash;                <img class="grid-item-book" src="@/assets/miku.jpg">&ndash;&gt;-->
        <!--&lt;!&ndash;                <img class="grid-item-book" src="imgUrl">&ndash;&gt;-->
        <!--                <img class="grid-item-book" :src="imgUrl">-->
        <!--                <div>啊啊</div>-->
        <!--&lt;!&ndash;                icon-yigou&ndash;&gt;-->
        <!--            </div>-->
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
            <!-- <div class="level-cnt">LV4</div> -->
            <div class="level-cnt">LV{{level}}</div>
          </div>
          <div class="flex-row">
            <div class="go-into">进入</div>
            <div class="go-into-arrow">></div>
          </div>
        </div>
        <div class="content-items-box create-center-box">
          <div class="create-part">
            <!--                    <div>222</div>-->
            <i
              class="chart grid-item-book icon iconfont icon-neirongguanli"
            ></i>
            <div class="grid-item-book-text">内容管理</div>
            <!-- <div class="draft">14个草稿</div> -->
            <div class="draft">{{draft_cnt}}个草稿</div>
          </div>
          <div class="create-part">
            <i class="chart grid-item-book icon iconfont icon-fenxi"></i>
            <!--                    <div>222</div>-->
            <div class="grid-item-book-text">内容分析</div>
            <!--                    <div>14个草稿</div>-->
          </div>
          <div class="create-part">
            <!--                    <div>222</div>-->
            <i class="chart grid-item-book icon iconfont icon-shouyi"></i>
            <div class="grid-item-book-text">收益分析</div>
            <!--                    <div>14个草稿</div>-->
          </div>
          <div class="create-part">
            <!--                    <div>222</div>-->
            <i class="chart grid-item-book icon iconfont icon-chuangzuo"></i>
            <div class="grid-item-book-text">创作学院</div>
            <!--                    <div>14个草稿</div>-->
          </div>
        </div>
        <!--            <div class="flex-col items-center today-statis">-->
        <div class="flex-row items-center today-statis">
          <div class="flex-col today-play">
            <!-- <div class="play-cnt">222</div> -->
            <div class="play-cnt">{{play_cnt}}</div>
            <div>今日播放</div>
          </div>

          <!--                <div class="section_2"></div>-->
          <div class="flex-col today-agree">
            <!-- <div class="play-cnt">222</div> -->
            <div class="play-cnt">{{agree_cnt}}</div>
            <div>今日新增赞同数</div>
          </div>
        </div>
      </div>
    </div>
    <SearchView v-if="SearchViewShow"></SearchView>
    <!--        </div>-->
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

import { defineComponent } from "vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import SearchView from "@/views/SearchView.vue";
import { reactive, toRefs } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    SearchView,
  },
  setup() {
    const state = reactive({
      SearchViewShow: false,
      create_cnt:1,
      look_cnt:314,
      watch_cnt:312,
      collection_cnt:222,
      nickname_me:"求你了",
      play_cnt:222,
      agree_cnt:222,
      draft_cnt:14,
      salt_cnt:100000,
      level:4
    });

    // SearchViewShow
    // useRouter()
    // let router=  useRoute()
    const router = useRouter();
    const nightSet = () => {
      console.log("nightSet");
    };
    const toMsgPage = () => {
      router.push("MessageView");
    };
    const onFocus = () => {
      state.SearchViewShow = true;
      // console.log("onFocus")
      // this.$emit("onSearchFocus")
    };

    const toMeHome = () => {
      router.push("MeHome");
    };

    // const toolImgs = ref(["@/assets/miku.jpg"]);
    // const toolImgs = ref(["~/assets/miku.jpg"]);
    // const toolImgs = ref(["assets/miku.jpg"]);
    // const toolImgs = ref([require("assets/miku.jpg")]);
    // const toolImgs = ref([require("~/assets/miku.jpg")]);
    // 要require
    const toolImgs = ref([require("@/assets/miku.jpg")]);
    // const toolsImgs=["@/assets/miku.jpg"]
    return {
      ...toRefs(state),
      nightSet,
      toolImgs,
      toMsgPage,
      onFocus,
      toMeHome,
    };
  },
});
</script>


<style scoped lang="css">
.whole {
  /*background:   #F4F4F4;*/
  /*background-color:   #F4F4F4;*/
  background-color: #f6f6f6;
}
.play-cnt {
  /*font: bold;*/
  font-weight: bold;
}
.today-play {
  /*height: ;*/
  margin-top: 10px;
  width: 50%;
  /*background: #48ff52;*/
}
.today-agree {
  margin-top: 10px;
  width: 50%;
  /*background: #48ff52;*/
}
.create-center-box {
  display: flex;
  justify-content: space-between;
}

.mul-row-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  /*height: 100%;*/
  /*height: 300px;*/
  height: 200px;
}

.draft {
  color: #b9b9b9;
}
.grid-item-book-text {
  /*margin-top: 10px;*/
  margin-top: 5px;
}
.grid-item-book {
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
  background-color: #2196f3;
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
  background-color: #f6f6f6;
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
  background-color: #fcead6;
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
  /* padding-left: 20px; */
  padding-left: 10px;
  padding-right: 20px;
  padding-bottom: 20px;
  /* padding: 0 1rem 0.63rem 1.13rem; */
  /*background-color: rgb(196, 196, 196);*/
  background-color: white;
  border-radius: 0.25rem;
}

.group {
  padding-top: 1rem;
  width: 3.88rem;
  position: relative;
}

.person-box {
  /* .group_1 { */
  margin-left: 0.31rem;
  margin-top: 0.19rem;
  /* margin-right: 10px; */
  margin-right: 20px;
  /* width: 8.56rem; */
}

/*右箭头*/
.right-arrow {
  display: inline-block;
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
  /* width: 4.31rem; */
  height: 3.13rem;
  /* width: 300px; */
  /* width: 20px; */
  /* width: 40px; */
  /* width: 60px; */
  /* width: 100px; */
  /* width: 80px; */
  width: 70px;
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
  background: linear-gradient(161.46deg, #fde2c2 16.41%, #c19164);
  align-self: center;
  /*background-color: rgb(195, 42, 42);*/
  /*width: 4.88rem;*/
  width: 5.38rem;
  height: 2.25rem;
  align-content: center;
  /*垂直 居中*/
  /*transform:translateY(-50%);*/
  vertical-align: middle;
  line-height: 2.25rem;
  /*好使*/
  border-radius: 1.12rem;
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
  /* width: 400px; */
  /* width: 200px; */
  width: 300px;
  margin-top: 10px;
  margin-left: 0.25rem;
  margin-right: 20px;
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

.watch-cnt {
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
  color: #78501d;
  /*background-color: rgb(190, 43, 43);*/
  height: 1.5rem;
}

.buy-discount {
  /*margin: 0.63rem 0.38rem 0 0.31rem;*/
  /*background-color: rgb(190, 43, 43);*/
  color: #bd9a62;
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
  font-weight: bold;
}

.level-cnt {
  /*margin-left: 0.94rem;*/
  /*background-color: rgb(212, 40, 40);*/
  color: #3d7bc6;
  /*width: 3.56rem;*/
  /*height: 1.38rem;*/
  margin-top: 2px;
}

.QR-code-wapper {
  /*width: 30px;*/
  /*height: 30px;*/
  width: 20px;
  height: 20px;
}
.top-bar-wrapper {
  /* margin-right: 10px; */
  /* margin-right: 50px; */
  /* width: 1vw; */
  /* 200 */
  /* width: 0.8vw; */
  /* width: 200px; */
  background-color: white;
}

.top-bar {
  background: #ffffff;
  /*padding: 1.38rem 1rem 0.81rem 1.56rem;*/
  /*padding: 1.38rem 1rem 0.81rem 0.02rem;*/
  margin-left: 10px;
  margin-right: 10px;
  /* width: 200px; */
  /*width: 400px;*/
  align-items: center;
  justify-content: space-between;
}
.QR-code {
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

.search {
  /* width: 200px; */
  /* width: 100px; */
  width: 200px;
}
</style>
