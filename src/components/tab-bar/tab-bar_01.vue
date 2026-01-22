<template>
  <div class="tab-bar">
    <div class="tab-bar-item">
      <img src="@/assets/img/tab-un.png" alt="">
      <span class="text">首页</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tab-un.png" alt="">
      <span class="text">收藏</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tab-un.png" alt="">
      <span class="text">订单</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tab-un.png" alt="">
      <span class="text">消息</span>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import tabbarData from "@/assets/data/tabbar.js"
</script>

<style scoped lang="less">
  .tab-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;

    border-top: 1px solid #f3f3f3;

    .tab-bar-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;

      img {
        width: 32px;
        height: 32px;
        margin-top: 3px;
      }

      .text {
        font-size: 14px;
      }
    }

  }
</style>