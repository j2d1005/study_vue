import { shallowMount } from '@vue/test-utils';
import SignupForm from './SiginupForm';

describe('SignupForm.vue', () => {
	test('ID가 이메일 형식이 아니면 에러메시지가 출력된다.', () => {
		const wrapper = shallowMount(SignupForm, {
			data() {
				return {
					username: 'test',
				};
			},
		});
		const warningText = wrapper.find('.warning');
		expect(warningText.exists()).toBeTruthy();
	});

	test('ID가 이메일 형식이 아니고 비밀번호와 닉네임이 없으면 버튼 비활성화', () => {
		const wrapper = shallowMount(SignupForm, {
			data() {
				return {
					// username: '1@11.com',
					// password: '1',
					// nickname: '1',

					username: '',
					password: '',
					nickname: '',
				};
			},
		});
		const button = wrapper.find('.btn');
		// console.log(button.element.disabled);
		expect(button.element.disabled).toBeTruthy();
	});
});
