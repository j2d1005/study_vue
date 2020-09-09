import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl:'https://api.hnpwa.com/v0'
};

// 2. API 함수들 정리
function fetchNewsList() {
    return axios.get(`${config.baseUrl}/news/1.json`)
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}/jobs/1.json`)
}
function fetchAskList() {
    return axios.get(`${config.baseUrl}/ask/1.json`)
}
function fetchUserInfo(name) {
    return axios.get(`https://hacker-news.firebaseio.com/v0/user/${name}.json`)
}
function fetchItem(postNum) {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${postNum}.json?print=pretty`)
}

// function fetchList(category, page) {
//     return axios.get(`${config.baseUrl}/${category}/${page}.json`)
// }

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItem
}