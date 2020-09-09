import {fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchItem} from "@/api";

export default {
    FETCH_NEWS({ commit }) {
        fetchNewsList()
            .then(response => {
                // console.log(response);
                commit('SET_NEWS', response.data);
                // 액션에서는 state 바로 변경할 수 없다.
                // context.commit 를 통해서 mutation에 값을 전달해서 state를 수정가능
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit('SET_ASK', data)
                // 이렇게도 가능 response.data-> ({data}), context.commit -> ({commit})
            })
            .catch(error => console.log(error));
    },
    FETCH_JOBS(context) {
        fetchJobsList()
            .then(response => {
                context.commit('SET_JOBS', response.data)
            })
            .catch(error => console.log(error));
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => console.log(error));
    },
    FETCH_ITEM({commit}, postNum) {
        fetchItem(postNum)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch(error => console.log(error));
    }
}