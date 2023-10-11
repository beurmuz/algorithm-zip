function solution(n, m) {
  // 최대공약수
  function getGcd() {
    let gcd = 1;
    for (let i = 2; i <= Math.min(n, m); i++) {
      if (n % i === 0 && m % i === 0) gcd = i;
    }
    return gcd;
  }

  // 최소 공배수
  function getLcm() {
    let lcm = 1;
    while (1) {
      if (lcm % n === 0 && lcm % m === 0) break;
      lcm++;
    }
    return lcm;
  }
  return [getGcd(), getLcm()];
}
