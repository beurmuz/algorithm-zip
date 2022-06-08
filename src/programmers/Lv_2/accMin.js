// 내 풀이 - sort와 for문 이용
function solution(A,B){
    let answer = 0;
    A.sort((a, b) => a-b);
    B.sort((a, b) => b-a);
    
    for(let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }
    return answer;
}

/*
    1. A는 오름차순, B는 내림차순으로 정렬하기
    2. for문에서 각각의 갑 곱해서 누적합하기
*/


// 다른 풀이 - sort와 reduce이용
function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    return A.reduce((total, value, index) => total + value * B[index], 0)
}