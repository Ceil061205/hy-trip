import { onMounted, onUnmounted, ref } from 'vue';
import { throttle } from 'underscore'


export default function useScroll() {
  const isReachBottom = ref(false);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const clientHeight = ref(0);
  // 监听window的滚动事件,当滚动到底部时加载更多数据,离开页面时移除滚动事件
  const scrollListenerHandler = () => {
    scrollTop.value = document.documentElement.scrollTop;//已经滚动了多少
    scrollHeight.value = document.documentElement.scrollHeight;//总可滚动的高度
    clientHeight.value = document.documentElement.clientHeight;//可视区域的高度
    if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
      isReachBottom.value = true;
    }
  }
  onMounted(() => {
    window.addEventListener('scroll', scrollListenerHandler)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandler)
  })
  return { isReachBottom, scrollTop, clientHeight, scrollHeight }
}