<template>
  <div class="flex-col component">
    <div class="justify-between group">
      <div class="flex-row">
        <div class="section_1"></div>
        <div class="section_2"></div>
      </div>
      <div class="flex-row">
        <div class="section_3"></div>
        <div class="new-icon"></div>
      </div>
    </div>
    <div class="section_5"></div>
    <div class="flex-col items-center button">
      <div class="section_6"></div>
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
  .component {
    padding: 0 0.88rem 0.31rem;
    background-color: rgb(196, 196, 196);
    border-radius: 0.25rem;
  }
  .group {
    padding: 0.5rem 0 0.63rem;
  }
  .section_5 {
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
  .section_6 {
    background-color: rgb(137, 118, 118);
    width: 0.063rem;
    height: 0.88rem;
  }
  .section_1 {
    background-color: rgb(214, 41, 41);
    width: 3.25rem;
    height: 1rem;
  }
  .section_2 {
    margin-left: 0.5rem;
    background-color: rgb(212, 40, 40);
    width: 2.31rem;
    height: 1.06rem;
  }
  .section_3 {
    background-color: rgb(182, 41, 41);
    width: 2.44rem;
    height: 1rem;
  }
  .new-icon {
    margin-left: 0.69rem;
    background-color: rgb(168, 28, 28);
    width: 1.13rem;
    height: 1rem;
  }
</style>
