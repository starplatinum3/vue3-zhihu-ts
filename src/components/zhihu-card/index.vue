<template>
  <!--    <div class="screen">-->
  <div class="inside-mid-box">
    <div class="content-inside-mid-box">
      <!--            <div class="content-mid">-->
      <h4 class="title">web前端面试题目题目</h4>
      <div class="mid-box">
        <div class="mid-left">
          <div class="row nickname-row">
            <!--          为什么这个不显示-->
            <!--          flex row 里的图片不显示-->
            <img class="avatar-img" src="@/assets/miku.jpg" alt="miku" />
<!--            <img class="avatar-img" src="@/assets/pengYouQuan.jpg" alt="miku" />-->
            <!--             <div class="avatar">头像-->
            <!--                 &lt;!&ndash; <img src="src/assets/miku.jpg"/> &ndash;&gt;-->
            <!--                 &lt;!&ndash; src 不行 &ndash;&gt;-->
            <!--                  <img class="avatar-img" src="@/assets/miku.jpg"/>-->
            <!--             </div>-->
            <!-- <span class="nickname">昵称</span>
                        <span class="personal-signature">昵称</span> -->
            <span class="nickname">张扛扛</span>
            <span class="personal-signature">有点皮</span>
          </div>
          <!--            <img class="avatar-img" src="@/assets/miku.jpg" alt="miku"/>-->

          <div class="content-article">Vant
            轻量、可靠的移动端 Vue 组件库

            特性
            50+ 个组件
            90% 单元测试覆盖率
            完善的中英文文档和示例


          </div>
        </div>
        <div class="mid-right">
<!--          <img class="mid-right-img" src="@/assets/miku.jpg" alt="miku" />-->
          <img class="mid-right-img" src="@/assets/vant.png" alt="miku" />
        </div>
      </div>

      <div class="brows-cnt-card">浏览</div>
      <!--            </div>-->
    </div>
  </div>
  <!--    </div>-->
</template>

<script>
export default {
  components: {},
  name: "GithubHome",
};
</script>

<!--其他地方定义的 css 不引入的话 应该不行的吧-->
<!-- <style type="text/css" scoped>-->
<style lang="less" scoped>
.inside-mid-box {
    // margin-left: 10px;
    // margin-right: 10px;
    // margin-left: 2px;
    // margin-right: 2px;
  //width: 100%;
  // background: #4d46ff;
  background: #ffffff;
  justify-content: center;
  align-items: center;
  //height: 72px;
  display: flex;
  flex-direction: row;
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
  /*background: red;*/
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
  // background: purple;
  // //  width: 300px;
  // //  width: 183*2px;
  // //  height: 22*2px;
  // /*width: 183px;*/
  // width: 123px;
  // height: 22px;
  // margin-left: 30px;

  /*background: purple;*/
  //  width: 300px;
  //  width: 183*2px;
  //  height: 22*2px;
  /*width: 183px;*/
  // width: 123px;
  width: 40px;
  height: 22px;
  // margin-left: 30px;
  margin-left: 10px;
  // inline-height:22px;
  // line-height: 200px;
  line-height: 22px;
  font-size: 50%;
  margin-top: 3px;
  // margin-top: 10px;
}

.screen {
  background: green;
  width: @screen_width;
}

@content_width: 370px;
.content-inside-mid-box {
  /*width: 400px;*/
  /*width: 350px;*/
//   width: 370px;
   width: 350px;
//   background: #ff9854;
   background: #ffffff;
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
  // padding-left: 10px;
  /*padding-left: 30px;*/
  /*padding-right: 10px;*/
  margin: 0 auto;
  /*里面的全部 居中*/
}

.content * {
  text-align: left;
}
.avatar-img {
  border-radius: 50%;
  /*margin-left: 30px;*/
  width: @avatar_img_size;
  height: @avatar_img_size;
}

.nickname-row {
  text-align: left;
  height: 30px;
}

.personal-signature {
  color: #999999;

  font-size: 50%;
  width: 111px;
  // margin-top: 3px;
  margin-top: 5px;
}

.title{
  text-align: left;
    margin-top: 3px;
    margin-bottom: 3px;
}

.content-article {
  text-align: left;
  /*width: 349px;*/
  height: 72px;
  /*background: #000dba;*/
}

.brows-cnt-card {
  text-align: left;
  color: #999999;
  font-size: 80%;
  background: #ffffff;
  margin-bottom: 10px;
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
//   width: 274px;
  width: 254px;
}
</style>
