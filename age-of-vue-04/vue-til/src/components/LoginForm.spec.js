import { sum } from './math';

// describe('sum 함수 테스트 코드');
describe('math.js', () => {
	test('10 + 20 = 30', () => {
		const result = sum(10, 20);
		expect(result).toBe(30);
		// expect(result).not.toBe(15);
	});
});

// describe - 연관된 테스트 케이스를 그릅화하는 API
// test - 하나의 테스트 케이스를 검증하는 API
// expect - expect(result).toBe(30); result가 30이 맞는지 비교 ?
