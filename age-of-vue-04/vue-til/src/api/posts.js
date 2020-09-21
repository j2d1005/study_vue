// 학습노트 CRUD 관련 API

import { postsInstance } from './index';

// 학습 노트 데이터 목록을 조회하는 API
// postsInstance에서 /post 를 포함해 모듈화 했기 때문에 여기서 / 만 써줘도 된다.
function fetchPosts() {
	// return postsInstance.get('posts');
	return postsInstance.get('/');
}

// 특정 학습 노트 데이터를 조회하는 API
function fetchPost(postId) {
	return postsInstance.get(postId);
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
	// return postsInstance.post('posts', postData);
	return postsInstance.post('/', postData);
}

// 학습 노트 데이터를 삭제하는 API
function deletePost(postId) {
	return postsInstance.delete(postId);
}

// 학습 노트 데이터를 수정하는 API
function editPost(postId, postData) {
	return postsInstance.put(postId, postData);
}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };
