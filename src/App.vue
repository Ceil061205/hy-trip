<template>
  <div class="app">
    <router-view/>
    <!-- 隐藏底部tabbar: 方案一 -->
    <!-- <tab-bar v-if="!route.meta.hideTabBar"/> -->
     <tab-bar/>
  </div>
</template>

<script setup>
import tabBar from './components/tab-bar/tab-bar.vue';
// import { useRoute } from 'vue-router'
// const route = useRoute()
</script>

<style scoped>
</style>
