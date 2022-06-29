// 내 풀이
/*
    하샤드 수: 각 자릿수의 합으로 나누어 떨어지는 수
*/
function solution(x) {
    let sum = 0;
    for(let v of String(x)) {
        sum += v*1;
    }
    return x % sum === 0 ? true : false;
}


// 다른 풀이 (수학적 접근방법)
function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10; // 10으로 나눈 나머지 값 (= 각 자릿수 합)
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}