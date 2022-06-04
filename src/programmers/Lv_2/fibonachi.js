/*
    내가 푼 방법
    - 우선 테스트케이스 7부터 쭉 시간 초과 + 런타임 에러가 남
        -> 재귀로 풀면 안된다고 하며 %1234567을 하라는 이유는 따로있음
        이유) 숫자 A, B, C가 있다고 하면 (A + B) % C의 값은 ( ( A % C ) + ( B % C) ) % C와 같다는 성질로, 모듈러 연산의 성질에 대해 읽어보면 됨
             위의 성질로 인해 1234567로 나눈 나머지를 출력하라고 한 것.
             조금만 숫자가 커져도 피보나치는 int로 표현할 수 있는 범위를 넘겨버리는데, 매번 1234567로 나눈 나머지만을 저장하는 것은 int의 범위에서 문제를 풀기 위함임
             피보나치 수를 계산한 다음에 나올 수를 1234567로 나눈 나머지는 각 연산을 수행할 때마다 1234567로 나누는 것과 완벽하게 동일한 숫자가 나옴
             
             즉,1234567로 나눈 나머지를 리턴하라는 것은 int 자료형의 범위 내에 항상 값이 있을 수 있도록 한 것이고 (A + B) % C ≡ ( ( A % C ) + ( B % C) ) % C라는 성질을 이용해서 int 범위 내에 항상 값이 존재함을 보장할 수 있음
*/

function solution(n) {
    let answer = 0;
    
    function fibonachi(n) {
        if(n === 0) return 0;
        if(n === 1) return 1;
        
        return fibonachi(n-1) + fibonachi(n-2)
    }
    answer = fibonachi(n);
    return answer % 1234567;
}

/*
    다시 푼 방법
*/

function solution(n) {
    let answer = fibonachi(n);
    return answer % 1234567;
}

function fibonachi(n) {
    let fibo = [];
    fibo[0] = 0;
    fibo[1] = 1;
    fibo[2] = 1;
    for (let i = 3; i <= n; i++) {
        fibo[i] = (fibo[i-1]%1234567 + fibo[i-2]%1234567);
    }
    return fibo[n];
}