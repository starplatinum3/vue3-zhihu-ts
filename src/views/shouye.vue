<template>
  <div class="flex-col page">
    <div class="flex-col header">
      <div class="justify-between group">
        <span>9:41</span>
        <div class="flex-row group_1">
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009834185347774.png"
            class="image"
          />
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009834150509331.png"
            class="image_1"
          />
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009849815279916.png"
            class="image_2"
          />
        </div>
      </div>
      <span class="text_1">FF办公空间</span>
    </div>
    <div class="flex-col group_2">
      <img
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010093791214053.png"
        class="image_3"
      />
      <div class="flex-row equal-division">
        <div class="equal-division-item flex-col items-center">
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010113644013648.png"
            class="image_4"
          />
          <span class="text_2">地图找楼</span>
        </div>
        <div class="equal-division-item flex-col items-center">
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010113644167452.png"
            class="image_4"
          />
          <span class="text_2">核心商圈</span>
        </div>
        <div class="equal-division-item flex-col items-center">
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010113669698766.png"
            class="image_4"
          />
          <span class="text_2">全景参观</span>
        </div>
        <div class="equal-division-item flex-col items-center">
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010113663525642.png"
            class="image_4"
          />
          <span class="text_2">咨询热线</span>
        </div>
      </div>
      <div class="flex-col group_7">
        <span class="text_7">热推空间</span>
        <div class="flex-col list">
          <div class="list-item flex-row" :key="i" v-for="(item, i) in listVHC6CKGW">
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010093853079242.png"
              class="image_9"
            />
            <div class="right-group flex-col">
              <div class="flex-col">
                <span class="text_8">维新软件科学园</span>
                <span class="text_10">深圳市南山区中心路3331号</span>
              </div>
              <div class="bottom-group justify-end">
                <span class="text_12">¥1,870</span>
                <span class="text_14">起/工位/月</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"shou-ye",
    data() {
      return { listVHC6CKGW: [null, null, null] };
    },
  };
</script>

<style scoped lang="css">
  .equal-division-item {
    flex: 1 1 5.25rem;
    padding: 0.31rem 0;
  }
  .image_4 {
    width: 2.75rem;
    height: 2.75rem;
  }
  .list-item {
    padding: 0 0.063rem 0.97rem;
  }
  .image_9 {
    border-radius: 0.25rem;
    width: 6.25rem;
    height: 6.25rem;
  }
  .right-group {
    margin-left: 1rem;
    flex: 1 1 auto;
  }
  .bottom-group {
    margin-top: 1.81rem;
  }
  .text_8 {
    color: rgb(0, 0, 0);
    font-size: 0.94rem;
    line-height: 1.31rem;
    white-space: nowrap;
  }
  .text_10 {
    margin-top: 0.5rem;
    color: rgb(136, 136, 136);
    font-size: 0.81rem;
    line-height: 1.13rem;
    white-space: nowrap;
  }
  .text_12 {
    margin-right: 0.19rem;
    color: rgb(0, 0, 0);
    font-size: 1.06rem;
    line-height: 1.5rem;
    white-space: nowrap;
  }
  .text_14 {
    margin: 0.25rem 0 0.13rem;
    color: rgb(136, 136, 136);
    font-size: 0.81rem;
    line-height: 1.13rem;
    white-space: nowrap;
  }
  .text_2 {
    margin-top: 0.5rem;
  }
  .page {
    background-color: #ffffff;
    width: 100%;
    overflow-y: auto;
    height: 100%;
  }
  .header {
    padding: 0.91rem 0.88rem 0.38rem 2.19rem;
    height: 5.31rem;
  }
  .group_2 {
    padding: 0.69rem 1.19rem 2.31rem;
    flex: 1 1 auto;
    overflow-y: auto;
  }
  .group {
    color: rgb(0, 0, 0);
    font-size: 0.94rem;
    line-height: 1.13rem;
    letter-spacing: -0.019rem;
    white-space: nowrap;
  }
  .text_1 {
    margin-top: 1.34rem;
    align-self: center;
    color: rgb(0, 0, 0);
    font-size: 1.13rem;
    font-weight: 600;
    line-height: 1.56rem;
    white-space: nowrap;
  }
  .image_3 {
    border-radius: 0.5rem;
    width: 20.94rem;
    height: 9.38rem;
  }
  .equal-division {
    margin-top: 1.69rem;
    color: rgb(0, 0, 0);
    font-size: 0.81rem;
    line-height: 1.13rem;
    white-space: nowrap;
  }
  .group_7 {
    margin-top: 1.44rem;
  }
  .group_1 {
    margin: 0.19rem 0 0.22rem;
  }
  .text_7 {
    color: rgb(0, 0, 0);
    font-size: 0.94rem;
    font-weight: 600;
    line-height: 1.31rem;
    white-space: nowrap;
  }
  .list {
    margin-top: 0.75rem;
  }
  .image {
    width: 1.06rem;
    height: 0.69rem;
  }
  .image_1 {
    margin-left: 0.28rem;
    width: 1rem;
    height: 0.69rem;
  }
  .image_2 {
    margin-left: 0.28rem;
    width: 1.53rem;
    height: 0.72rem;
  }
  .list-item:not(:last-of-type) {
    border-bottom: solid 0.063rem rgb(221, 221, 221);
  }
</style>
