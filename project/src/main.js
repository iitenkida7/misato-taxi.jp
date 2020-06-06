import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

Vue.use(VueAnalytics, {
  id: 'UA-43152705-1',
  router
});