<template>
  <div class="flex-row">
    <img class="brief-info-img" src="../assets/zhihu.png"/>
    <div>
      <div class="title-row">
        <span class="brief-info-title">官方消息</span>
        <span class="time">05-13</span>
      </div>

      <div class="brief-info-content">情爱的 </div>
<!--      1080 2340-->
      <hr>
    </div>
<!--    <vant-col>-->
<!--      <vant-row>官方消息</vant-row>-->
<!--      <vant-row>情爱的 </vant-row>-->
<!--    </vant-col>-->

<!--    这个row 有什么用啊 主要是语义吗-->
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style scoped lang="css">
  .brief-info-title{
margin-left: 10px;
  }
  .brief-info-content{
    margin-left: 10px;
    text-align: left;
  }
  .title-row{
    display: flex;
    /*justify-content: space-between;*/
    /*justify-content: space-around;*/
    justify-content: stretch;
  }
  .time{
    /*margin-left: 30px;*/
    /*margin-left: 200px;*/
    /*margin-left: 240px;*/
    /*margin-left: 200px;*/
    margin-left: 220px;
  }
  .brief-info-img{
    /*width: 20px;*/
    /*height: 20px;*/
    /*width: 100px;*/
    /*height: 100px;*/
    width: 50px;
    height: 50px;
  }
  .component {
    padding: 0.69rem 0 3.38rem;
    background-color: rgb(196, 196, 196);
    border-radius: 0.25rem;
  }
  .image {
    margin-left: 1.19rem;
    width: 2.94rem;
    height: 2.63rem;
  }
</style>
