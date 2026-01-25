<template>
  <div class="detail top-page">
  <van-nav-bar
    title="房屋详情"
    left-text="旅途"
    left-arrow
    @click-left="onClickLeft"
  />

    <h1>Detail</h1>
    <p>这里是详情页</p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from '@/services';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();
const houseId = route.params.id;
getDetailInfos(houseId).then(res => {
  console.log(res);
});

const onClickLeft = () => {
  router.back();
};

</script>

<style scoped lang="less">
</style>