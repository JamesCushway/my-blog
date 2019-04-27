import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

ga('set', 'page', router.currentRoute.path);
ga('send', 'pageview');

router.afterEach(( to, from ) => {
  ga('set', 'page', to.path);
  ga('send', 'pageview');
});
