// 내 풀이
function solution(num) {
    let answer = 0;
    while(num > 1) {
        if(answer > 500) return -1;
        num = num % 2 === 0 ? num/2 : num*3+1;
        answer++;
    }
    return answer;
}


// 재귀로 푸는 방법
/*
    while문보다 속도는 느리다고한다
*/
function collatz(num, count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}