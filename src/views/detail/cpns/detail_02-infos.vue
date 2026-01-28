<template>
  <div class="infos">
    <div class="name">{{ topInfos.houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in topInfos.houseTags">
        <span class="item" v-if="item.tagText" :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment">
      <div class="left">
        <span class="score">{{ topInfos.commentBrief.overall }}</span>
        <span class="title">{{ topInfos.commentBrief.scoreTitle }}</span>
        <span class="brief">{{ topInfos.commentBrief.commentBrief }}</span>条评论
      </div>
      <div class="right">
        <span class="count">
          {{ topInfos.commentBrief.totalCount }}人好评
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="location">
      <div class="left">
        {{ topInfos.nearByPosition.address }}
      </div>
      <div class="right">
        地图-周边
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  topInfos: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style scoped lang="less">
// 外层容器整体样式
.infos {
  width: 100%;
  padding: 16px; // 内边距，避免内容贴边
  box-sizing: border-box; // 盒模型，padding不撑大容器
  background: #fff; // 白色背景，提升可读性
  border-radius: 8px; // 圆角，更柔和
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); // 轻微阴影，提升层次感

  // 房屋名称样式
  .name {
    font-size: 18px;
    font-weight: 600; // 加粗，突出名称
    color: #333; // 深灰色文字，更易阅读
    margin-bottom: 12px; // 与下方标签间距
  }

  // 标签容器样式
  .tags {
    display: flex; // 横向排列
    flex-wrap: wrap; // 标签过多时自动换行
    gap: 8px; // 标签之间的间距（横向+纵向）
    margin-bottom: 16px; // 与下方评论间距

    .item {
      display: inline-block;
      padding: 4px 12px; // 标签内边距
      font-size: 12px;
      border-radius: 12px; // 圆角标签，更美观
      white-space: nowrap; // 标签文字不换行
    }
  }

  // 评论容器样式
  .comment {
    display: flex; // 左右两侧横向排列
    justify-content: space-between; // 左右两端对齐
    align-items: center; // 垂直居中
    padding: 12px 0; // 上下内边距，拉开与上下内容的距离
    border-top: 1px solid #f5f5f5; // 顶部分隔线
    border-bottom: 1px solid #f5f5f5; // 底部分隔线
    margin-bottom: 12px; // 与下方地址间距

    .left {
      display: flex; // 评分、标题、评论数横向排列
      align-items: center; // 垂直居中
      gap: 8px; // 元素之间间距

      .score {
        font-size: 16px;
        font-weight: 700;
        color: #ff6b00; // 橙色评分，突出重点
      }

      .title {
        font-size: 14px;
        color: #666;
      }

      .brief {
        font-size: 12px;
        color: #999; // 浅灰色，弱化次要信息
      }
    }

    .right {
      .count {
        display: flex;
        align-items: center;
        gap: 4px; // 文字与图标间距
        font-size: 12px;
        color: #666;
        cursor: pointer; // 鼠标悬浮变手型，暗示可点击

        &:hover {
          color: #ff6b00; // 悬浮变色，提升交互感
        }
      }
    }
  }

  // 地址容器样式
  .location {
    display: flex; // 左右两侧横向排列
    justify-content: space-between; // 左右两端对齐
    align-items: center; // 垂直居中
    font-size: 14px;
    color: #666;

    .right {
      color: #ff6b00; // 地图文字突出，暗示可点击
      cursor: pointer; // 鼠标悬浮变手型

      &:hover {
        text-decoration: underline; // 悬浮下划线，增强交互提示
      }
    }
  }
}
</style>