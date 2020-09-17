<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">password: </label>
			<input id="password" type="password" v-model="password" />
		</div>
		<div>
			<label for="nickname">nickname: </label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<button
			type="submit"
			:disabled="!isUsernameVaild || !password || !nickname"
		>
			signup
		</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { registerUser } from '../api';
import { validateEmail } from '../utils/validation';
export default {
	data() {
		return {
			// form value
			username: '',
			password: '',
			nickname: '',
			// log
			logMessage: '',
		};
	},
	computed: {
		isUsernameVaild() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			console.log('form 제출');
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			const { data } = await registerUser(userData);
			// console.log(data);

			this.logMessage = `${data.username}님이 가입되었습니다!`;
			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style scoped></style>
