// 처음에 작성한 코드
/*
    생각해보니까 맨 처음에 나머지가 1인 값을 찾으면 바로 return하면 됨 (어차피 그 값이 제일 최솟값일테니!)
*/
function solution(n) {
    let min = n;
    for(let i = 1; i < n; i++) {
        if(n%i === 1) {
            min = min > i ? i : min; 
        }
    } 
    return min;
}


// 제출한 코드
/*
    최솟값을 찾자마자 바로 return함으로써 불필요한 연산 횟수를 줄임
*/
function solution(n) {
    for(let i = 1; i < n; i++) {
        if(n%i === 1) return i;
    } 
}