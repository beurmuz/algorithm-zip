// 내 풀이
/*
    그러나 10번 테스트케이스에서 실패했었는데..! 그 원인은  n = n.toString(3).split('').reverse().join('')*1; 때문!
    *1을 빼주니 100점 나왔다......
*/
function solution(n) {
    n = n.toString(3).split('').reverse().join('');
    return parseInt(n, 3); // n을 3진법에서 10진수로 변환
}


// 내 풀이 더 간결하게 바꾸기
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''),3);
}


// 내장함수 쓰지않고 풀어보기
function solution(n) {
    const answer = [];
    while(n !== 0) {
        answer.unshift(n % 3); // 배열의 맨 앞에 3으로 나눈 나머지 값 추가 
        n = Math.floor(n/3);
    }
    return answer.reduce((acc,v,i) => acc + (v * Math.pow(3, i)),0); // 10진법으로 변환해서 누적합구하기
}
