<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门"/>
        <div class="list">
          <template v-for="(city, index) in groupData?.hotCities" :key="index">
            <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
          </template>
        </div>

      <template v-for="(group, index) in groupData?.cities" :key="index">
        <van-index-anchor :index="group.group">{{ group.group }}</van-index-anchor>
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
      </template>
    </van-index-bar>

    <!-- <div v-for="(group, index) in groupData?.cities" :key="index">
      <div class="group-item">
        <h2 class="title">标题: {{ group.group }}</h2>
        <div class="list">
          <template v-for="(city, indey) in group.cities" :key="indey">
            <div class="city">{{ city.cityName }}</div>
          </template>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import useCityStore from '@/stores/modules/citys'
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})
const indexList = computed(() => {
  const list = props.groupData?.cities?.map((item) => item.group);
  list.unshift('#');
  return list;
})

const router = useRouter();
const cityStore = useCityStore();
const cityClick = (city) => {
  cityStore.currentCity = city;
  router.back();
}
</script>

<style scoped lang="less">
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;
    .city {
      width: 75px;
      height: 28px;
      border-radius: 14px;
      font-size: 12px;
      text-align: center;
      line-height: 28px;
      color: #000;
      background-color: #fff4ec;
      margin: 10px 0;
    }
  }
</style>