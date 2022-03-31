<template>
  <div class="justify-between component">
    <div class="flex-col group">
      <div class="top-section"></div>
      <div class="top-section view_1"></div>
    </div>
    <div class="section_1"></div>
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
  .top-section {
    background-color: rgb(190, 43, 43);
    height: 0.94rem;
  }
  .component {
    padding: 0.56rem 0.94rem 0.69rem 1.44rem;
    background-color: rgb(196, 196, 196);
    border-radius: 0.19rem;
  }
  .group {
    width: 7.13rem;
  }
  .section_1 {
    align-self: center;
    background-color: rgb(195, 42, 42);
    width: 3rem;
    height: 1.44rem;
  }
  .view_1 {
    margin-top: 0.69rem;
  }
</style>