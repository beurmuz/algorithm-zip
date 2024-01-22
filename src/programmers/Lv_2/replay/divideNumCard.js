/**
 * [정렬, 구현]
 * - 최대 공약수를 활용해 푸는 방법도 있지만, some()과 every()를 이용해 푸는 방법도 있다.
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
