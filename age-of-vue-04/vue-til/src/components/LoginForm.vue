<template>
	<div class="content">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">id: </label>
					<input id="username" type="text" v-model="username" />
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid && username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">password: </label>
					<input id="password" type="password" v-model="password" />
				</div>
				<button
					class="btn"
					type="submit"
					:disabled="!isUsernameValid || !password"
					:class="isUsernameValid || !password ? 'disabled' : null"
				>
					login
				</button>
				<p>{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import { validateEmail } from '../utils/validation';

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
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				//비즈니스 로직
				const userData = {
					username: this.username,
					password: this.password,
				};
				// const data = await this.$store.dispatch('LOGIN', userData); // actions 'LOGIN'에서 return값을 주면 이렇게 가져올 수 있음
				// console.log(data);
				await this.$store.dispatch('LOGIN', userData); // 이 로직이 끝나고 아래 함수가 실행되어야 하기 때문에 await
				this.$router.push('/main');
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

<style scoped>
.btn {
	color: white;
}
.btn:disabled {
	color: #dedede;
}
</style>
