import Vue from 'vue';
import VueRouter from 'vue-router';

// import LoginPage from '../views/LoginPage';
// import SignupPage from '../views/SignupPage';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			// component: LoginPage,
			component: () => import('../views/LoginPage'),

			// 코드스플리팅
			// 기존에는 app.js안에 모든 파일이 다 합쳐져서 들어있지만
			// 이렇게 해두면 /login으로 이동했을 때 login페이지에 필요한 js코드들만 들고 옴
		},
		{
			path: '/signup',
			// component: SignupPage,
			component: () => import('../views/SignupPage'),
		},
		{
			// 위에 url을 제외한 모든 url에 대해 설정
			path: '*',
			component: () => import('../views/NotFoundPage'),
		},
	],
});
