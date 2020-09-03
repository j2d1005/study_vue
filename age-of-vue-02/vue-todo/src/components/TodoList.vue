<template>
    <div>
        <ul>
            <li v-for="todoItems in todoItems" v-bind:key="todoItems" class="shadow">
                {{todoItems}}
                <span class="removeBtn" v-on:click="removeTodo">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "TodoList",
    data: function() {
        return {
            todoItems: []
        }
    },
    methods: {
        removeTodo: function() {

        }
    },
    created: function() {
    //vue 인스턴스 생성되자마자 실행
        if (localStorage.length > 0){
            for (var i = 0; i < localStorage.length; i++) {
                // 자동으로 localStorage에 저장되어있는 부분 제외
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    this.todoItems.push(localStorage.key(i));
                }
            }
        }
    }
}
</script>

<style>
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