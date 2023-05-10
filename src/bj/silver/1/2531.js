"use strict";

/**
 * ✅ 조건 잘 읽고 이해하기! ✅
 *
 * while문의 조건을 어떻게 처리해주어야하나.. 계속 고민이었다.
 * - 회전 초밥이므로 한 바퀴를 다 돌때까지 (= lt가 n이 될때까지) while문을 반복하면 되는 것이었다.
 *
 * 무조건 k개의 접시를 먹어야하므로, k개의 접시를 유지하며 while문을 순회한다.
 * c번 초밥도 무조건 연속적인 경우에만 먹을 수 있는 줄 알았는데, k를 먹을 때 k개 안에 c번 초밥이 없으면 하나 더 먹을 수 있는 것이었다.
 */
const [inputs, ...sushi] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs, sushi) => {
  /**
   * n: 벨트에 놓인 접시 수
   * d: 초밥의 가짓수
   * k: 연속해서 먹는 접시의 수
   * c: 쿠폰 번호
   */
  const [n, d, k, c] = inputs.split(" ").map((v) => +v);
  sushi = sushi.map((v) => +v);
  let answer = 0;
  let count = 0;
  let plate = sushi.slice(0, k).reduce((acc, v) => {
    if (acc[v]) acc[v]++; // 중복
    else {
      // 없는 경우
      acc[v] = 1;
      count++;
      answer++;
    }
    return acc;
  }, {}); // { '7': 2, '9': 1, '30': 1 }

  let [lt, rt] = [0, k - 1]; // 투 포인터

  while (lt < n) {
    // 회전 초밥이 한 바퀴 돌 때까지 과정 반복하기
    // console.log(lt, rt);
    // 맨 앞 초밥 버리고 맨 끝 + 1 초밥 추가하기
    if (plate[sushi[lt]] === 1) count--;
    plate[sushi[lt]]--; // else로 푸는게 아니다. 이건 무조건 감소해야하는 값
    lt++;
    rt++;

    if (rt === n) rt = 0; // 회전 초밥이므로 rt를 0으로 바꾼다.

    // 맨 끝 + 1 초밥 추가하기
    if (plate[sushi[rt]]) {
      // 있다면 기존에 있는 초밥에 +1
      plate[sushi[rt]]++;
    } else {
      // 없다면 새로 만들기
      plate[sushi[rt]] = 1;
      count++; // 새로운 가짓수가 생겼으므로 count를 증가
    }
    answer = Math.max(answer, count + !plate[c]); // c번 초밥이 plate에 없다면 c번을 추가로 하나 더 먹을 수 있으므로 +1을 해서 answer를 업데이트한다.
  }
  return answer;
};

console.log(solution(inputs, sushi));
