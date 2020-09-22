// import Vue from 'vue';
import { shallowMount } from '@vue/test-utils'; // 뷰 공식 테스트 라이브러리
import LoginForm from './LoginForm';

describe('LoginForm.vue', () => {
	test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
		// const instance = new Vue(LoginForm).$mount();
		const wrapper = shallowMount(LoginForm); // 보통 wrapper 라고 함
		// wrapper.vm 이 위 코드의 instatnce라고 보면 됨
		// console.log(instance);
		// console.log(wrapper.vm);
		expect(wrapper.vm.username).toBe('');
	});
});
