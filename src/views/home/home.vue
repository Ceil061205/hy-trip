<template>
  <div class="home">
    <div class="nar-bar">
      <home-nar-bar/>
      <div class="banner">
        <img src="@/assets/img/banner.jpg" alt="" />
      </div>
      <home-search-box/>
    </div>
  </div>
</template>

<script setup>
import homeNarBar from './cpns/home-nar-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
</script>

<style lang="less" scoped>
  .banner{
    width: 100%;
    height: 200px;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>