<template>
  <div class="house-item">
    <div class="item-inner">
      <!-- 封面图作为背景，文字叠加在上面 -->
      <div class="cover">
        <img :src="itemData.image?.url" alt="">
        <!-- 文字信息层 -->
        <div class="infos">
          <div class="location">
            <img src="@/assets/img/tab.png" alt="" style="width: 10px;">
            <span>{{ itemData.location }}</span>
          </div>
          <div class="summary">{{ itemData.summaryText }}</div>
          <div class="name">{{ itemData.houseName }}</div>
          <div class="price">
            <van-rate :model-value="itemStore" allow-half/>
            <div class="new">{{ itemData.finalPrice }}</div>
            <div class="old">{{ itemData.productPrice }}</div>
            <div class="tip">{{ itemData.priceTipBadge?.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
});
const itemStore = computed(() => {
  return Number(props.itemData?.commentScore || 0)
});

</script>

<style scoped lang="less">
.house-item {
  // 卡片外层容器
  padding: 0 15px;
  margin-bottom: 12px;

  .item-inner {
    // 卡片内层容器
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    overflow: hidden;

    // 封面图容器（作为背景）
    .cover {
      position: relative; // 为文字层提供定位参考
      width: 100%; // 宽度自适应
      height: 180px; // 卡片高度，可根据需求调整
      background: #f5f5f5; // 图片加载前占位

      img {
        width: 100%;
        height: 100%;
        object-fit: cover; // 图片裁剪填充，保持比例
      }

      // 文字信息层（叠加在图片上）
      .infos {
        position: absolute;
        inset: 0; // 等同于top/right/bottom/left: 0，铺满整个图片
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // 渐变遮罩，保证文字在不同亮度图片上都清晰
        background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6));
        color: #fff; // 文字默认白色

        // 房源简介
        .summary {
          font-size: 11px;
          line-height: 1.4;
          opacity: 0.9; // 轻微透明，区分层级
          display: -webkit-box;
          -webkit-line-clamp: 1; // 单行省略
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        // 房源名称
        .name {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 8px;
          display: -webkit-box;
          -webkit-line-clamp: 1; // 单行省略
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        // 价格和评分区域
        .price {
          display: flex;
          align-items: center;
          justify-content: space-between;

          // 评分组件样式调整
          :deep(.van-rate) {
            margin-right: 8px;
          }

          // 价格样式
          .new {
            font-size: 18px;
            font-weight: 700;
            line-height: 1;
            // 价格文字加描边，提升在复杂背景上的可读性
            text-shadow: 0 1px 2px rgba(0,0,0,0.3);
          }
        }
      }
    }
  }
}
</style>