<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
                <span class="checkBtn">
                    <i class="fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i>
                </span>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
                <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: "TodoList",
    methods: {
        // removeTodo(todoItem, index) {
        //     // this.$emit('removeItem', todoItem, index);
        //     // vuex 사용 후---------------
        //     // $emit 사용할떄는 인자를 여러개 보낼 수 있지만 mutations commit 할때는 객체로 묶어서 보냄
        //     this.$store.commit('removeOneItem', {todoItem, index});
        // },
        // toggleComplete(todoItem, index) {
        //     // this.$emit('toggleItem', todoItem, index)
        //     // vuex 사용 후---------------
        //     this.$store.commit('toggleOneItem', {todoItem, index});
        // }

        // mapMutations 사용
        ...mapMutations({
            removeTodo: 'removeOneItem',
            toggleComplete: 'toggleOneItem'
        }),
        // removeTodo 에 store-mutatines 의 removeOneItem을 매칭
        // 기존에는 {todoItem, index}을 넘겼지만 map 뷰 속성을 사용하면 인자를 안넘겨줘도 유연하게 적용됨
        // 기존에 객체로 묶어서 2개의 인자를 보내줬으니 6,9라인에 선언할 떄도 인자를 객체로 묶어줘야 함
    },
    computed: {
        //store의 getters를 computed에 맵핑
        // todoItems() {
        //     return this.$store.getters.storedTodoItems;
        // }

        // --mapGetters 사용하기 // 객체(다른 이름으로 넣어주고 싶을 때), 배열로 사용하기
        // ...mapGetters({
        //     todoItems: 'storedTodoItems'
        // })
        ...mapGetters(['storedTodoItems'])
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
    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }


    /*리스트 아이템 트렌지션*/
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }

</style>