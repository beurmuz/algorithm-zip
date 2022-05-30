function solution(n, m) {
    var answer = [];
    
    // 최대공약수
    function getGreatestCommonDivisor(n, m) {
        let gcd = 1;
        for(let i = 2; i <= Math.min(n, m); i++) {
            if(n%i === 0 && m%i === 0) gcd = i;
        }
        return gcd;
    }
    
    // 최소공배수
    function getLeastCommonMultiple(n, m) {
        let lcm = 1;
        while(1) {
            if((lcm%n === 0) && (lcm%m) === 0) {
                break;
            } 
            lcm++;
        }
        return lcm;
    }
    
    let num1 = getGreatestCommonDivisor(n,m);
    let num2 = getLeastCommonMultiple(n,m);
    
    answer.push(num1);
    answer.push(num2);
    
    return answer;
}

console.log(solution(5, 10));