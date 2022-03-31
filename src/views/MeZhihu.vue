<template>
  <div class="flex-col page">
    <div class="justify-center">
      <img
        src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480226745051692490.png"
        class="switch"
      />
      <div class="flex-col group_1">
        <div class="section_1"></div>
        <img
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480226745054629632.png"
          class="image"
        />
      </div>
      <img
        src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480226745055815529.png"
        class="image_1"
      />
    </div>
    <div class="flex-col group_2">
      <MeCreate class="section_2" />
      <BuyVip class="section_4" />
      <GridBook class="image-wrapper" />
      <CreateCenter class="section_6" />
    </div>
  </div>
</template>

<script>
  import MeCreate from '@/components/MeCreate.vue';
  import BuyVip from '@/components/BuyVip.vue';
  import GridBook from '@/components/GridBook.vue';
  import CreateCenter from '@/components/CreateCenter.vue';

  export default {
    components: {
      MeCreate,
      BuyVip,
      GridBook,
      CreateCenter,
    },
    data() {
      return {};
    },
  };
</script>

<style scoped lang="css">
  .section_2 {
    margin-left: 0.31rem;
    margin-right: 0.13rem;
  }
  .section_4 {
    margin-left: 0.19rem;
    margin-top: 0.88rem;
  }
  .image-wrapper {
    margin-top: 1.31rem;
  }
  .section_6 {
    margin-top: 1.38rem;
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
</style>