<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer">
            <i class="fas fa-plus addBtn" v-on:click="addTodo"></i>
        </span>

        <Modal v-if="showModal" @close="showModal = false">
            <!--
              you can use custom content here to overwrite
              default content
            -->
            <h3 slot="header">
                경고!
                <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
            </h3>
            <p slot="body">할일을 입력하세요!</p>
        </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal';
import { mapMutations } from "vuex";

export default {
    name: "TodoInput",
    data() {
        return {
            newTodoItem: '',
            showModal: false
        }
    },
    methods: {
        ...mapMutations(['addOneItem']),
        addTodo() {
            // newTodoItem에 값이 있을 때만 실행
            if(this.newTodoItem !== '') {
                // this.$emit('이벤트 이름', 인자1, 인자2, ...);
                // this.$emit('addTodoItem', this.newTodoItem);

                // vuex 사용 후---------------
                const text = this.newTodoItem.trim();
                // 변수에 담아서 전송 .. trim()은 텍스트 앞뒤에 공백을 없애줌

                // this.$store.commit('addOneItem', text);
                this.addOneItem(text);
                this.clearInput();
            }else{
                this.showModal = true;
            }
        },
        clearInput() {
            //인풋 초기화 로직
            this.newTodoItem = '';
        }
    },
    components: {
        // Modal : Modal
        Modal
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
    .closeModalBtn {
        color: #45b983;
    }
</style>