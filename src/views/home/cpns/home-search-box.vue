<template>
  <div class="search-box">
    <div class="location bottom-gray-line">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span>我的位置：</span>
        <img src="@/assets/img/tab-un.png" alt="" />
      </div>
    </div>

    <div class="date-range" @click="showCa = true">
      <!-- 拆分标签和日期，方便样式控制 -->
      <div class="date-item start">
        <div class="label">入住</div>
        <div class="value">{{ startDateStr }}</div>
      </div>
      <!-- 中间分隔/入住时长 -->
      <div class="date-divider">共{{ stayCount }}晚</div>
      <div class="date-item end">
        <div class="label">离店</div>
        <div class="value">{{ endDateStr }}</div>
      </div>
    </div>
    <van-calendar 
      v-model:show="showCa" 
      @confirm="onConfirm" 
      type="range"
      color="#ff9854"
      :round="false"
      :show-confirm="false"
    />
    <div class="hot-suggests">
      <div class="hot-suggest" v-for="(item, index) in hotSuggests" :key="index">
        <span class="item" :style="{color: item.tagText.color, background: item.tagText.background.color}">{{ item?.tagText.text }}</span>
      </div>
    </div>
    <div class="search-btn">
      <div class="btn" @click="searchBtnClick">
        搜索
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import useCityStore from "@/stores/modules/citys";
import { storeToRefs } from "pinia";
import { formatMonthDay, getDiffDays } from "@/utils/format_data";
import useHomeStore from "@/stores/modules/home";
import useMainStore from "@/stores/modules/mainStore";

const router = useRouter();
const cityName = ref("广州");
const cityClick = () => {
  router.push("/city");
};

const positionClick = () => {
  if (!navigator.geolocation) {
    console.error("浏览器不支持地理位置API");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log("位置获取成功:", res);
    },
    (err) => {
      console.error("获取位置失败:", err);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
};

const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);
console.log(currentCity.value);


const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);


const startDateStr = computed(() => formatMonthDay(startDate.value));
const endDateStr = computed(() => formatMonthDay(endDate.value));
const stayCount = ref(getDiffDays(startDate.value, endDate.value)); // 入住天数，默认为1晚

const showCa = ref(false);
const onConfirm = (value) => {
  mainStore.startDate = formatMonthDay(value[0]);
  mainStore.endDate = formatMonthDay(value[1]);
  stayCount.value = getDiffDays(value[0], value[1]);
  showCa.value = false;
};

const homeStore = useHomeStore();
// homeStore.fetchHotSuggestData();
const { hotSuggests } = storeToRefs(homeStore);

const searchBtnClick = () => {
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  });
};



</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
}
.location {
  display: flex;
  justify-content: space-between;
  align-items: center; /* 新增：垂直居中 */
  padding: 0 10px;
  margin-top: 8px;
  .city {
    font-size: 16px;
    color: #333;
    font-weight: 500; /* 新增：加重字体 */
  }
  .position {
    display: flex; /* 新增：文字和图标对齐 */
    align-items: center;
    font-size: 12px; /* 新增：缩小字体 */
    color: #666; /* 新增：浅灰色 */
    gap: 4px; /* 新增：文字和图标间距 */
    img {
      width: 15px;
      height: 15px;
    }
  }
}

// 核心调整的 date-range 样式
.date-range {
  display: flex;
  justify-content: space-between;
  align-items: center; /* 新增：垂直居中 */
  padding: 8px 10px; /* 调整：上下加内边距，更饱满 */
  margin-top: 12px; /* 调整：增大和上方的间距 */
  background-color: #f8f8f8; /* 新增：浅背景色，区分区域 */
  border-radius: 8px; /* 新增：圆角，更柔和 */
  
  // 日期项（入住/离店）
  .date-item {
    display: flex;
    flex-direction: column; /* 调整：标签和日期垂直排列 */
    align-items: center; /* 居中对齐 */
    flex: 1; /* 新增：占满剩余空间 */
    
    .label {
      font-size: 12px;
      color: #999; /* 标签浅灰色 */
      margin-bottom: 2px; /* 标签和日期间距 */
    }
    
    .value {
      font-size: 15px;
      color: #333;
      font-weight: 500; /* 日期加粗 */
    }
  }
  
  // 中间分隔（入住时长）
  .date-divider {
    font-size: 12px;
    color: #666;
    padding: 0 12px; /* 左右间距，避免挤在一起 */
    white-space: nowrap; /* 防止换行 */
  }
  
  // 原 start/end 样式兼容（可删除，已用 date-item 替代）
  .start, .end {
    span:nth-child(2) {
      color: #666;
    }
  }
}

.hot-suggests {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* 新增：间距 */
  padding: 10px; /* 新增：内边距，更饱满 */
  .hot-suggest {
    .item {
      line-height: 12px;
      font-size: 12px;
      border-radius: 4px;
      padding: 4px 8px;
    }
  }
}

.search-btn {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .btn {
    width: 300px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-liner-gradient);
  }
}
</style>