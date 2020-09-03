<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer">
            <i class="fas fa-plus addBtn" v-on:click="addTodo"></i>
        </span>
    </div>
</template>

<script>
export default {
    name: "TodoInput",
    data: function() {
        return {
            newTodoItem : ''
        }
    },
    methods: {
        addTodo: function() {
            // newTodoItem에 값이 있을 때만 실행
            if(this.newTodoItem !== '') {
                // 체크되었는지와 내용을 obj에 저장
                var obj = {
                    completed: false,
                    item: this.newTodoItem
                }
                //localStorage 저장하는 로직
                // localStorage.setItem(Key, Value);
                // JSON.stringify 는 자바스크립트객체를 string으로 변환
                localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
                this.clearInput();
            }
        },
        clearInput: function() {
            //인풋 초기화 로직
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478fb, #8763fb);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }

</style>