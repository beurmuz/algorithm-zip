// 내 풀이방법
function solution(n) {
    var answer = n.toString().split('').reverse();
    for(let x = 0; x < answer.length; x++) {
        answer[x] = parseInt(answer[x]);
    }
    return answer;
}

// 더 간단한 풀이방법
function solution(n) {
    return (n + '').split('').reverse().map(v => parseInt(v));
}

// 수학으로 푸는방법
function solution(n) {
    var answer = [];
    do {
        answer.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);
    return answer;
}