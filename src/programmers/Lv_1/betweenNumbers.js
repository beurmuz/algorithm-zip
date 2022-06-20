// 내 풀이
function solution(left, right) {
    let answer = 0;
    for(let i = left; i <= right; i++) {
        let count = 1;
        for(let j = 2; j <= i; j++) {
            if(i%j === 0) count += 1;
        }
        answer = count % 2 === 0 ? answer+i : answer-i;
    }
    return answer;
}


// 다른 풀이
/*
    + 몰랐던 사실
    제곱근이 정수이면 약수의 개수가 홀수라고 한다!

    for문이 하나 줄어 연산속도가 향상된다!
*/
function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        Number.isInteger(Math.sqrt(i)) ? answer -= i : answer += i;
    }
    return answer;
}