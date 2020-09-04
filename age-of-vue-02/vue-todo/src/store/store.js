import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters'
import * as mutations from './mutations'

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
    getters: getters,
    mutations: mutations
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