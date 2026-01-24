<template>
  <div class="home">
    <div class="nar-bar">
      <home-nar-bar/>
      <div class="banner">
        <img src="@/assets/img/组件库样式修改方案.png" alt="" />
      </div>
      <div class="location">
        <div class="city">广州</div>
        <div class="position">
          <span>我的位置：</span>
          <img src="@/assets/img/tab-un.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import homeNarBar from './cpns/home-nar-bar.vue';
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
  .location{
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 8px;
    .city{
      font-size: 16px;
      color: #333;
    }
    .position{
      img{
        width: 15px;
        height: 15px;
      }
    }
  }
</style>