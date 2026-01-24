<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="index">
        <!-- <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item> -->
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </template>
    </van-tabbar>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import tabbarData from "@/assets/data/tabbar.js"
import { getAssetURL } from "@/utils/load_assets.js"

const currentIndex = ref(0);


</script>

<style scoped lang="less">
  .tab-bar {
    // --van-tabbar-item-icon-size: 20px;

    // 直接找到对应的类名，然后修改里面的样式, 无效(因为scoped只作用于当前组件的样式，不会影响到子组件的样式)
    // 去掉scoped，但是这样会影响到全局的样式, 解决办法是使用:deep(子组件中的元素选择器)伪类选择器就可以了找到子组件的类名进行修改样式
    :deep(.van-tabbar-item__icon){
      font-size: 20px;
    }
    img {
      width: 24px;
      height: 24px;
    }

  }
</style>