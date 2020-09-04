import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        headerText: 'VUEX 예제'
    }
});



// vuex 요소
// state: 여러 컴포넌트에 공유되는 데이터 (data)
// getters: 연산된 state 값을 접근하는 속성 (computed)
// mutations: state 값을 변경하는 이벤트 로직,메서드 (methods)
// actions: 비동기 처리 로직을 선언하는 메서드 (async methods)