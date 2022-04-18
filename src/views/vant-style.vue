<template>
  <div>
    <van-tabs v-model="active" class="vant-tab-wrap" swipeable animated sticky>
      <van-tab type="card" title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab type="card" title="标签 4">内容 4</van-tab>
<!--      <div >-->
<!--          &lt;!&ndash; v-slot="nav-right" &ndash;&gt;-->
<!--      &lt;!&ndash; <div v-slot="nav-right" class="gengduo-wrap-place">1 &ndash;&gt;-->
<!--            <div v-slot="nav-right" class="gengduo-wrap-place">1</div>-->
<!--          &lt;!&ndash; <template  v-slot="nav-right"></template>-->
<!--          1</div> &ndash;&gt;-->
<!--          </div>-->

 <!-- v-slot="nav-right" -->
      <div class="gengduo-wrap-place">1</div>
          <!-- 'v-slot' directive must be owned by a custom element, but 'div' is not.eslint-plugin-vue -->
<!--  -->
<!--      slot="nav-right"-->
      <div  class="gengduo-wrap">12</div>
<!--      <div slot="nav-right" class="gengduo-wrap">12</div>-->
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped lang="stylus">
/deep/ .vant-tab-wrap {
  .van-tabs__nav {
    padding-bottom: 0;
  }

  .van-tab {
    // border-right 1px solid #edeff3
    min-width: 200px;
    color: #777;
  }

  .van-tab--active {
    color: #333;
  }

  .van-tabs__wrap {
    height: 82px;
  }

  .van-tabs__line {
    width: 31px !important;
    height: 6px;
    bottom: 8px;
  }

  .gengduo-wrap-place {
    width: 66px;
    height: 82px;
    flex-shrink: 0;
  }

  .gengduo-wrap {
    width: 66px;
    height: 82px;
    background: #fff;
    opacity: 0.927;
    position: fixed;
    right: 0;
    display: flex;
    align-items: center;
    font-size: 33px;
    justify-content: center;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 1px;
      height: 30px;
      background: #777;
    }
  }
}
</style>
