// 내가 푼 풀이
function solution(a, b) {
    let answer = 0;
    for(let i = 0; i < a.length; i++) {
        answer += (a[i] * b[i]);
    }
    return answer;
}

// 더 간단한 풀이
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}