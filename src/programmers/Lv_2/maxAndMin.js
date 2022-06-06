// 내가 푼 풀이 - 내장함수 이용
function solution(s) {
    let arrayS = s.split(' ');
    return Math.min(...arrayS) + ' ' + Math.max(...arrayS);
}