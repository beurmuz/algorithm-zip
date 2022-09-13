'use strict';

// 내 풀이
/*
    요즘 문제 해결 패턴을 찾기 위해 열심히 노력하고있다..!
    이 문제의 경우 홀수, 짝수의 경우를 따로 계산해주면 되었다.
*/
function solution(n) {
    let answer = 0;
    while(n > 0) {
        if(n % 2 === 0) { // 짝수인 경우
            n = n / 2; // 순간 이동이라 카운팅 X
        } else { // 홀수인 경우
            n = (n-1) / 2 ; 
            answer++;
        }
    }
    return answer;
}


// 다른 풀이 방법
/*
    이진수로 푸는 방법이라는데, 어떻게 이진수를 활용할 수 있는지는 잘 모르겠다.
*/
function solution(n) {
    if(n === 1) return 1;
    const nArr = Array.from(n.toString(2));
    return nArr.reduce((a,b)=>(+a)+(+b));
}


// 또다른 이진수로 푸는 법
/*
    이진수로 변환 후 0을 모두 ''으로 만들어줌으로써 1의 개수만 구하고 있다.
    구해보니 정답..
*/
function solution(n) {
    return n.toString(2).replace(/0/g,"").length
}
