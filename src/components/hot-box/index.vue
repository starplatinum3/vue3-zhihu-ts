<template>
  <div class="hot-box">
    <div class="content-hot-main">
      <!-- <div class="hot-name">知乎热榜</div> -->
      <!-- width="50px" height="50px" -->
      <img class="hot-img" src="@/assets/zhihurebang.jpg" />
      <!--            hot-content-->
      <span class="content hot-content content-long">
        {{ content }}
        <!-- 我们需要做一个小箭头,最简单的办法就是直接用数学符号:">",但是这样做的缺点就是没有办法调节符号的大小,颜色......这就非常不理想.我在网上找到了一篇博客,专门解决了这个问题:

                原文链接:https://blog.csdn.net/Che_rish/article/details/78871662 -->
        <!--                <div class="more">查看全文</div>-->
        <!-- <div class="how-num">424万热度</div> -->
        <div class="how-num">{{ hot_num }}热度</div>
      </span>

      <!--            <div class="hot-content line-limit-length-hot-box line-limit-length">-->
      <!--                我们需要做一个小箭头,最简单的办法就是直接用数学符号:">",但是这样做的缺点就是没有办法调节符号的大小,颜色......这就非常不理想.我在网上找到了一篇博客,专门解决了这个问题:-->

      <!--                原文链接:https://blog.csdn.net/Che_rish/article/details/78871662-->

      <!--                <div class="how-num">424万热度</div>-->
      <!--            </div>-->

      <!--        https://cloud.tencent.com/developer/ask/80815-->
      <!--        <div class="hot-pic">-->
      <!--            <img>-->
      <!-- <img class="hot-pic" src="@/assets/miku.jpg" alt="miku"/> -->
      <!-- <img class="hot-pic" src="@/assets/pengYouQuan.jpg" alt="miku"/> -->
      <img class="hot-pic" :src="hot_pic" alt="miku" />
      <!--                    </div>-->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      content: `我们需要做一个小箭头,最简单的办法就是直接用数学符号:">",但是这样做的缺点就是没有办法调节符号的大小,颜色......这就非常不理想.我在网上找到了一篇博客,专门解决了这个问题:

                原文链接:https://blog.csdn.net/Che_rish/article/details/78871662`,
      hot_num: "424万",
      // hot_pic:require("@/assets/pengYouQuan.jpg")
      hot_pic: "http://starplatinumora.top/images/1580311650104640.jpg",
      // http://starplatinumora.top/images/1580311650104640.jpg
    };
  },
  name: "GithubHome",
};
</script>

<!--其他地方定义的 css 不引入的话 应该不行的吧-->
<!-- <style type="text/css" scoped>-->
<style lang="less" scoped>
.hot-img {
  margin-left: 20px;
  width: 50px;
  height: 50px;
}

@max_height: 60px;
.content-long {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  position: relative;
  line-height: 20px;
  /*max-height: 40px;*/
  /*max-height: 53px;*/
  max-height: @max_height;
}

