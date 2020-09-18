import store from '../../store';

// instance를 받아서 axios.interceptors가 아니라 instance.interceptors로 실행
export function setInterceptors(instance) {
	// Add a request interceptor (요청할 때 인터셉터)
	// 요청할 때마다 이 함수를 실행하는 것
	instance.interceptors.request.use(
		function(config) {
			// Do something before request is sent (보내기 전)
			console.log(config);
			config.headers.Autorization = store.state.token;
			return config;
		},
		function(error) {
			// Do something with request error (보낼 때 에러)
			return Promise.reject(error);
		},
	);

	// Add a response interceptor (응답받을 때 인터셉터)
	instance.interceptors.response.use(
		function(response) {
			// Any status code that lie within the range of 2xx cause this function to trigger
			// Do something with response data (받기 전)
			return response;
		},
		function(error) {
			// Any status codes that falls outside the range of 2xx cause this function to trigger
			// Do something with response error (받을 때 에러)
			return Promise.reject(error);
		},
	);

	return instance;
	// instace를 받아서 함수를 호춣하고 다시 instance를 리턴
}
