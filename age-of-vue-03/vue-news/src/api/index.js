import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl:'https://api.hnpwa.com/v0'
};

// 2. API 함수들 정리
// function fetchNewsList() {
//     return axios.get(`${config.baseUrl}/news/1.json`)
// }
// function fetchJobsList() {
//     return axios.get(`${config.baseUrl}/jobs/1.json`)
// }
// function fetchAskList() {
//     return axios.get(`${config.baseUrl}/ask/1.json`)
//     이 코드의 return 값이 new Promise 이다.
// }
//promise Ver
async function fetchList(category) {
    try {
        return await axios.get(`${config.baseUrl}/${category}/1.json`);
    }
    catch(error) {
        console.log(error);
    }
}
async function fetchUserInfo(name) {
    try {
        const response = await axios.get(`https://hacker-news.firebaseio.com/v0/user/${name}.json`);
        return response;
    }
    catch(error) {
        console.log(error);
    }
}
function fetchItem(postNum) {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${postNum}.json?print=pretty`);
}


export {
    // fetchNewsList,
    // fetchJobsList,
    // fetchAskList,
    fetchList,
    fetchUserInfo,
    fetchItem
}