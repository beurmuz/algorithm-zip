/**
 * [정렬과 그리디]
 * - 입력값의 최대 크기가 10^5이므로 O(n^2)미만이 될 수 있도록 코드를 설계해야한다.
 * - 단순히 정렬 후 A[i], B[i] 값을 비교하는 형태로 풀면 23.8점을 받게 되므로 다른 방법을 고안해야한다.
 */

// 총점 23.8점 답안
function solution(A, B) {
  let sum = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    if (A[i] < B[i]) sum++;
  }

  return sum;
}

// 100점 답안
/**
 * - Max 값을 계속 B배열 마지막 인덱스에 유지시키는 방법으로 반복을 줄일 수 있다.
 * - 숫자는 한번만 사용할 수 있으므로 사용 후 B에서 제거함으로써 마지막 인덱스가 현재 가장 큰 원소가 되고, 순차적으로 A배열의 시작원소와 B배열의 마지막 원소를 비교할 수 있다.
 */
function solution(A, B) {
  let sum = 0;
  A.sort((a, b) => b - a); // 내림차순 정렬
  B.sort((a, b) => a - b); // 오름차순 정렬

  for (const a of A) {
    const max = B[B.length - 1]; // 남은 B중 가장 큰 값을 max에 넣는다.
    if (a < max) {
      sum++;
      B.pop(); // B의 마지막 원소인 max는 이미 비교가 끝났으므로 B에서 제거한다.
    }
  }

  return sum;
}
