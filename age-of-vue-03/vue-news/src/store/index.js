import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // news: [],
        // ask: [],
        // jobs: [],
        list: [],
        user: {},
        item: {},
    },
    getters: {
        //
        // news(state) {
        //     return state.news;
        // },
        // ask(state) {
        //     return state.ask;
        // },
        // jobs(state) {
        //     return state.jobs;
        // },
        list(state) {
            return state.list;
        },
        user(state) {
            return state.user;
        },
        item(state) {
            return state.item;
        }
    },
    mutations,
    actions
});