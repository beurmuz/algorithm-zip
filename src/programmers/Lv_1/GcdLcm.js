// 내 코드
function solution(n, m) {
    var answer = [];

    // 최대공약수
    function getGcd() {
        let gcd = 1;
        for(let i = 2; i <= Math.min(n, m); i++) {
            if(n%i === 0 && m%i === 0) gcd = i;
        }
        return gcd;
    } 

    // 최소 공배수
    function getLcm() {
        let lcm = 1;
        while(1) {
            if(lcm%n === 0 && lcm%m === 0) break;
            lcm++;
        }
        return lcm;
    }

    answer.push(getGcd(n,m));
    answer.push(getLcm(n,m));
    return answer;
}

// 다른사람 풀이 - 유클리드 호제법
function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function gcdlcm(a, b) {
    return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}

// 다른사람 풀이 - for문으로만 풀기
function gcdlcm(a, b) {
    var r;
    for(var ab= a*b; r = a % b; a = b, b = r){} // r = a % b가 0이 나오면 for문이 종료됨
    return [b, ab/b];
}