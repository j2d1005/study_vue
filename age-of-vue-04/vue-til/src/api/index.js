import axios from 'axios';
import { setInterceptors } from './common/interceptores';

// axios 초기화 함수
function createInstance() {
	const instance = axios.create({
		// baseURL: 'http://localhost:3000/',
		// .env에서 key값에 VUE_APP_ 을 붙이면 자동으로 로드가 되어서 쉽게 호출 가능하다.
		baseURL: process.env.VUE_APP_API_URL,
	});
	// instance 공통설정을 한 뒤 setInterceptors함수를 실행
	return setInterceptors(instance);
}
const instance = createInstance();
// setInterceptors함수를 실행한 값을 리턴하고 그 리턴값은 instance라는 변수에 담아서 아래에서 사용
// createInstance라는 함수로 감싸지 않으면 15라인에 setInterceptors(instance)를
// const newInstance = setInterceptors(instance); 와 같은 방식으로 변수에 담아서 사용하면 된다.

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
