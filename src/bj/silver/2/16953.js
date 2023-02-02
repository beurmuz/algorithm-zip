"use strict";

/**
 * 1. bfs로 푼 문제
 * - 문제에 최소 연산 횟수를 구하라 했으므로 bfs로 풀어야한다고 생각했다.
 * - 시간초과 방지를 위해 b를 넘는 경우는 전부 건너뛰었으며,
 * - b+1개만큼 visited 배열을 생성하는 대신 방문한 번호를 visited에 넣고 includes로 방문 여부를 알아보았다.
 */
const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const solution = (a, b) => {
  let answer = 0;
  const visited = [];
  const bfs = () => {
    let queue = [[a, 1]];

    while (queue.length) {
      let [now, count] = queue.shift();
      if (visited.includes(now)) continue;
      visited.push(now);

      for (let next of [now * 2, parseInt("" + now + "1")]) {
        if (next <= b) queue.push([next, count + 1]);
        if (next === b) {
          answer = count + 1;
          return;
        }
      }
    }
  };
  bfs();
  return answer === 0 ? -1 : answer;
};

console.log(solution(a, b));

/**
 * 2. dfs로 푼 방법
 * - 현재 값을 저장하면서 이동하면 된다.
 * - 1번에 비해 메모리는 반으로, 시간은 1/10으로 줄었다.
 *   => 훨씬 효율적!!
 */
const solution = (a, b) => {
  let answer = -1;
  const dfs = (now, count) => {
    if (now === b) {
      answer = count;
      return;
    }

    if (now * 2 <= b) {
      dfs(now * 2, count + 1);
    }
    if (now + "1" <= b) {
      dfs(parseInt(now + "1"), count + 1);
    }
  };
  dfs(a, 1);
  return answer === -1 ? -1 : answer;
};

console.log(solution(a, b));

/**
 * 3. 그리디로 푼 방법
 * - A와 B가 같아질 때까지 B를 계속 줄여나간다.
 * - A가 B보다 커지면 -1을, 같아지면 answer + 1을 출력한다.
 *
 * => 1, 2 풀이보다도 메모리를 가장 적게쓰며, 시간도 가장 빠르다.
 */
const solution = (a, b) => {
  let answer = 1;

  while (a !== b) {
    if (a > b) return -1;
    else if (getLastPositionNumber(b) === 1) {
      // 1의 자리에 있는 값이 1이면
      b = removeOneOfLastPosition(b); // 을 제거한 값을 b에 갱신한다.
      answer += 1;
    } else if (getLastPositionNumber(b) !== 1) {
      // 1의 자리에 있는 값이 1이 아니면
      b /= 2; // 2로 나눈 값을 b에 갱신한다.
      answer += 1;
    }
  }
  return answer;
};

const getLastPositionNumber = (number) => {
  // 가장 마지막 숫자를 return하는 함수
  return Number(String(number).split("")[String(number).split("").length - 1]);
};

const removeOneOfLastPosition = (number) => {
  // 1을 제거하고 return하는 함수
  const splited = String(number).split("");
  splited.pop();
  return Number(splited.join(""));
};

console.log(solution(a, b));
