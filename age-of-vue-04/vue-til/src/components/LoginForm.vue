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
		<button type="submit">login</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { loginUser } from '../api';

export default {
	data() {
		return {
			// form value
			username: '',
			password: '',
			// log message
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			try {
				//비즈니스 로직
				const userData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(userData);
				this.logMessage = `${data.user.username} 님 환영합니다!`;
				this.initform();
			} catch (error) {
				// 에러 핸들링 코드
				console.log(error.response.data);
				this.logMessage = error.response.data;
			}
		},
		initform() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style scoped></style>
