"use strict";

/**
 * 처음에 생각한 풀이법
 * - 조합으로 각 원소들의 합이 s인 경우를 찾고, 최대곱을 갱신하며 그때의 인덱스를 저장해 return
 *
 * 다시 생각한 풀이법
 * - TIP: 최고의 집합은 각 원소들의 차이가 작다.
 *        => n개의 수만큼 s/n의 몫으로 채워준 후, 나머지만큼 맨 뒷자리부터 +1씩 해주면 바로 구할 수 있다.
 */
const solution = (n, s) => {
  if (n > s) return [-1];
  const mid = Math.floor(s / n);
  const answer = Array.from({ length: n }, () => mid);

  // 나머지 만큼 순회한다.
  for (let i = 0; i < s % n; i++) {
    answer[answer.length - 1 - i] += 1; // 맨 뒤부터 ++
  }
  return answer;
};
