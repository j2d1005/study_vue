// 로그인, 회원가입
import { instance } from './index';

// 회원가입 API
function registerUser(userData) {
	// const url = 'http://localhost:3000/signup';
	// return axios.post(url, userData);

	return instance.post('signup', userData);
	// promise이기 때문에 return을 해줘야 그 이후 비동기동작을 수행할 수 있다.
}

// 로그인 API
function loginUser(userData) {
	return instance.post('login', userData);
}

export { registerUser, loginUser };
