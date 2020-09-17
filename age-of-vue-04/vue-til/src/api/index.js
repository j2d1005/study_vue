import axios from 'axios';

const instance = axios.create({
	// baseURL: 'http://localhost:3000/',
	baseURL: process.env.VUE_APP_API_URL,
	// .env에서 key값에 VUE_APP_ 을 붙이면 자동으로 로드가 되어서 쉽게 호출 가능하다.
});

function registerUser(userData) {
	// const url = 'http://localhost:3000/signup';
	// return axios.post(url, userData);

	return instance.post('signup', userData);
	// promise이기 때문에 return을 해줘야 그 이후 비동기동작을 수행할 수 있다.
}

export { registerUser };
