import { onMounted, onUnmounted, ref } from 'vue';
import { throttle } from 'underscore'


export default function useScroll(elRef) {
  let el = window;

  const isReachBottom = ref(false);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const clientHeight = ref(0);
  // 监听window的滚动事件,当滚动到底部时加载更多数据,离开页面时移除滚动事件
  const scrollListenerHandler = () => {
    if (el === window) {
      scrollTop.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      scrollHeight.value = document.body.scrollHeight;
      clientHeight.value = document.documentElement.clientHeight || document.body.clientHeight;
    } else {
      scrollTop.value = el.scrollTop;
      scrollHeight.value = el.scrollHeight;
      clientHeight.value = el.clientHeight;
    }
    if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
      isReachBottom.value = true;
    }
  }
  onMounted(() => {
    if (elRef) {
      el = elRef.value
    }
    window.addEventListener('scroll', throttle(scrollListenerHandler, 100))
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandler)
  })
  return { isReachBottom, scrollTop, clientHeight, scrollHeight }
}