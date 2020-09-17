import Vue from 'vue';
import App from './App.vue';
import router from './router';
// router는 소문자로 받아야한다..

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router,
}).$mount('#app');
