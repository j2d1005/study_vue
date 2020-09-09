export default {
// mutation은 첫번째 인자는 무조건 state
    SET_NEWS(state, news) {
        state.news = news;
    },
    SET_ASK(state, ask) {
        state.ask = ask;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
    SET_USER(state, user) {
        state.user = user;
    },
    SET_ITEM(state, item) {
        state.item = item;
    }
}