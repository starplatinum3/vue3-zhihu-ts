<template>
  <div class="flex-col page">
    <div class="justify-center">
      <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480226745051692490.png"
              class="switch"
      />
      <div class="flex-col group_1">
        <div class="section_1">名字</div>
<!--        <img-->
<!--                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480226745054629632.png"-->
<!--                class="image"-->
<!--        />-->
        <div class="image">研制</div>
      </div>
<!--      <img-->
<!--              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480226745055815529.png"-->
<!--              class="image_1"-->
<!--      />-->
      <div class="image_1">个人主页</div>
    </div>
    <div class="flex-col group_2">
      <div class="flex-row section_2">
<!--        <img-->
<!--                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480226745050055800.png"-->
<!--                class="image_2"-->
<!--        />-->
        <div class="image_2">创作</div>
        <div class="section_3"></div>
      </div>
      <div class="justify-between buy-it-section">
        <div class="flex-col group_3">
          <div class="buy-it-name"></div>
          <div class="buy-it-name buy-it-cnt-down"></div>
        </div>
        <div class="me-buy-it"></div>
      </div>
      <div class="flex-col items-start image-wrapper">
        <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480226745055727983.png"
                class="image_3"
        />
      </div>
      <div class="flex-col create_center">
        <div class="justify-between group_4">
          <div class="flex-row">
            <div class="section_4"></div>
            <div class="section_5"></div>
          </div>
          <div class="flex-row">
            <div class="section_6"></div>
            <div class="section_7"></div>
          </div>
        </div>
        <div class="create-btns"></div>
        <div class="flex-col items-center button">
          <div class="section_8"></div>
        </div>
      </div>
    </div>
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
  .buy-it-name {
    background-color: rgb(190, 43, 43);
    height: 0.94rem;
  }
  .page {
    padding: 3.63rem 2.56rem 6.25rem 2.63rem;
    background-color: rgb(255, 255, 255);
    width: 100%;
    overflow-y: auto;
    height: 100%;
  }
  .group_2 {
    margin-top: 1.31rem;
  }
  .switch {
    width: 3rem;
    height: 2.75rem;
  }
  .group_1 {
    margin-left: 1rem;
    width: 8.38rem;
  }
  .image_1 {
    margin-left: 1.25rem;
    width: 3.56rem;
    height: 0.88rem;
  }
  .section_2 {
    margin-left: 0.31rem;
    margin-right: 0.13rem;
    padding: 0.75rem 0.69rem 0.81rem;
    background-color: rgb(196, 196, 196);
  }
  .buy-it-section {
    margin-left: 0.19rem;
    margin-top: 0.88rem;
    padding: 0.56rem 0.94rem 0.69rem 1.44rem;
    background-color: rgb(196, 196, 196);
    border-radius: 0.19rem;
  }
  .image-wrapper {
    margin-top: 1.31rem;
    padding: 0.69rem 0 3.38rem;
    background-color: rgb(196, 196, 196);
    border-radius: 0.25rem;
  }
  .create_center {
    margin-top: 1.38rem;
    padding: 0 0.88rem 0.31rem;
    background-color: rgb(196, 196, 196);
    border-radius: 0.25rem;
  }
  .section_1 {
    background-color: rgb(196, 196, 196);
    height: 0.94rem;
  }
  .image {
    margin-left: 0.44rem;
    margin-top: 0.63rem;
    width: 4.81rem;
    height: 1.56rem;
  }
  .image_2 {
    width: 3.31rem;
    height: 2.63rem;
  }
  .section_3 {
    margin: 0.19rem 0 0.31rem 0.5rem;
    background-color: rgb(134, 123, 123);
    width: 0.063rem;
    height: 2.13rem;
  }
  .group_3 {
    width: 7.13rem;
  }
  .me-buy-it {
    align-self: center;
    background-color: rgb(195, 42, 42);
    width: 3rem;
    height: 1.44rem;
  }
  .image_3 {
    margin-left: 1.19rem;
    width: 2.94rem;
    height: 2.63rem;
  }
  .group_4 {
    padding: 0.5rem 0 0.63rem;
  }
  .create-btns {
    margin-left: 0.13rem;
    background-color: rgb(170, 24, 24);
    height: 3.06rem;
  }
  .button {
    margin-left: 0.13rem;
    margin-top: 0.31rem;
    padding: 0.38rem 0 0.31rem;
    background-color: rgb(184, 31, 31);
    border-radius: 0.31rem;
  }
  .buy-it-cnt-down {
    margin-top: 0.69rem;
  }
  .section_8 {
    background-color: rgb(137, 118, 118);
    width: 0.063rem;
    height: 0.88rem;
  }
  .section_4 {
    background-color: rgb(214, 41, 41);
    width: 3.25rem;
    height: 1rem;
  }
  .section_5 {
    margin-left: 0.5rem;
    background-color: rgb(212, 40, 40);
    width: 2.31rem;
    height: 1.06rem;
  }
  .section_6 {
    background-color: rgb(182, 41, 41);
    width: 2.44rem;
    height: 1rem;
  }
  .section_7 {
    margin-left: 0.69rem;
    background-color: rgb(168, 28, 28);
    width: 1.13rem;
    height: 1rem;
  }
</style>
