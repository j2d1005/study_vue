// 쿠키 저장
function saveAuthToCookie(value) {
	document.cookie = `til_auth=${value}`;
}
function saveUserToCookie(value) {
	document.cookie = `til_user=${value}`;
}

// 쿠키 불러오기
function getAuthFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
}
function getUserFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
}

// 쿠키 삭제
function deleteCookie(value) {
	document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
	saveAuthToCookie,
	saveUserToCookie,
	getAuthFromCookie,
	getUserFromCookie,
	deleteCookie,
};
