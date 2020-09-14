import {
    // fetchAskList, fetchJobsList, fetchNewsList,
    fetchList, fetchUserInfo, fetchItem } from "@/api";

export default {
    // FETCH_NEWS({ commit }) {
    //     fetchNewsList()
    //         .then(response => {
    //             // console.log(response);
    //             commit('SET_NEWS', response.data);
    //             // 액션에서는 state 바로 변경할 수 없다.
    //             // context.commit 를 통해서 mutation에 값을 전달해서 state를 수정가능
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    // FETCH_ASK({ commit }) {
    //     fetchAskList()
    //         .then(({ data }) => {
    //             commit('SET_ASK', data)
    //             // 이렇게도 가능 response.data-> ({data}), context.commit -> ({commit})
    //         })
    //         .catch(error => console.log(error));
    // },
    // FETCH_JOBS(context) {
    //     fetchJobsList()
    //         .then(response => {
    //             context.commit('SET_JOBS', response.data)
    //         })
    //         .catch(error => console.log(error));
    // },

    // promise Ver
    // FETCH_LIST({ commit }, pageName) {
    //    return fetchList(pageName)
    //         .then(({ data }) => {
    //             commit('SET_LIST', data);
    //         })
    //         .catch(error => console.log(error));
    // },
    // async Ver
    // async FETCH_LIST(context, pagename) {
    //     const response = await fetchList(pagename);
    //     context.commit('SET_LIST', response.data);
    //     return response;
    //     // return을 안해주게 되면 화면에서 비동기 순서를 보장할 수 없다.
    // },


    // 일반적으로 try, catch는 비즈니스 로직을 많이 처리하는 actions보다 api쪽에서 많이 호출하는게 깔끔하다.
    async FETCH_LIST({commit}, pagename) {
        const response = await fetchList(pagename);
        commit('SET_LIST', response.data);
        return response;
        // return을 안해주게 되면 화면에서 비동기 순서를 보장할 수 없다.
    },
    //
    async FETCH_USER({ commit }, name) {
        const response = await fetchUserInfo(name);
        commit('SET_USER', response.data)
        return response;
    },
    async FETCH_ITEM({commit}, postNum) {
        try {
            const response = await fetchItem(postNum);
            commit('SET_ITEM', response.data);
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
}