.content-long:after {
  content: "...";
  position: absolute;
  bottom: 0;
  right: 0;
  /*padding-right: 352px;*/
  /*padding-right: 552px;*/
  /*padding-right: 333px;*/
  /*padding-right: 111px;*/
  /*padding-right: 222px;*/
  /*padding-right: 140px;*/
  /*padding-right: 40px;*/
  /*padding-right: 20px;*/
  /*padding-right: 44px;*/
  /*padding-right: 55px;*/
  padding-right: 66px;
  padding-left: 4px;
  background: linear-gradient(to right, transparent, #fff 0%);
}

.more {
  /* position: absolute;
        bottom: 0;
        right: 283px; */

  color: #2522ff;

  z-index: 9;
  cursor: pointer;
}

/*less import */
@import "@/assets/style.less";

.line-limit-length-hot-box {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/*//文本不换行，这样超出一行的部分被截取，显示...*/

    /*.line-limit-length{*/
/*    display: -webkit-box;//对象作为弹性伸缩盒子模型显示*/
/*    overflow: hidden;//溢出隐藏*/
/*    -webkit-box-orient: vertical;//设置伸缩盒子对象的子元素的排列方式*/
/*    -webkit-line-clamp: 2;*/
/*    !*-webkit-line-clamp: 1;*!*/
/*    //设置 块元素包含的文本行数*/
/*}*/

.how-num {
  color: #999999;
  /*background: #4d46ff;*/
  float: right;
  width: 59px;
  /*height: 19px;*/
  /*height: 39px;*/
  /*height: 20px;*/
  /*height: 22px;*/
  height: 16px;
  position: absolute;
  bottom: 4px;
  right: 4px;
  // font-size: 50%;
  font-size: 10px;
  z-index: 9;
  /*他需要在上面*/
}

.hot-pic {
  width: 55px;
  border-radius: 25%;
  // margin-left: 30px;
  margin-left: 10px;
}

.hot-content {
  margin-left: 10px;
  /*height: 53px;*/
  height: @max_height;
  position: relative;
  /*background: #ff523c;*/
  width: 206px;
}

.white {
  color: white;
}

.center {
  text-align: center;
}

.get-issue-btn-row {
  margin-top: 10px;
  margin-bottom: 10px;
}

.btn-margin {
  margin-top: 10px;
  margin-bottom: 10px;
}

/* .get-issue-btn-row{
        margin-top: 10px;
        margin-bottom: 10px;
    } */
.time {
  display: flex;
  flex-direction: row;
  font-size: 50%;
  margin-top: 10px;
}

.created_at {
  margin-right: 10px;
  margin-left: 5px;
}

.updated_at {
  margin-right: 10px;
  margin-left: 5px;
}

/*有头绪了 貌似是这里有padding*/
.row {
  background: red;
  display: flex;
  flex-direction: row;
  /* flex-direction: row; */
}

.row * {
  padding: 0;
}

.elliptical-background {
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 20px;
  border: 1px red solid;
  border-radius: 50px;
  background-color: bisque;
}

.open-bg {
  /* width: 200px;
        height: 200px; */
  /* width: 100px;
        height: 50px; */
  width: 80px;
  height: 30px;
  /* line-height: 200px; */
  /* line-height: 100px; */
  /* line-height: 50px; */
  line-height: 30px;
  text-align: center;
  /* font-size: 20px; */
  font-size: 5px;
  border: 1px greenyellow solid;
  border-radius: 50px;
  background-color: rgb(213, 255, 196);
}

.username {
  /* 加粗 */
  font-weight: bold;
  margin-right: 5px;
}

// @avatar_size:50px;
// @avatar_size:70px;
// @avatar_size:24px;
// @avatar_size:24*2px;
@avatar_size: 24px;
/*    @avatar_img_size: 20px;*/
@avatar_img_size: 30px;
/*不是尺寸的原因*/
.avatar {
  background: yellow;
  // width: 30px;
  // height: 30px;
  width: @avatar_size;
  height: @avatar_size;
  border-radius: 50%;
}

@screen_width: 414px;
.nickname {
  background: purple;
  //  width: 300px;
  //  width: 183*2px;
  //  height: 22*2px;
  /*width: 183px;*/
  width: 123px;
  height: 22px;
  margin-left: 30px;
}

.screen {
  background: green;
  width: @screen_width;
}

.content-hot-main {
  display: flex;
  flex-direction: row;

  width: @content_width;

  // padding-left: 10px;
  /*padding-left: 30px;*/
  /*padding-right: 10px;*/
}

.avatar-img {
  border-radius: 50%;
  /*margin-left: 30px;*/
  width: @avatar_img_size;
  height: @avatar_img_size;
}

.nickname-row {
  height: 30px;
}

.personal-signature {
  color: #999999;

  width: 111px;
}

.content-article {
  /*width: 349px;*/
  height: 72px;
  /*background: #000dba;*/
}

.brows-cnt {
  color: #999999;
  font-size: 80%;
  /*background: #ff9854;*/
}

.mid-box {
  width: 375px;
  height: 102px;
  display: flex;
  /*flex-direction: column;*/
  flex-direction: row;
}

.mid-right {
  display: flex;
  align-content: center;
  align-items: center;
  /*width: 73px;*/
  /*height: 73px;*/
  width: 102px;
  height: 102px;
  justify-content: center;
}

.mid-right-img {
  width: 73px;
  height: 73px;
}

.mid-left {
  width: 274px;
}

.hot-box {
  // margin-left: 20px;
  background-color: white;
  /*padding-bottom: 10px;*/
  width: 100%;
  /*background: #4d46ff;*/
  justify-content: center;
  align-items: center;
  height: 72px;
  display: flex;
  flex-direction: row;
}

.hot-name {
  /*widows: ;*/
  /*background: #ff9854;*/
  width: 68px;
  height: 55px;
}
</style>
