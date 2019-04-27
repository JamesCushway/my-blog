import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

gtag('set', 'page', router.currentRoute.path);
gtag('send', 'pageview');

router.afterEach(( to, from ) => {
  gtag('set', 'page', to.path);
  gtag('send', 'pageview');
});
