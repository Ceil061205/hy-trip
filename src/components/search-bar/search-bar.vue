<template>
  <div class="search-bar">
    <div class="select-time">
      <div class="item start">
        <div class="name">住</div>
        <div class="date">{{ startDateStr }}</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="date">{{ endDateStr }}</div>
      </div>
    </div>
    <div class="content">
      <div class="keyword-placeholder">关键字/民宿</div>
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useMainStore from "@/stores/modules/mainStore";
import { computed } from "vue";
import { formatMonthDay } from "@/utils/format_data";

const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);
const startDateStr = computed(() => {
  return formatMonthDay(startDate.value, "MM.DD");
})
const endDateStr = computed(() => {
  return  formatMonthDay(endDate.value, "MM.DD");
})
</script>

<style scoped lang="less">
// 搜索栏整体容器
.search-bar {
  display: flex;
  align-items: center;
  height: 48px; // 舒适的移动端高度
  padding: 0 16px;
  background-color: #fff;
  border-radius: 24px; // 胶囊形圆角
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  margin: 0 16px 16px;
  transition: box-shadow 0.2s ease;

  &:active {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  }

  // 左侧日期选择区
  .select-time {
    flex-shrink: 0;
    padding: 8px 12px;
    padding-right: 12px;
    border-right: 1px solid #f0f0f0;
    display: flex; // 横向排列住离两个项
    gap: 12px; // 住离之间的间距

    .item {
      display: flex;
      flex-direction: row; // 改为横向排列（核心修改）
      align-items: center;
      justify-content: center;
      white-space: nowrap; // 防止换行

      .name {
        font-size: 12px;
        color: #666;
        margin-right: 4px; // 文字和日期之间的间距（替代原来的margin-bottom）
        font-weight: 400;
        flex-shrink: 0;
      }

      .date {
        font-size: 14px;
        color: #333;
        font-weight: 500;
        line-height: 1.2;
      }
    }
  }

  // 中间关键字输入区（自适应）
  .content {
    flex: 1;
    padding: 0 16px;

    .keyword-placeholder {
      font-size: 15px;
      color: #999;
      line-height: 1.4;
      font-weight: 400;
    }
  }

  // 右侧搜索图标区
  .right {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon-search {
      display: inline-block;
      width: 100%;
      height: 100%;
      color: #666;

      &::before {
        content: "";
        display: block;
        width: 18px;
        height: 18px;
        border: 1.5px solid currentColor;
        border-radius: 50%;
        position: relative;

        &::after {
          content: "";
          display: block;
          width: 7px;
          height: 1.5px;
          background-color: currentColor;
          position: absolute;
          right: -1px;
          bottom: -2px;
          transform: rotate(-45deg);
        }
      }
    }
  }
}

// 响应式适配 - 小屏设备优化
@media (max-width: 375px) {
  .search-bar {
    height: 44px;
    padding: 0 12px;

    .select-time {
      padding: 6px 8px;
      padding-right: 8px;
      gap: 8px;

      .item {
        .name {
          font-size: 11px;
          margin-right: 3px;
        }

        .date {
          font-size: 13px;
        }
      }
    }

    .content {
      padding: 0 12px;

      .keyword-placeholder {
        font-size: 14px;
      }
    }

    .right {
      width: 20px;
      height: 20px;
    }
  }
}
</style>