<template>
  <div class="home">
    <div class="nar-bar">
      <home-nar-bar/>
      <div class="banner">
        <img src="@/assets/img/banner.jpg" alt="" />
      </div>
      <home-search-box/>
      <home-categories/>
      <div class="search-bar" v-if="isShowSearchBar">
        <search-bar/>
      </div>
      <home-content/>
    </div>
  </div>
</template>

<script setup>
import searchBar from '@/components/search-bar/search-bar.vue';
import homeNarBar from './cpns/home-nar-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import useHomeStore from '@/stores/modules/home';
import homeCategories from './cpns/home-categories.vue';
import homeContent from './cpns/home-content.vue';
import useScroll from '@/hooks/useScroll';
import { watch, ref, computed } from 'vue';


const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();
homeStore.fetchHouselistData();

const { isReachBottom, scrollTop } = useScroll();
watch(isReachBottom, (newVal) => {
  if (newVal) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false;
    });
  }
})

const isShowSearchBar = ref(false);
watch(scrollTop, (newVal) => {
   isShowSearchBar.value = newVal > 350
})


// computed定义出来的是响应式的ref，可以直接在模板中使用
// 定义的可响应式数据,依赖另外一个响应式数据，你们可以使用computed
// const isShowSearchBar = computed(() => {
//   return scrollTop.value > 100;
// })


</script>

<style lang="less" scoped>
  .banner{
    width: 100%;
    height: 200px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .search-bar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    z-index: 99;

  }
</style>