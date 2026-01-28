<template>
  <div class="section">
    <div class="header">
      <h2></h2>
    </div>
    <div class="content">
      <slot>
        moren slot content
      </slot>
    </div>
    <div class="footer">
      <div class="more">
        <slot name="more">{{ moreText }}<van-icon name="arrow" /></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  moreText: {
    type: String,
    default: '查看全部设施'
  }
})
</script>

<style scoped lang="less">
</style>