import Vue from 'vue';
import Vuex from 'vuex';
import {
	getAuthFromCookie,
	getUserFromCookie,
	saveAuthToCookie,
	saveUserToCookie,
} from '../utils/cookies';
import { loginUser } from '../api/auth';

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
		clearToken(state) {
			state.token = '';
		},
	},
	actions: {
		async LOGIN({ commit }, userData) {
			const { data } = await loginUser(userData);
			// console.log(data.token);
			commit('setToken', data.token);
			commit('setUsername', data.user.username);
			// cookie 저장
			saveAuthToCookie(data.token);
			saveUserToCookie(data.user.username);
			return data;
			// 요기서 data를 return했기 때문에 loginForm에서
			// const data = await this.$store.dispatch('LOGIN', userData); 가능
		},
	},
});
