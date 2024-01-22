/**
 * 1. [정렬로 푸는 방법]
 * - 정렬과 every, some을 이용해서 푸는 방법이 있다.
 * - 해당 방법을 이용하면 풀리긴하나 시간이 오래 걸린다.
 */
const solution = (arrayA, arrayB) => {
  let intA = getInt(arrayA, arrayB);
  let intB = getInt(arrayB, arrayA);

  return intA > intB ? intA : intB;
};

const getInt = (A, B) => {
  // 오름차순으로 정렬한다. => 가장 작은 값을 찾기 위함
  A.sort((a, b) => a - b);

  // 가장 큰 값부터 1까지 순회하면서 양의 정수 num을 찾는다.
  for (let num = A[0]; num > 1; num--) {
    // A의 요소들이 num으로 모두 나누어떨어지고, B의 요소들이 num으로 모두 안나눠지는 경우
    if (A.every((a) => a % num === 0) && !B.some((a) => a % num === 0))
      return num;
  }
  return 0; // 조건을 만족하는 값이 없다면 0을 return 한다.
};

/**
 * 2. [최대 공약수 - 유클리드 호제법 문제]
 * - 두 수의 최대 공약수를 구할 때 유클리드 호제법을 이용하는 방법이다.
 * - 자연수 a와 b에서(단 a>b) a를 b로 나눈 나머지를 r이라고 했을때 GCD(a, b) = GCD(b, r)과 같고 "r이 0이면 그때 b가 최대공약수이다."라는 원리를 활용한 알고리즘
 *   ex) GCD(24,16) -> GCD(16,8) -> GCD(8,0) : 최대공약수 = 8
 * - 1번 풀이에 비해 굉장히 적은 시간이 소모된다.
 */
const gcd = (n1, n2) => {
  // n1을 n2로 나눈 나머지를 r에 저장한다.
  let r = n1 % n2;
  // n2가 0이면 n1이 최대공약수가 된다.
  return n2 === 0 ? n1 : gcd(n2, r);
};

function solution(arrayA, arrayB) {
  let answer = 0;
  let [gcdA, gcdB] = [arrayA[0], arrayB[0]];

  // i를 1부터 arrayA의 길이까지 순회한다.
  for (let i = 1; i < arrayA.length; i++) {
    gcdA = gcd(gcdA, arrayA[i]);
    gcdB = gcd(gcdB, arrayB[i]);
  }

  // gcdA나 gcdB가 1이면 최대공약수가 없다는 것이다.
  if (gcdA === 1) gcdA = 0;
  if (gcdB === 1) gcdB = 0;

  if (arrayA.every((v) => v % gcdB !== 0)) answer = Math.max(answer, gcdB);
  if (arrayB.every((v) => v % gcdA !== 0)) answer = Math.max(answer, gcdA);

  return answer;
}
