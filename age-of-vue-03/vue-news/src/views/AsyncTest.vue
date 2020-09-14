<template>
    <div>
        <button @click="loginUser1">login</button>
        <h1>List</h1>
        <ul>
            <li v-for="item in items">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import { handleException } from '../utils/handler'

export default {
    data() {
        return {
            items: [],
        }
    },
    methods: {
        loginUser() {
            axios.get('http://jsonplaceholder.typicode.com/users/1')
                .then(response => {
                    if(response.data.id === 1) {
                        console.log('사용가자 인증 되었습니다.');
                        axios.get('http://jsonplaceholder.typicode.com/todos')
                            .then(response => {
                                this.items = response.data;
                            })
                    }
                })
                .catch(error => console.log(error))
        },

        async loginUser1() {
            // async를 사용하면 then. catch가 아니라 try catch를 사용함
            // try는 then보다 포괄적임.
            // then은 네트워크요청이나 비동기 요청에대해서만 처리를 함
            // try는 일반적인 자바스크립트의 오류도 처리할 수 있음
            try {
                const response = await axios.get('http://jsonplaceholder.typicode.com/users/1');
                if (response.data.id ===1) {
                    console.log('사용가자 인증 되었습니다.');
                    const list = await axios.get('http://jsonplaceholder.typicode.com/todos');
                    this.items = list.data;
                }
            } catch (error) {
                handleException(error);
                console.log(error);
            }
        }
    }
}
</script>
