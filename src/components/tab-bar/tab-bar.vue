<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="index">
      <div 
        class="tab-bar-item" 
        :class="{ active: currentIndex === index }"
        @click="itemClick(index, item)"
      >
        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
        <img v-else :src="getAssetURL(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import tabbarData from "@/assets/data/tabbar.js"
import { getAssetURL } from "@/utils/load_assets.js"
import { useRouter } from 'vue-router'

const currentIndex = ref(0);
const router = useRouter();
const itemClick = (index, item) => {
  currentIndex.value = index;
  router.push(item.path);
}



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

      &.active {
        color: var(--primary-color);
      }

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