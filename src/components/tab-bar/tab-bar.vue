<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route @change="onChange">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <!-- 相当于默认插槽这里 -->
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import tabbarData from "@/assets/data/tabbar.js"
import { getAssetURL } from "@/utils/load_assets.js"
import { useRoute } from 'vue-router'

const currentIndex = ref(0);
const route = useRoute();
watch(route, (newRoute) => {
  const index = tabbarData.findIndex(item => item.path === newRoute.path);
  if (index === -1) return;
  currentIndex.value = index;
})

</script>

<style scoped lang="less">
  .tab-bar {
    img {
      width: 24px;
      height: 24px;
    }

  }
</style>