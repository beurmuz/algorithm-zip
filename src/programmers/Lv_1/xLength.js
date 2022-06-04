/* 
    내 풀이
    - 처음에 i = i*x를 해주니 i값이 계속 더한값으로 갱신되는 바람에 다른 값이 출력됨
    - 연산한 값을 sum이라는 변수에 저장하고, sum을 push함
*/
function solution(x, n) {
    var answer = [];
    for(let i = 1; i <= n; i++) {
        sum = i*x;
        answer.push(sum);
    }
    return answer;
}


/* 
    다른 풀이
    - Array(n).fill(x)을 이용해 x로 다 채워놓은 후
    - map으로 안의 값 바꿔주는 방법
*/

2
3
4
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}