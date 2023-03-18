"use strict";

const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

/**
 * 1. 내가 푼 풀이
 * - dfs로 순열을 구한다.
 */
const solution = (N, input) => {
  const visited = Array.from({ length: N + 1 }, () => 0);
  const answer = [];
  let front = Array.from({ length: N }, (_, idx) => ++idx).join("");
  let target = input.join("");

  // 1. front와 target의 값이 같으면 -1을 출력한다.
  if (front === target) return -1;

  // 2. target 앞에 오는 수를 찾는다.
  const permutation = (point, tmp) => {
    if (tmp.length === N) {
      if (+tmp.join("") === target) return;
      else {
        answer.push(tmp.join(""));
      }
    } else {
      for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
          visited[i] = 1;
          tmp.push(i);
          permutation(i, tmp);
          visited[i] = 0;
          tmp.pop();
        }
      }
    }
  };
  permutation(1, []);
  return answer[answer.length - 1];
};

console.log(solution(N, input));

/**
 * 2. 다른 풀이
 */
const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, next) => {
  let numbers = Array.from({ length: N }, (_, idx) => ++idx);
  let sortNumbers = [...numbers].sort((a, b) => a - b); //numbers배열 오름차순 정렬
  //next배열이 오름차순돼있다면 순열의 가장 처음 조합이므로 -1 출력
  if (next.every((num, index) => num === sortNumbers[index])) return -1;
  else {
    //배열의 맨 뒤에서부터 내림차순이 깨지는 순간의 index (i) 구하기
    let i = N - 2;
    while (next[i] < next[i + 1]) i--;

    //next[i] 뒤의 수 중에서 next[i]보다 작은 수 중에서 가장 큰 값을 가지는 index (j) 구하기
    let j = N - 1;
    while (next[i] < next[j]) j--;

    //next[i]와 next[j] swap하기
    [next[i], next[j]] = [next[j], next[i]];

    let rest = next.slice(i + 1); //next[i] 뒤의 값들만 가지는 rest 배열 만들기
    rest.sort((a, b) => b - a); //next[i] 뒤의 값들은 내림차순 정렬
    let answer = [...next.slice(0, i + 1), ...rest]; //떼놨던 next[i]까지의 수와 rest합치기
    return answer.join(" ");
  }
};

console.log(solution(N, input));
