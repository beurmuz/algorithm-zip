"use strict";

/**
 * 이분 검색을 이용한 방법
 *
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, k] = inputs.shift().split(" ");

function count(lines, mid) {
  let total = 0;
  lines.map((line) => {
    total += parseInt(line / mid);
  });
  return total;
}

function solution(k, n, inputs) {
  let lines = inputs.map((v) => +v).sort((a, b) => a - b); // 우선 오름차순으로 정렬한다.
  let lt = 1; // 최솟값(lt)은 1부터 시작한다.
  let rt = Math.max(...lines); // 최댓값(rt)은 가지고 있는 랜선의 길이 중 가장 큰 값을 넣어준다.

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2); // parseInt로 정수값을 구한다.
    let totalCount = count(lines, mid); // totlCount를 센다.

    if (totalCount >= k)
      lt =
        mid +
        1; // totalCount가 k보다 크거나 같으면 lt(시작점)를 mid+1로 갱신한다.
    else rt = mid - 1; // totalCount가 k보다 작으면 rt(끝점)를 mid - 1 로 갱신한다.
  }
  return rt;
}
console.log(solution(+k, +n, inputs));
