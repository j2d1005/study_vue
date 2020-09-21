import Vue from 'vue';
import Vuex from 'vuex';
import { getAuthFromCookie, getUserFromCookie } from '../utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		// 쿠키에 해당 정보가 있으면 쓰고 없으면 '';
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
	},
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		clearUsername(state) {
			state.username = '';
		},
		setToken(state, token) {
			state.token = token;
		},
	},
});
