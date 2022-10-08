"use strict";

// 트리형태로 그려질 것 같다! => 각 정점 간의 경로가 하나씩만 존재하므로 방문한 경로가 곧 최단거리가 됨 => DFS로도 풀 수 있음
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = +input.shift();
const [person1, person2] = input.shift().split(" ");
const m = +input.shift();

const relations = input.reduce((acc, v) => {
  const [parent, child] = v.split(" "); // 앞: 부모, 뒤: 자식

  // 부모key가 없으면
  if (!acc[parent]) {
    acc[parent] = [child]; // 그 부모key 선언과 동시에 자식을 할당하고
  } else {
    acc[parent].push(child); // key가 이미 있으면 자식을 추가해주기
  }

  // 자식key가 없으면
  if (!acc[child]) {
    acc[child] = [parent]; // 자식key 선언과 동시에 부모를 할당
  } else {
    acc[child].push(parent); // key가 이미 있으면 부모 추가해주기
  }
  return acc; // 모든 값을 저장한 객체 acc를 반환해 relations 배열에 할당하기
}, {}); // reduce 메서드는 빈 객체에서 시작함

function dfs(start, target) {
  const visited = Array(n + 1).fill(0); // 방문을 표시할 visited 배열 생성
  visited[start] = 1; // 시작점 방문 체크
  const stack = [[start, 0]];
  while (stack.length) {
    // stack이 있는 동안
    const [person, depth] = stack.pop(); // 맨 뒤에 있는 값을 빼서
    if (person === target) {
      return depth;
    }
    if (relations[person]) {
      relations[person].forEach((nextPerson) => {
        if (!visited[nextPerson]) {
          visited[nextPerson] = 1;
          stack.push([nextPerson, depth + 1]);
        }
      });
    }
  }
  return -1;
}

console.log(dfs(person1, person2));
