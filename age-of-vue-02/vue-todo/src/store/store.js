import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
    fetch() {
        //vue 인스턴스 생성되자마자 실행
        const arr = [];
        if (localStorage.length > 0){
            for (let i = 0; i < localStorage.length; i++) {
                // 자동으로 localStorage에 저장되어있는 부분 제외
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    //JSON.parse - JSON.stringify로 문자열로 바꾼 객체를 다시 객체형식으로 바꿔줌
                    // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
};

export const store = new Vuex.Store({
    state: {
        headerText: 'TODO IT!',
        todoItems: storage.fetch()
    },
    mutations: {
        addOnItem(state, todoItem) {
            // 체크되었는지와 내용을 obj에 저장
            const obj = {
                completed: false,
                item: todoItem
            }
            //localStorage 저장하는 로직
            // localStorage.setItem(Key, Value);
            // JSON.stringify 는 자바스크립트객체를 string으로 변환
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            // localStorage.removeItem(Key이름);
            // 여기서 key 랑 id를 같은 값으로 해놔서 이렇게 해도 되는 것..
            localStorage.removeItem(payload.todoItem.item);
            // localStorage 에서 지우고 state.todoItems 에도 지워줘야 함.
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            // 내린 데이터를 다시 올려받아서 수정하는 건 별로 좋지 못함. 아래처럼 작성하기
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed

            //localstorage는 업데이트 기능이 없어서 지운 뒤 다시 올려야함
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItem(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    }
});


// vuex 요소
// state: 여러 컴포넌트에 공유되는 데이터 (data)
// getters: 연산된 state 값을 접근하는 속성 (computed)
// mutations: state 값을 변경하는 이벤트 로직,메서드 (methods)
// actions: 비동기 처리 로직을 선언하는 메서드 (async methods)



// actions 비동기 코드 예제

// **store.js**
//     mutations: {
//         setData(state, fetchedData) {
//             state.product = fetchedData;
//         }
//     },
//     actions: {
//         fetchProductData(context) {
//             return axios.get('https://domain.com/products/1')
//                 .then(response => context.commit('setData', response));
//         }
//     }

// **App.vue**
//     methods: {
//         getProduct() {
//             this.$store.dispatch('fetchProductData');
//         }
//     }

// 순서
// 1. App.vue 에서 getProduct를 호출 -
//     this.$store.dispatch 로 store의 actions의 fetchProductData에 접근
// 2. 정의한 비동기 코드를 실행
//     actions는 첫 인자로 context를 받음 / context.commit 로 mutations에 접근
// 3. mutations에서 함수 실행에서 state값 변경