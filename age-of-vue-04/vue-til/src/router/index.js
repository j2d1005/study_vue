import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

// import LoginPage from '../views/LoginPage';
// import SignupPage from '../views/SignupPage';

Vue.use(VueRouter);

const router = new VueRouter({
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
			path: '/main',
			component: () => import('../views/MainPage'),
			// meta 속성을 이용해서 라우터에 부가정보를 부여할 수 있다.
			meta: { auth: true },
		},
		{
			path: '/add',
			component: () => import('../views/PostAddPage'),
			meta: { auth: true },
		},
		{
			path: '/post/:id',
			component: () => import('../views/PostEditPage'),
			meta: { auth: true },
		},
		{
			// 위에 url을 제외한 모든 url에 대해 설정
			path: '*',
			component: () => import('../views/NotFoundPage'),
		},
	],
});

// 라우터 네비게이션가드 기본 문법
router.beforeEach((to, from, next) => {
	if (to.meta.auth && !store.getters.isLogin) {
		console.log('인증이 필요합니다.');
		next('/login');
		// 인증이 필요한 페이지이고 사용자가 로그인을 하지 않은 상태라면 /login으로 redirect
		return;
	}
	console.log(to);
	next();
	// next()를 호출해야지만 to 페이지로 이동할 수 있다.
});

export default router;

// 라우터 네비게이션가드를 사용할 때
// export default new VueRouter({});를

// const router = new VueRouter({});
// export default router;
// 로 변경해줘야 한다.
