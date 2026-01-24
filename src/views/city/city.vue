<template>
  <div class="city top-page">
    <div class="top">
      <van-search 
          v-model="searchValue" 
          placeholder="城市/区域/位置" 
          shape="round" 
          show-action
          @cancel="cancelClick"
        />
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <!-- 遍历obj时是三个 arr是(item,index) -->
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- <city-group :group-data="currentGroup"/> -->
       <template v-for="(value, key, index) in allCities" :key="key">
        <!-- <h2 v-show="tabActive === key">{{ value.title }}</h2> -->
         <city-group v-show="tabActive === key" :group-data="value"/> 
       </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
// import { getCityAll } from '@/services'
import useCityStore from '@/stores/modules/citys'
import { storeToRefs } from 'pinia'
import cityGroup from './cpns/city-group-item.vue'

const router = useRouter()
const searchValue = ref('')
const cancelClick = () => {
    router.back()
}

// tab切换
const tabActive = ref()

/**
 * 在这里网络请求有两个缺点
 */
// 获取城市列表数据
// const allCity = ref({})
// getCityAll().then(res => {
//   allCity.value = res.data;
// })
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// 目的是获取当前tab对应的城市列表数据
// 1.获取正确的key:将tabs中绑定的tabActive正确绑定
// 2.根据key从allCities中获取对应的数据,默认直接获取的数据不是响应式的,需要使用computed包裹一下
const currentGroup = computed(() => {
  return allCities.value[tabActive.value]
})

</script>

<style scoped lang="less">
.city {
  // --van-tab-line-height: 90px;
  // 滚动条上面也会有
  // .top {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  // }
  // .content {
  //   margin-top: 98px;
  // }
  .top {
    position: relative;
    z-index: 10;
  }

  // 局部滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}

</style>