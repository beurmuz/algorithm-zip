// 내 풀이
function solution(num) {
    var answer = 'Odd';
    if(num%2===0) answer = 'Even';
    return answer;
}

// 더 간결한 코드
function solution(num) {
    return num % 2 == 0 ? "Even" : "Odd";
}