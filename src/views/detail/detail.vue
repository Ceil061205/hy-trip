<template>
  <div class="detail top-page" ref="detailRef">
    <span v-if="showTabControl">1111111111</span>
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart">
      <detail-swipe :ref="getRef" :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detail-info :top-infos="mainPart.topModule"/>
      <detail_03Facility/>
      <detail_07Map/>
      <hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr><hr>
      <hr><hr><hr><hr><hr><hr>
    </div>
  </div>
</template>

<script setup>
import detail_07Map from './cpns/detail_07-map.vue';
import detailSwipe from './cpns/detail_01-swipe.vue';
import detailInfo from './cpns/detail_02-infos.vue';
import detail_03Facility from './cpns/detail_03-facility.vue';
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from '@/services';
import { computed, ref } from 'vue';
import useScroll from '@/hooks/useScroll';

const route = useRoute();
const router = useRouter();
const houseId = route.params.id;

const detailInfos = ref({});
const mainPart = computed(() => {
  return detailInfos.value.mainPart;
});
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data;
});


const onClickLeft = () => {
  router.back();
};

const detailRef = ref(null);
const { scrollTop } = useScroll(detailRef);
const showTabControl = computed(() => {
  return scrollTop.value > 100;
})

const seEl = [];
const getRef = (value) => {
  
}



</script>

<style scoped lang="less">
</style>