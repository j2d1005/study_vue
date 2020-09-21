// 학습노트 CRUD 관련 API

// 학습 노트 데이터를 조회하는 API
import { postsInstance } from './index';

// postsInstance에서 /post 를 포함해 모듈화 했기 때문에 여기서 / 만 써줘도 된다.
function fetchPosts() {
	// return postsInstance.get('posts');
	return postsInstance.get('/');
}

// 학습 노트 데이터를 생성하는 API
function createPosts(postData) {
	// return postsInstance.post('posts', postData);
	return postsInstance.post('/', postData);
}

export { fetchPosts, createPosts };
