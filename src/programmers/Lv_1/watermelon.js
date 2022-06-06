// 내 풀이
function solution(n) {
    var answer = '수';
    while(1) {
        if(answer.length === n) return answer;
        if(answer.length%2 === 0) answer += '수';
        else answer += '박';
    }
}