import Vue from 'vue';
import App from './App.vue';
import router from './router';
// router는 소문자로 받아야한다..
import store from './store';
import { formatDate } from './utils/filters';

Vue.config.productionTip = false;
// 전역 필터 사용하기
Vue.filter('formatDate', formatDate);

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');
