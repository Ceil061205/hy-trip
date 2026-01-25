import { createRouter, createWebHashHistory } from 'vue-router'

// 创建路由实例
const router = createRouter({
  // 使用 Hash 模式的路由历史（URL 中带 # 号）
  history: createWebHashHistory(),
  // 路由规则配置
  routes: [
    // 根路径重定向到 /home
    { path: '/', redirect: '/home' },
    // 首页路由，懒加载组件
    { path: '/home', component: () => import('@/views/home/home.vue') },
    // 收藏页路由
    { path: '/favor', component: () => import('@/views/favor/favor.vue') },
    // 消息页路由
    { path: '/message', component: () => import('@/views/message/message.vue') },
    // 订单页路由
    { path: '/order', component: () => import('@/views/order/order.vue') },
    // 城市选择页路由（可选隐藏 TabBar）
    {
      path: '/city', 
      component: () => import('@/views/city/city.vue'),
      // meta: { hideTabBar: true } // 注释掉的自定义元信息，用于控制 TabBar 显示/隐藏
    },
    // 搜索页路由（修复了缺少的逗号，保留隐藏 TabBar 的配置）
    {
      path: '/search', 
      component: () => import('@/views/search/search.vue'),
      meta: { hideTabBar: true } // 自定义元信息，标记该页面需要隐藏 TabBar
    }
  ]
})

// 导出路由实例，供 Vue 应用挂载
export default router