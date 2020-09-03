<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
                <span class="checkBtn">
                    <i class="fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
                </span>
                <span v-bind:class="{textCompletd: todoItem.completed}">{{todoItem.item}}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "TodoList",
    props: ['todoItems'],
    methods: {
        removeTodo: function(todoItem, index) {
            console.log(todoItem, index);
            // localStorage.removeItem(Key이름);
            localStorage.removeItem(todoItem);
            // localStorage에서 지우고 data.todoItem에도 지워줘야 함.
            this.todoItems.splice(index, 1);
            // splice 값을 지우고 새로운 배열을 반환
            // slice 배열자체에서 값만 지움
        },
        toggleComplete: function(todoItem) {
            todoItem.completed = !todoItem.completed;
            //localstorage는 업데이트 기능이 없어서 지운 뒤 다시 올려야함
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height:50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .checkBtnCompleted {
        color: #b3adad;
    }
    .textCompletd {
        text-decoration: line-through;
        color: #b3adad;
    }

</style>