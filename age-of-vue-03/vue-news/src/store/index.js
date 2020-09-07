import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList } from "../api";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
    },
    getters: {
        //
        news(state) {
            return state.news;
        },
        ask(state) {
            return state.ask;
        },
        jobs(state) {
            return state.jobs;
        }
    },
    mutations: {
        // mutation은 첫번째 인자는 무조건 state
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => {
                    console.log(response);
                    context.commit('SET_NEWS', response.data);
                    // 액션에서는 state 바로 변경할 수 없다.
                    // context.commit 를 통해서 mutation에 값을 전달해서 state를 수정가능
                })
                .catch(error => {
                    console.log(error);
                })
        },
        FETCH_ASK({ commit }) {
            fetchAskList()
                .then(({ data }) =>{
                    commit('SET_ASK', data)
                    // 이렇게도 가능 response.data-> ({data}), context.commit -> ({commit})
                })
                .catch(error => console.log(error));
        },
        FETCH_JOBS(context) {
            fetchJobsList()
                .then(response =>{
                    context.commit('SET_JOBS', response.data)
                })
                .catch(error => console.log(error));
        }
    }
});