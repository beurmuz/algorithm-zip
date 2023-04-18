"use strict";

/**
 * 처음에 푼 풀이
 * => 빡! 구현했지만 정답이 다르게 나왔다. 테스트케이스 몇개는 맞고, 몇개는 틀렸다.
 */
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const solution_self = (input) => {
  const wheels = Array.from({ length: 4 }, (_, i) => input[i]);
  const visited = Array.from({ length: 4 }, () => 0);
  const k = +input[4]; // 회전 횟수

  const turnWheel = (num, direction) => {
    if (direction < 0)
      wheels[num] = wheels[num].slice(1, 8) + wheels[num].slice(0, 1); // 반시계
    else wheels[num] = wheels[num].slice(7, 8) + wheels[num].slice(0, 7); // 시계
  };

  for (let i = 5; i < 5 + k; i++) {
    let [pickNum, direction] = input[i].split(" ").map((v) => +v);
    // 해당 번호의 톱니를 회전시킨다.
    turnWheel(pickNum - 1, direction);
    visited[pickNum - 1] = direction;

    // 남은 맞물리는 부분들 검사하기
    let right = wheels[pickNum - 1][2];
    for (let i = pickNum; i < 4; i++) {
      if (right != wheels[i][6]) {
        turnWheel(i, visited[i - 1] * -1);
        visited[i] = visited[i - 1] * -1;
      }
      right = wheels[i][2];
    }

    let left = wheels[pickNum - 1][6];
    for (let i = pickNum - 1; i >= 0; i--) {
      // 3에서부터 => 왼쪽 방향으로 검사
      if (left != wheels[i][2]) {
        turnWheel(i, visited[i + 1] * -1);
        visited[i] = visited[i + 1] * -1;
      }
      left = wheels[i][6];
    }
  }

  let answer = 0;
  for (let i = 0; i < 4; i++) {
    if (wheels[i][0] == 1) {
      if (i == 0) answer += 1;
      else if (i == 1) answer += 2;
      else if (i == 2) answer += 4;
      else if (i == 3) answer += 8;
    }
  }
  return answer;
};

console.log(solution(input));

// 다시 푼 풀이법
const solution = (input) => {
  const wheels = Array.from({ length: 4 }, (_, i) => input[i]);
  const visited = Array.from({ length: 4 }, () => 0);
  const k = +input[4]; // 회전 횟수

  const turnWheel = (num, direction) => {
    if (direction === 1)
      wheels[num] = wheels[num].slice(7, 8) + wheels[num].slice(0, 7); // 시계
    else wheels[num] = wheels[num].slice(1, 8) + wheels[num].slice(0, 1); // 반시계
  };

  const setRotation = (num, direction) => {
    visited[num] = 1; // 방문 표시
    const [preNum, nextNum] = [num - 1, num + 1];

    if (preNum >= 0 && !visited[preNum]) {
      if (wheels[preNum][2] != wheels[num][6]) {
        setRotation(preNum, direction * -1);
      }
    }
    if (nextNum < 4 && !visited[nextNum]) {
      if (wheels[nextNum][6] != wheels[num][2]) {
        setRotation(nextNum, direction * -1);
      }
    }
    turnWheel(num, direction);
  };

  for (let i = 5; i < 5 + k; i++) {
    let [pickNum, direction] = input[i].split(" ").map((v) => +v);
    visited.fill(0); // 돌때마다 갱신해주어야한다.
    setRotation(pickNum - 1, direction);
  }

  let answer = 0;
  for (let i = 0; i < 4; i++) {
    if (wheels[i][0] == 1) {
      if (i == 0) answer += 1;
      else if (i == 1) answer += 2;
      else if (i == 2) answer += 4;
      else if (i == 3) answer += 8;
    }
  }
  return answer;
};

console.log(solution(input));
