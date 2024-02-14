/**
 * [구현, 수학]
 */
// 23.12.21 풀이
const solution = (n, s) => {
  if (n > s) return [-1];

  const mid = parseInt(s / n);
  const answer = Array.from({ length: n }, () => mid); // n자릿수의 배열을 만들어 mid로 채운다.

  // (s/n)의 나머지만큼 순회한다.
  for (let i = 0; i < s % n; i++) {
    answer[n - 1 - i] += 1; // 맨 뒷자리부터 1씩 증가시킨다.
    // 이게 가능한 이유는, 최고의 집합은 각 원소들의 차이가 작다는 특징이 있기 때문이다.
  }

  return answer;
};

// 24.02.14 풀이
function solution(n, s) {
  if (n > s) return [-1]; // 최고의 집합을 만들 수 없는 경우

  // 최고의 집합은 중간값에 가까울수록 곱이 가장 크다.
  const mid = Math.floor(s / n);
  const answer = Array.from({ length: n }, () => mid);

  for (let i = 0; i < s % n; i++) {
    // 나머지만큼 순회
    answer[answer.length - 1 - i]++; // 맨 뒤부터 앞으로 1씩 증가시키기
  }

  return answer;
}
