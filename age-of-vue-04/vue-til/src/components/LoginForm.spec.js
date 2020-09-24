// import Vue from 'vue';
import { shallowMount } from '@vue/test-utils'; // 뷰 공식 테스트 라이브러리
import LoginForm from './LoginForm';

describe('LoginForm.vue', () => {
	test('ID가 이메일 형식이 아니면 경고메시지가 출력된다.', () => {
		// shallowMount 두 번째 인자로 options를 객체형식으로 넣을 수 있다. 데이터 넘김 가능
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test',
					// username: 'test@abc.com',
				};
			},
		});
		const warningText = wrapper.find('.warning');
		// console.log(warningText.html());
		expect(warningText.exists()).toBeTruthy();
		// warningText가 있으면(exists()) true를 반환 // toBeTruthy는 true인지 아닌지 확인하는것

		// // html 요소에 접근하기
		// const idInput = wrapper.find('#username');
		// console.log(idInput.html());
		// console.log('인풋 박스의 값: ', idInput.element.value); // test
		//
		// console.log(
		// 	'LoginForm의 computed의 isUsernameVaild: ',
		// 	wrapper.vm.isUsernameValid,
		// );
	});

	test('ID가 이메일 형식으로 입력되지 않고 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: '',
					password: '',
				};
			},
		});
		const button = wrapper.find('.btn');
		expect(button.element.disabled).toBeTruthy();
		// .btn이 disalbed가 트루이면 ok false면 failed
	});
});

// ## 뷰/테스트-유틸 라이브러리 사용
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
