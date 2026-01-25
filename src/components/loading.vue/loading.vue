<template>
  <div class="loading" v-if="isLoading" @click="loadingClick">
    <div class="loading-content">
      <!-- 加载动画图标 -->
      <div class="loading-spinner"></div>
      <!-- 加载文字 -->
      <div class="loading-text">加载中...</div>
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/mainStore';
import { storeToRefs } from 'pinia';

const mainStore = useMainStore();
const { isLoading } = storeToRefs(mainStore);

const loadingClick = () => {
  isLoading.value = false
};

</script>

<style scoped lang="less">
.loading {
  position: fixed;
  z-index: 9999; // 提高层级确保覆盖所有内容
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15); // 更柔和的遮罩色
  backdrop-filter: blur(1px); // 毛玻璃效果提升质感
}

// 加载内容容器
.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px; // 图标和文字间距
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

// 旋转加载动画
.loading-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #f3f3f3; // 浅色边框
  border-top: 3px solid #409eff; // 主题色边框（可根据项目调整）
  border-radius: 50%;
  animation: spin 1s linear infinite; // 无限旋转动画
}

// 加载文字
.loading-text {
  font-size: 14px;
  color: #666;
  font-weight: 400;
}

// 旋转动画定义
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>