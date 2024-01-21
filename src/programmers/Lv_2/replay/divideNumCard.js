/**
 * [정렬, 구현]
 * - 최대 공약수를 활용해 푸는 방법도 있지만, some()과 every()를 이용해 푸는 방법도 있다.
 */
function solution(arrayA, arrayB) {
  // 각각에서 a를 찾는다.
  const aResult = getA(arrayA, arrayB);
  const bResult = getA(arrayB, arrayA);

  return aResult > bResult ? aResult : bResult;
}

function getA(A, B) {
  // 오름차순 정렬 후
  A.sort((a, b) => a - b);
  for (let i = A[0]; i > 1; i--) {
    // a가 i로 모두 나눠지고, b가 하나도 i로 나눠지지 않는 경우, i를 return 한다.
    if (A.every((a) => a % i === 0) && !B.some((b) => b % i === 0)) return i;
  }
  return 0;
}
