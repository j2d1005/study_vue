import Vue from 'vue';
import App from './App.vue';
import router from './router';
// router는 소문자로 받아야한다..
import store from './store';
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');
