import Vue from 'vue'
import VueRouter from 'vue-router'

// ルート用のコンポーネントを読み込む
import TopPage from '@/components/TopPage.vue'
import Ir from '@/components/Ir.vue'
import Recruit from '@/components/Recruit.vue'

// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)
// VueRouterインスタンスを生成する
const router = new VueRouter({
  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    {
      path: '/',
      component: TopPage
    },
    {
      path: '/Ir',
      component: Ir
    },
    {
      path: '/recruit',
      component: Recruit
    }
  ]
})
// 生成したVueRouterインスタンスをエクスポート
export default router