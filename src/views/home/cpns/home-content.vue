<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houselist" :key="item.data.houseId">
        <house-item-v9 :item-data="item.data" v-if="item.discoveryContentType === 9"/>
        <house-item-v3 :item-data="item.data" v-else-if="item.discoveryContentType === 3"/>

      </template>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useHomeStore from '@/stores/modules/home';
import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue';
import houseItemV3 from '@/components/house-item-v3/house-item-v3.vue';

const homeStore = useHomeStore();
const { houselist } = storeToRefs(homeStore);
</script>

<style scoped lang="less">
.content {
  padding: 10px;
  .title {
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  }
}
</style>