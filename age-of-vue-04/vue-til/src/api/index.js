import axios from 'axios';

function registerUser(userData) {
	const url = 'http://localhost:3000/signup';
	return axios.post(url, userData);
	// promise이기 때문에 return을 해줘야 그 이후 비동기동작을 수행할 수 있다.
}

export { registerUser };
