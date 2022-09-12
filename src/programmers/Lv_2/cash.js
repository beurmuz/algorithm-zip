'use strict';
function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];
    if (cacheSize === 0) return 5 * cities.length; // cache miss(5) * cities.length
    for (const city of cities) {
        const cityLC = city.toLowerCase();
        if (cache.includes(cityLC)) {
            cache.splice(cache.indexOf(cityLC), 1); // cityLC가 있는 위치부터 1개 자르기
            cache.unshift(cityLC); // 맨 앞에 cityLC 붙이기
            answer += 1; // 실행시간이 1 늘어남
        } else {
            if (cache.length >= cacheSize) cache.pop(); // 캐시 크기를 초과하는 경우 맨 뒤 값을 삭제함
            cache.unshift(cityLC); // 맨 앞에 cityLC 붙이기
            answer += 5; // cache miss(5)
        }
    }
    return answer;
}