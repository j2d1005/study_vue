<template>
    <div>
        <TodoHeader />
        <TodoInput v-on:addTodoItem="addOneItem" />
        <TodoList v-bind:todoItems="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"/>
        <TodoFooter v-on:clearAll="clearAllItem" />
    </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
    data() {
        return {
            todoItems: []
        }
    },
    methods: {
        addOneItem(todoItem) {
            // 체크되었는지와 내용을 obj에 저장
            const obj = {
                completed: false,
                item: todoItem
            }
            //localStorage 저장하는 로직
            // localStorage.setItem(Key, Value);
            // JSON.stringify 는 자바스크립트객체를 string으로 변환
            localStorage.setItem(todoItem, JSON.stringify(obj));
            this.todoItems.push(obj);
        },
        removeOneItem(todoItem, index) {
            // localStorage.removeItem(Key이름);
            // 여기서 key랑 id를 같은 값으로 해놔서 이렇게 해도 되는 것..
            localStorage.removeItem(todoItem.item);
            // localStorage에서 지우고 data.todoItem에도 지워줘야 함.
            this.todoItems.splice(index, 1);
        },
        toggleOneItem(todoItem, index) {
            // todoItem.completed = !todoItem.completed;
            // 내린 데이터를 다시 올려받아서 수정하는 건 별로 좋지 못함. 아래처럼 작성하기
            this.todoItems[index].completed = !this.todoItems[index].completed


            //localstorage는 업데이트 기능이 없어서 지운 뒤 다시 올려야함
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        clearAllItem() {
            localStorage.clear();
            this.todoItems = [];
        }
    },
    created() {
        //vue 인스턴스 생성되자마자 실행
        if (localStorage.length > 0){
            for (let i = 0; i < localStorage.length; i++) {
                // 자동으로 localStorage에 저장되어있는 부분 제외
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    //JSON.parse - JSON.stringify로 문자열로 바꾼 객체를 다시 객체형식으로 바꿔줌
                    // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
    },
    components: {
        // "TodoHeader": TodoHeader,
        // "TodoInput": TodoInput,
        // "TodoList": TodoList,
        // "TodoFooter": TodoFooter,
        //객체의 속성명과 값이 같으면 생략가능
        TodoHeader,
        TodoInput,
        TodoList,
        TodoFooter,
    }
}
</script>

<style>
    body {
        text-align: center;
        background-color:#f6f6f6;
    }
    input {
        border-style: groove;
        width: 200px;
    }
    button {
        border-style: groove;
    }
    .shadow {
        box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
    }

</style>