// import Vue from 'vue';
import { shallowMount } from '@vue/test-utils'; // 뷰 공식 테스트 라이브러리
import LoginForm from './LoginForm';

describe('LoginForm.vue', () => {
	test('ID는 이메일 형식이어야 한다', () => {
		// shallowMount 두 번째 인자로 options를 객체형식으로 넣을 수 있다. 데이터 넘김 가능
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					// username: 'test',
					username: 'test@abc.com',
				};
			},
		});
		// html 요소에 접근하기
		const idInput = wrapper.find('#username');
		console.log(idInput.html());
		console.log('인풋 박스의 값: ', idInput.element.value); // test

		console.log(
			'LoginForm의 computed의 isUsernameVaild: ',
			wrapper.vm.isUsernameValid,
		);
	});
});

// ##1 뷰/테스트-유틸 라이브러리 사용
// describe('LoginForm.vue', () => {
// 	test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
// 		// const instance = new Vue(LoginForm).$mount();
// 		const wrapper = shallowMount(LoginForm); // 보통 wrapper 라고 함
// 		// wrapper.vm 이 위 코드의 instatnce라고 보면 됨
// 		// console.log(instance);
// 		// console.log(wrapper.vm);
// 		expect(wrapper.vm.username).toBe('');
// 	});
// });
