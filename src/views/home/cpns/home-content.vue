<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houselist" :key="item.data.houseId">
        <!-- 组件上绑定的会绑定到子元素的根组件上(有且只有一个根的情况下) -->
        <house-item-v9 :item-data="item.data" v-if="item.discoveryContentType === 9" 
          @click="itemClick(item.data)"
        />
        <house-item-v3 :item-data="item.data" v-else-if="item.discoveryContentType === 3"  
          @click="itemClick(item.data)"
        />

      </template>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useHomeStore from '@/stores/modules/home';
import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue';
import houseItemV3 from '@/components/house-item-v3/house-item-v3.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const homeStore = useHomeStore();
const { houselist } = storeToRefs(homeStore);

const itemClick = (item) => {
  router.push({
    path: '/detail/' + item.houseId,
  });
};
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