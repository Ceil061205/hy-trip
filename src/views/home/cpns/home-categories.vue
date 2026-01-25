<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="" class="icon">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
const homeStore = useHomeStore();
const { categories } = storeToRefs(homeStore);
</script>

<style scoped lang="less">
.categories {
  margin-top: 10px;
  display: flex;
  overflow-x: auto;
  /* 隐藏滚动条但保留滚动功能（适配多浏览器） */
  scrollbar-width: none; /* 火狐 */
  -ms-overflow-style: none; /* IE/Edge */
  height: 80px; /* 适当加高，提升视觉舒适度 */
  align-items: center; /* 垂直居中 */

  /* 隐藏Chrome等浏览器的滚动条 */
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    width: 70px;
    display: flex;
    flex-direction: column; /* 改为垂直布局（图片在上，文字在下） */
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    .icon {
      width: 32px;
      height: 32px;
      object-fit: contain; /* 保证图片不变形 */
      margin-bottom: 4px; /* 图片和文字之间的间距 */
    }

    .text {
      font-size: 12px;
      color: #333; /* 文字颜色统一 */
      white-space: nowrap; /* 防止文字换行 */
      overflow: hidden; /* 超出隐藏 */
      text-overflow: ellipsis; /* 超出显示省略号 */
      line-height: 1.2; /* 行高优化 */
    }
  }
}
</style>