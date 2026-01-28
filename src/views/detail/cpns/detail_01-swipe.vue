<template>
  <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
    <template v-for="(item, index) in swipeData" :key="item.id || index">
      <van-swipe-item class="item">
        <img :src="item.url" alt="" />
      </van-swipe-item>
    </template>
    <template #indicator="{ active, total }">
      <div class="indicator">
        <!-- 遍历分类组，key 使用分类标识 -->
        <template v-for="(categoryItems, categoryKey) in swipeGroup" :key="categoryKey">
          <span 
            class="indicator-item" 
            :class="{ active: swipeData[active]?.enumPictureCategory == categoryKey }"
          >
            <!-- 显示分类名称 -->
            {{ getName(categoryItems[0]?.title || '') }}
            <!-- 显示当前分类下的序号/总数 -->
            <span class="count" v-if="swipeData[active]?.enumPictureCategory == categoryKey">
              {{ getCategoryIndex(swipeData[active]) + 1 }}/{{ categoryItems.length }}
            </span>
          </span>
        </template>
      </div>
    </template>
  </van-swipe>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})

// 改为计算属性，保证响应式（数据变化时自动重新分组）
const swipeGroup = computed(() => {
  const group = {}
  for (const item of props.swipeData) {
    // 容错：确保分类标识存在
    const category = item.enumPictureCategory || 'default'
    if (!group[category]) {
      group[category] = []
    }
    group[category].push(item)
  }
  return group
})

// 正则提取分类名称，增加容错
const nameRegex = /【(.*?)】/i;
const getName = (name) => {
  if (!name) return '未分类'
  const res = nameRegex.exec(name)
  // 匹配失败时返回原名称（去除特殊符号）
  return res?.[1] || name.replace(/【|】|：/g, '')
}

// 获取当前图片在分类中的索引
const getCategoryIndex = (item) => {
  if (!item?.enumPictureCategory) return 0
  const categoryItems = swipeGroup.value[item.enumPictureCategory] || []
  return categoryItems.findIndex(data => data === item)
}
</script>

<style scoped lang="less">
.swipe-list {
  height: 200px; /* 建议设置默认高度，避免轮播图塌陷 */
  .item {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* 保持图片比例 */
    }
  }

  .indicator {
    display: flex;
    padding: 5px 8px;
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6); /* 半透明背景更友好 */
    border-radius: 12px; /* 圆角优化 */
    gap: 8px; /* 替代margin，更现代的间距方式 */

    .indicator-item {
      padding: 2px 6px;
      font-size: 12px;
      border-radius: 4px;
      transition: all 0.2s; /* 过渡动画 */
    }

    .count {
      margin-left: 4px;
      font-size: 11px;
    }
  }
}

/* 激活态样式 */
.active {
  background-color: #fff;
  color: #000;
}
</style>